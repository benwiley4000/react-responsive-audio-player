/* ShuffleManager
 *
 * Manages navigation throughout a list which is:
 * - Sourced from another provided list
 * - In random order (except to avoid consecutive duplicates)
 * - Extended endlessly on-the-fly, as needed
 * - Able to have future history overwritten by non-random choices
 * - Able to swap source lists and maintain shuffle order for common members
 */

class ShuffleManager {
  constructor (list, options = {}) {
    this.list = list;
    this.backStack = [];
    this.forwardStack = [];
    this.currentItem = null;

    this.setOptions(options);
  }

  findNextItem () {
    if (!this.list.length) {
      return undefined;
    }
    for (let i = 1; i <= this.forwardStack.length; i++) {
      if (this.list.indexOf(this.forwardStack[this.forwardStack.length - i]) !== -1) {
        goForward(this, i);
        return this.currentItem;
      }
    }
    if (allItemsMatch(this.list, this.currentItem)) {
      // we can serve this as our "next" item but we
      // won't modify our history since it's the same.
      return this.currentItem;
    }
    let nextItem;
    do {
        nextItem = this.list[Math.floor(Math.random() * this.list.length)];
    } while (this.currentItem === nextItem || nextItem === undefined);
    // if we're skipping items that aren't in our current list we may
    // have some items in our forwardStack - make sure we move to the front.
    goForward(this, this.forwardStack.length);
    if (this.currentItem !== undefined) {
      this.backStack.push(this.currentItem);
    }
    this.currentItem = nextItem;
    return this.currentItem;
  }

  findPreviousItem () {
    if (!this.list.length) {
      return undefined;
    }
    for (let i = 1; i <= this.backStack.length; i++) {
      if (this.list.indexOf(this.backStack[this.backStack.length - i]) !== -1) {
        goBack(this, i);
        return this.currentItem;
      }
    }
    if (!this.allowBackShuffle)
      return undefined;
    }
    if (allItemsMatch(this.list, this.currentItem)) {
      // we can serve this as our "next" item but we
      // won't modify our history since it's the same.
      return this.currentItem;
    }
    let previousItem;
    do {
        previousItem = this.list[Math.floor(Math.random() * this.list.length)];
    } while (this.currentItem === previousItem || previousItem === undefined);
    // if we're skipping items that aren't in our current list we may
    // have some items in our backStack - make sure we move to the back.
    goBack(this, this.backStack.length);
    if (this.currentItem !== undefined) {
      this.forwardStack.push(this.currentItem);
    }
    this.currentItem = previousItem;
    return this.currentItem;
  }

  pickNextItem (index) {
    if (this.list[index] === undefined) {
      return undefined;
    }
    if (this.currentItem !== undefined) {
      this.backStack.push(this.currentItem);
    }
    this.forwardStack.length = 0;
    this.currentItem = this.list[index];
    return this.currentItem;
  }

  setList (list) {
    this.list = list;
  }

  setOptions (options) {
    this.allowBackShuffle = Boolean(options.allowBackShuffle);
  }

  clear () {
    this.backStack.length = 0;
    this.forwardStack.length = 0;
    this.currentItem = null;
  }
}

function allItemsMatch (list, item) {
  if (!list.length) {
    return false;
  }
  for (let i = 0; i < list.length; i++) {
    if (item !== list[i]) {
      return false;
    }
  }
  return true;
}

function goForward (sm, n) {
  for (let i = 0; i < n; i++) {
    if (!sm.forwardStack.length) {
      sm.goBack(i); // rollback before erroring
      throw `Could not go forward ${n} times!`;
    }
    sm.backStack.push(sm.currentItem);
    sm.currentItem = sm.forwardStack.pop();
  }
}

function goBack (sm, n) {
  for (let i = 0; i < n; i++) {
    if (!sm.backStack.length) {
      sm.goForward(i); // rollback before erroring
      throw `Could not go back ${n} times!`;
    }
    sm.forwardStack.push(sm.currentItem);
    sm.currentItem = sm.backStack.pop();
  }
}

module.exports = ShuffleManager;