function getVolumeBarDirectionFromPosition(volumeBarPosition) {
  switch (volumeBarPosition) {
    case 'rightabove':
    case 'rightbelow':
      return 'right';
    case 'hiddenup':
    case 'upabove':
    default:
      return 'up';
  }
}

export default getVolumeBarDirectionFromPosition;
