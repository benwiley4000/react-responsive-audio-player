function getTimeRangesArray(timeRangesObj) {
  const timeRangesArray = Array(timeRangesObj.length);
  for (let i = 0; i < timeRangesObj.length; i++) {
    timeRangesArray[i] = {
      start: timeRangesObj.start(i),
      end: timeRangesObj.end(i)
    };
  }
  return timeRangesArray;
}

export default getTimeRangesArray;
