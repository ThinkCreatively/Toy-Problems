function halvesAreAlike(s: string): boolean {
  let lowercase = s.toLowerCase();
  let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let pnt1Count = 0;
  let pnt2Count = 0;
  let pnt1 = 0;
  let pnt2 = lowercase.length-1;

  while (pnt1 < pnt2){
      if (vowels.has(lowercase[pnt1])) {
          pnt1Count++;
      }

      if (vowels.has(lowercase[pnt2])) {
          pnt2Count++;
      }

      pnt1++;
      pnt2--;
  }

  return pnt1Count === pnt2Count;
};

function firstHalvesAreAlike(s: string): boolean {
  let splitted = s.toLowerCase().split("");
  let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let index = 0;
  let firstCount = 0;
  let secondCount = 0;

  for (let char of splitted) {
      if (vowels.has(char)) {
          if (index < splitted.length / 2) {
              firstCount++;
          } else {
              secondCount++;
          }
      }
      index++;
  }

  return firstCount === secondCount;
};