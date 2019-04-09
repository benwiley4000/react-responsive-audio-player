import parseTimeString from './parseTimeString';

function getInitialDuration(track) {
  let duration = 0;
  if (track.duration) {
    if (typeof track.duration === 'string') {
      duration = parseTimeString(track.duration);
    } else {
      duration = track.duration;
    }
  }
  return duration;
}

export default getInitialDuration;
