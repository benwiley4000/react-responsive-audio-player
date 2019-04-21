/* ShuffleManager
 *
 * Manages navigation throughout a list which is:
 * - Sourced from another provided list
 * - In random order (except to avoid consecutive duplicates)
 * - Extended endlessly on-the-fly, as needed
 * - Able to have future history overwritten by non-random choices
 * - Able to swap source lists and maintain shuffle order for common members
 */

export class ShuffleManager {
  constructor(list, options = {}) {
    this._list = list;
    this._forwardStack = [];
    this._backStack = [];
    this._currentItem = undefined;

    this._allowBackShuffle = Boolean(options.allowBackShuffle);
  }

  findNextItem(currentIndex) {
    if (currentIndex !== undefined) {
      this.setCurrentIndex(currentIndex);
    }
    this._currentItem = _findNextItem(
      this._list,
      this._forwardStack,
      this._backStack,
      this._currentItem,
      true
    );
    return this._currentItem;
  }

  findPreviousItem(currentIndex) {
    if (currentIndex !== undefined) {
      this.setCurrentIndex(currentIndex);
    }
    this._currentItem = _findNextItem(
      this._list,
      this._backStack,
      this._forwardStack,
      this._currentItem,
      this._allowBackShuffle
    );
    return this._currentItem;
  }

  pickNextItem(index, currentIndex) {
    if (currentIndex !== undefined) {
      this.setCurrentIndex(currentIndex);
    }
    if (this._list[index] === undefined) {
      return undefined;
    }
    if (this._currentItem !== undefined) {
      this._backStack.push(this._currentItem);
    }
    this._forwardStack.length = 0;
    this._currentItem = this._list[index];
    return this._currentItem;
  }

  setList(list) {
    this._list = list;
  }

  setOptions(options) {
    for (const o of Object.keys(options)) {
      switch (o) {
        case 'allowBackShuffle':
          this[`_${o}`] = Boolean(options[o]);
          break;
        default:
          break;
      }
    }
  }

  setCurrentIndex(currentIndex) {
    const item = this._list[currentIndex];
    if (this._currentItem !== item) {
      this.clear();
      this._currentItem = item;
    }
  }

  clear() {
    this._forwardStack.length = 0;
    this._backStack.length = 0;
    this._currentItem = undefined;
  }
}

function _goForward(n, forwardStack, backStack, currentItem) {
  let item = currentItem;
  for (let i = 0; i < n; i++) {
    if (!forwardStack.length) {
      // rollback before erroring (note stack reversal)
      _goForward(i, backStack, forwardStack, item);
      throw `Moving ${n} places was not possible!`;
    }
    backStack.push(item);
    item = forwardStack.pop();
  }
  return item;
}

function _allItemsMatch(list, item) {
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

function _findNextItem(list, forwardStack, backStack, currentItem, allowMore) {
  let item = currentItem;
  if (!list.length) {
    return undefined;
  }
  for (let i = 1; i <= forwardStack.length; i++) {
    if (list.indexOf(forwardStack[forwardStack.length - i]) !== -1) {
      return _goForward(i, forwardStack, backStack, item);
    }
  }
  if (!allowMore) {
    return undefined;
  }
  if (_allItemsMatch(list, item)) {
    // we can serve this as our "next" item but we
    // won't modify our history since it's the same.
    return item;
  }
  let nextItem;
  do {
    nextItem = list[Math.floor(Math.random() * list.length)];
  } while (item === nextItem || nextItem === undefined);
  // if we're skipping items that aren't in our current list we may
  // have some items in our forwardStack - make sure we move to the front.
  item = _goForward(forwardStack.length, forwardStack, backStack, item);
  if (item !== undefined) {
    backStack.push(item);
  }
  return nextItem;
}

export default ShuffleManager;
