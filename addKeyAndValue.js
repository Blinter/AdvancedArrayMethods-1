function addKeyAndValue(array, key, value) {
  const returnObject = {};
  array.forEach((v, i) => returnObject[i] = { ...v, [key]: value });
  return Object.values(returnObject);
}
/*
console.log(addKeyAndValue(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
      'title',
      'instructor'
    ));
    */
/*
  [
    {name: 'Elie', title:'instructor'},
    {name: 'Tim', title:'instructor'},
    {name: 'Matt', title:'instructor'},
    {name: 'Colt', title:'instructor'}
  ]
*/