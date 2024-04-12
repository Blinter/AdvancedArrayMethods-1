/*
extractFullName([
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}
])

  // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/
function extractFullName(a){
    //return a.map(v=>v.first+" "+v.last);
    //return a.map(({first, last})=>first + " " + last);
    //return a.map(v=>Object.values(v)[0]+" "+Object.values(v)[1]);
    return a.map(v=> Object.values(v)[0].concat(" ", Object.values(v)[1]));
}


/* extractFullName([
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia"},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele"}
  ]); */