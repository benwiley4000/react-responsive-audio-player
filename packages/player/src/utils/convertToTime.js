/* converts given number of seconds to standard time display format
 * http://goo.gl/kEvnKn
 */
function convertToTime(number) {
  const hours = Math.floor(number / (60 * 60));
  const mins = Math.floor(number / 60) - hours * 60;
  const secs = Math.floor(number % 60);
  let time = hours > 0 ? `${hours}:` : '';
  time += `${mins < 10 && hours > 0 ? '0' : ''}${mins}:`;
  time += `${secs < 10 ? '0' : ''}${secs}`;
  return time;
}

export default convertToTime;
