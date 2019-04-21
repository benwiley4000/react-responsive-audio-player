function getProgressStyle(progress, progressDirection) {
  const progressAheadPercentage = `${(1 - (progress || 0)) * 100}%`;
  const style = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  };
  switch (progressDirection) {
    case 'left':
      style.left = progressAheadPercentage;
      style.willChange = 'left';
      break;
    case 'right':
      style.right = progressAheadPercentage;
      style.willChange = 'right';
      break;
    case 'up':
      style.top = progressAheadPercentage;
      style.willChange = 'top';
      break;
    case 'down':
      style.bottom = progressAheadPercentage;
      style.willChange = 'bottom';
      break;
    default:
      break;
  }
  return style;
}

export default getProgressStyle;
