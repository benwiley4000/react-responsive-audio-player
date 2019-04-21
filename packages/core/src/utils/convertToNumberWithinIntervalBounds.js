function convertToNumberWithinIntervalBounds(number, min, max) {
  min = typeof min === 'number' ? min : -Infinity;
  max = typeof max === 'number' ? max : Infinity;
  return Math.max(min, Math.min(number, max));
}

export default convertToNumberWithinIntervalBounds;
