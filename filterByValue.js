function filterByValue(a) {
    //return a.filter(v => v.isCatOwner);
    return a.filter(v => v.hasOwnProperty("isCatOwner"));
}
/* 
    filterByValue(
        [
            { first: 'Elie', last: "Schoppik" },
            { first: 'Tim', last: "Garcia", isCatOwner: true },
            { first: 'Matt', last: "Lane" },
            { first: 'Colt', last: "Steele", isCatOwner: true }
        ],
        'isCatOwner'
    );
*/
/*
  [
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ]
*/
