module.exports = (frames) => {
    const frameValuesInOneArray = frames.reduce((acc, curV) => [...acc, ...curV]);

    return getFinalScore(frameValuesInOneArray);
}

function getFinalScore(framesInOneArray) {
    return framesInOneArray.reduce((acc, curV, index, arr) => {
        if(isSpare(curV)) {
            return getScoreForSpare(acc, arr, index);
        }

        if (isStrike(curV)) {
            return getScoreForStrike(acc, arr, index);
        }

        return acc + curV;
    }, 0);
}

function isSpare(value) {
    return value === '/';
}

function getScoreForSpare(acc, arr, index) {
    return acc + (10 - arr[index - 1]) + arr[index + 1];
}

function isStrike(value) {
    return value === 'X';
}

function getScoreForStrike(acc, arr, index) {
    return acc + 10 + arr[index + 1] + arr[index + 2];
}