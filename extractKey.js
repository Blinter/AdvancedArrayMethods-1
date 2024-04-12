function extractKey(a){
    //return a.map(({name})=>name);
    //return a.map(v=>v.name);
    return a.map(v=>Object.values(v)[0]);
}
/* 
extractKey(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
    'name'
  );
  
    // ['Elie', 'Tim', Matt', 'Colt'] */