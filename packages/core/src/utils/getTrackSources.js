import isPlaylistValid from './isPlaylistValid';

const blankSources = [{ src: '' }];

function getTrackSources(playlist, index) {
  if (!isPlaylistValid(playlist)) {
    return blankSources;
  }
  const { sources, url } = playlist[index];
  if (sources) {
    return sources.length ? sources : blankSources;
  }
  return [{ src: url }];
}

export default getTrackSources;
