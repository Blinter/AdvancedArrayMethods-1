function removeVowels(s) {
    return [...s.toLowerCase()].filter(v => !'aeiou'.includes(v)).join('');
    //return Array.from(s.toLowerCase()).filter(v => !'aeiou'.includes(v)).join('');
}
/* removeVowels('Elie'); // ('l')
removeVowels('TIM'); // ('tm')
removeVowels('ZZZZZZ'); // ('zzzzzz')
  // {first: 'Tim', last:"Garcia", isCatOwner: true} */