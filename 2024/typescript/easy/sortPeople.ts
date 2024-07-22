function sortPeople(names: string[], heights: number[]): string[] {
  let profiles = [];

  for (let i = 0; i < heights.length; i++) {
    profiles.push({ name: names[i], height: heights[i] });
  }

  profiles.sort((a, b) => b.height - a.height);

  let result = [];

  for (let i = 0; i < profiles.length; i++) {
    result.push(profiles[i].name);
  }

  return result;
}
