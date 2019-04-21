// minimal replacement for https://github.com/JedWatson/classnames
// inspired by https://github.com/FormidableLabs/react-live/blob/5ca26733f5a866d4af2b4782024113cbbe76f54a/src/utils/cn.js
function classNames(...args) {
  return args
    .map(reduceHash)
    .filter(Boolean)
    .join(' ');
}

function reduceHash(obj) {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }
  return Object.keys(obj)
    .filter(key => obj[key])
    .join(' ');
}

export default classNames;
