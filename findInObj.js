function findInObj(a, key, value) {
  return a.find((v, k) => v.hasOwnProperty(key) && v[key] === value ? true : undefined);
}
/*
  findInObj(
    [
      {first: 'Elie', last:"Schoppik"},
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'att', last:"Lane"},
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ],
    'isCatOwner',
    true
  );
  */
// {first: 'Tim', last:"Garcia", isCatOwner: true}