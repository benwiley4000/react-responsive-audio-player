function parseTimeString(str) {
  let seconds = 0;
  let factor = 1;
  const times = str.split(':').slice(-3);
  while (times.length > 0) {
    seconds += factor * parseInt(times.pop(), 10);
    factor *= 60;
  }
  return seconds;
}

export default parseTimeString;
