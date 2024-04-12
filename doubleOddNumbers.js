function doubleOddNumbers(a) {
    return a.filter(v => v % 2 != 0).map(v => v * 2);
}
/* doubleOddNumbers([1, 2, 3, 4, 5]); // [2,6,10]
doubleOddNumbers([4, 4, 4, 4, 4]); // [] */