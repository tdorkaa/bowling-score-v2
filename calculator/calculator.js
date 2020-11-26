module.exports = (frames) => {
    const frameValuesInOneArray = frames.reduce((acc, curV) => [...acc, ...curV]);

    const finalScore = frameValuesInOneArray.reduce((acc, curV, index, arr) => {
        if(isSpare(curV)) {
          return getScoreForSpare(acc, arr, index);
        }

        return acc + curV;
    });

    return finalScore;
}

function isSpare(value) {
    return value === '/';
}

function getScoreForSpare(acc, arr, index) {
    return acc + (10 - arr[index - 1]) + arr[index + 1];
}