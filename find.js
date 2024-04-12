function find(a, value) {
    return a.find(v => v===value?v:undefined);
}
//console.log(find([1,2,3,4,5], 3)) // 3
//console.log(find([1,2,3,4,5], 10)) // undefined