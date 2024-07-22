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
