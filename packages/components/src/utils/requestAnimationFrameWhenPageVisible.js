let hiddenKey;
let visibilitychangeKey;
if (typeof document !== 'undefined') {
  if (typeof document.hidden !== 'undefined') {
    hiddenKey = 'hidden';
    visibilitychangeKey = 'visibilitychange';
  } else if (typeof document.msHidden !== 'undefined') {
    hiddenKey = 'msHidden';
    visibilitychangeKey = 'msvisibilitychange';
  } else if (typeof document.webkitHidden !== 'undefined') {
    hiddenKey = 'webkitHidden';
    visibilitychangeKey = 'webkitvisibilitychange';
  }
}

function requestAnimationFrameWhenPageVisible(rafCallback) {
  // if we have access to the Page Visibility API we should
  // check if the page is hidden and if so defer our requestAnimationFrame
  if (hiddenKey && document[hiddenKey]) {
    let cancelled = false;
    let id;
    document.addEventListener(
      visibilitychangeKey,
      () => {
        if (!cancelled) {
          id = requestAnimationFrame(rafCallback);
        }
      },
      { once: true }
    );
    return () => {
      cancelled = true;
      cancelAnimationFrame(id);
    };
  } else {
    const id = requestAnimationFrame(rafCallback);
    return () => cancelAnimationFrame(id);
  }
}

export default requestAnimationFrameWhenPageVisible;
