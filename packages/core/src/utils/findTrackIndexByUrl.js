import arrayFindIndex from 'array-find-index';

function findTrackIndexByUrl(playlist, url, areTrackSourceUrlsEqual) {
  return arrayFindIndex(playlist, track => {
    if (track.sources) {
      return (
        arrayFindIndex(track.sources, source =>
          areTrackSourceUrlsEqual(source.src, url)
        ) !== -1
      );
    }
    return track.url && areTrackSourceUrlsEqual(url, track.url);
  });
}

export default findTrackIndexByUrl;
