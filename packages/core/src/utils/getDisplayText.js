function getDisplayText(track) {
  if (!track) {
    return '';
  }
  if (track.title && track.artist) {
    return `${track.artist} - ${track.title}`;
  }
  return track.title || track.artist || track.album || '';
}

export default getDisplayText;
