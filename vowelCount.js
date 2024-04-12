const vowels = "aeiou";
function vowelCount(s) {
    const returnObject = {};
    s.toLowerCase().split("").forEach(v => vowels.includes(v) ? returnObject[v] = (returnObject[v] || 0) + 1 : undefined);
    return returnObject;
}
/* vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1} */