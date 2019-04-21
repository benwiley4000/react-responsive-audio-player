function getDisplayText(track) {
  if (!track) {
    return '';
  }
  if (track.displayText) {
    // TODO: Remove this check when support for the displayText prop is gone.
    return track.displayText;
  }
  if (track.title && track.artist) {
    return `${track.artist} - ${track.title}`;
  }
  return track.title || track.artist || track.album || '';
}

export default getDisplayText;
