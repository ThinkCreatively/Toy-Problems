interface people {
  name: string;
  height: number;
}

function sortPeople(names: string[], heights: number[]): string[] {
  let profiles: people[] = [];

  for (let i = 0; i < heights.length; i++) {
    profiles.push({ name: names[i], height: heights[i] });
  }

  profiles.sort((a, b) => b.height - a.height);

  let result: string[] = [];

  for (let i = 0; i < profiles.length; i++) {
    result.push(profiles[i].name);
  }

  return result;
}

// Alternate Solution:
// function sortPeople(names: string[], heights: number[]): string[] {
//   let result = [];
//   let lowest = Infinity;
//   let index = null;
//   let length = names.length;

//   while (result.length !== length) {
//       for (let i = 0; i < heights.length; i++) {
//           if (heights[i] < lowest) {
//               lowest = heights[i];
//               index = i;
//           }
//       }

//       result.push(names[index]);
//       heights.splice(index, 1);
//       names.splice(index, 1);
//       lowest = Infinity;
//       index = null;
//   }

//   return result.reverse();
// };
