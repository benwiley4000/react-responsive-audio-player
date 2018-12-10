const loopchange = 'loopchange';
const srcrequest = 'srcrequest';

function createCustomMediaElement() {
  const media = document.createElement('video');
  new MutationObserver(() => {
    media.dispatchEvent(new Event(loopchange));
  }).observe(media, {
    attributeFilter: ['loop']
  });
  // Don't let the media src property get modified directly.
  // Instead, when it does get set, dispatch an event to be
  // handled in a way that doesn't conflict with the loaded
  // playlist.
  Object.defineProperty(media, 'src', {
    get: () => media.currentSrc,
    set: src => {
      const e = new Event(srcrequest);
      e.srcRequested = src;
      media.dispatchEvent(e);
    }
  });
  return media;
}

export default createCustomMediaElement;
