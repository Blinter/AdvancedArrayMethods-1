function onlyEvenValues(a) {
    const returnArray = [];
    a.forEach(v => v % 2 === 0 ? returnArray.push(v) : undefined);
    return returnArray;
}
//onlyEvenValues([1, 2, 3]); // [2]
//onlyEvenValues([5, 1, 2, 3, 10]); // [2,10]