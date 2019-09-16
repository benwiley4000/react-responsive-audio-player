/*
Adapted from resize-observer-polyfill which has this license:
The MIT License (MIT)

Copyright (c) 2016 Denis Rul

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Minimum delay before invoking the update of observers.
const REFRESH_DELAY = 20;

// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
const transitionKeys = [
  'top',
  'right',
  'bottom',
  'left',
  'width',
  'height',
  'size',
  'weight'
];

// Check if MutationObserver is available.
const mutationObserverSupported = typeof MutationObserver !== 'undefined';

const observedElements = new Set();
const cachedRects = new Map();
const elementCallbacks = new Map();

let scrollTop;
let scrollLeft;

let isSetup = false;
let mutationObserver;
function setup() {
  if (isSetup) {
    return;
  }
  document.addEventListener('transitionend', onTransitionend);
  window.addEventListener('resize', refresh);
  if (mutationObserverSupported) {
    mutationObserver = new MutationObserver(refresh);
    // we don't observe contents since the progress bar's contents
    // are expected to conform to the shape of the container
    mutationObserver.observe(document, { attributes: true, subtree: true });
  } else {
    document.addEventListener('DOMSubtreeModified', refresh);
  }
  document.addEventListener('scroll', updateScroll);
  updateScroll();
  isSetup = true;
}

function teardown() {
  if (!isSetup) {
    return;
  }
  document.removeEventListener('transitionend', onTransitionend);
  window.removeEventListener('resize', refresh);
  if (mutationObserverSupported) {
    mutationObserver.disconnect();
  } else {
    document.removeEventListener('DOMSubtreeModified', refresh);
  }
  document.removeEventListener('scroll', updateScroll);
  isSetup = false;
}

let refreshTimeout;
function refresh() {
  clearTimeout(refreshTimeout);
  const updatedElements = [];
  for (const element of observedElements) {
    const newRect = getRectForElement(element);
    if (rectsAreDifferent(cachedRects.get(element), newRect)) {
      cachedRects.set(element, newRect);
      updatedElements.push(element);
    }
  }
  for (const element of updatedElements) {
    elementCallbacks.get(element)(cachedRects.get(element));
  }
  if (updatedElements.length) {
    // check again in the future to make sure nothing wasn't about to change
    refreshTimeout = setTimeout(refresh, REFRESH_DELAY);
  }
}

function updateScroll() {
  const supportPageOffset = window.pageXOffset !== undefined;
  const isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
  scrollTop = supportPageOffset
    ? window.pageYOffset
    : isCSS1Compat
    ? document.documentElement.scrollTop  
    : document.body.scrollTop;  
  scrollLeft = supportPageOffset
    ? window.pageXOffset
    : isCSS1Compat
    ? document.documentElement.scrollLeft  
    : document.body.scrollLeft;  
}

function onTransitionend({ propertyName = '' }) {
  // Detect whether transition may affect dimensions of an element.
  const isReflowProperty = transitionKeys.some(key => {
    return propertyName.indexOf(key) !== -1;
  });
  if (isReflowProperty) {
    refresh();
  }
}

function getRectForElement(element) {
  const domRect = element.getBoundingClientRect();
  return {
    pageTop: domRect.top + scrollTop,
    pageLeft: domRect.left + scrollLeft,
    width: domRect.width,
    height: domRect.height
  };
}

function rectsAreDifferent(a, b) {
  return (
    a.pageTop !== b.pageTop ||
    a.pageLeft !== b.pageLeft ||
    a.width !== b.width ||
    a.height !== b.height
  );
}

function observeProgressBarRect(element, callback) {
  if (!observedElements.size) {
    setup();
  }
  observedElements.add(element);
  cachedRects.set(element, getRectForElement(element));
  elementCallbacks.set(element, callback);
  callback(cachedRects.get(element));
  return () => {
    observedElements.delete(element);
    cachedRects.delete(element);
    elementCallbacks.delete(element);
    if (!observedElements.size) {
      teardown();
    }
  };
}

export default observeProgressBarRect;
