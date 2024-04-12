function showFirstAndLast(a){
    let r = [];
    a.forEach((v,i) =>r.push([...v[0], v[v.length-1]].join('')));
    //console.log(r);
    return r;
}

//showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
//showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']