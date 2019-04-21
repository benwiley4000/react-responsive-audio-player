import getTrackSources from './getTrackSources';

// collapses playlist into flat list containing
// the first source url for each track
function getSourceList(playlist) {
  return (playlist || []).map((_, i) => getTrackSources(playlist, i)[0].src);
}

export default getSourceList;
