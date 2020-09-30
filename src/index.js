
exports.min = function min (arr) {
  const resultOfCheckArr = checkArgs(arr);

  if (resultOfCheckArr === 0 ) {
    return 0;
  }

  const min = Math.min(...arr);

  return min;
}

exports.max = function max (arr) {
  const resultOfCheckArr = checkArgs(arr);

  if (resultOfCheckArr === 0) {
    return 0;
  }

  const max = Math.max(...arr);

  return max;
}

exports.avg = function avg (arr) {
  const resultOfCheckArr = checkArgs(arr);

  if (resultOfCheckArr === 0) {
    return 0;
  }

  const avg = arr.reduce((acc, current) => acc + current, 0) / arr.length;

  return avg;
}

const checkArgs = arr => !arr || arr.length === 0 ? 0 : 1;
