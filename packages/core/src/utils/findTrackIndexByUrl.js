import arrayFindIndex from 'array-find-index';

function findTrackIndexByUrl(playlist, url) {
  return arrayFindIndex(playlist, track => {
    if (track.sources) {
      return arrayFindIndex(track.sources, source => source.src === url) !== -1;
    }
    return track.url && url === track.url;
  });
}

export default findTrackIndexByUrl;
