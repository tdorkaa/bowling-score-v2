module.exports = (frames) => {
    const frameValuesInOneArray = frames.reduce((acc, curv) => [...acc, ...curv]);
    const calculatedArray = frameValuesInOneArray.reduce((acc, curv) => acc + curv);
    return calculatedArray;
}