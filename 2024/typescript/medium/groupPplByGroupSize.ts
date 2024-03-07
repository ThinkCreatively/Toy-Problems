function groupThePeople(groupSizes: number[]): number[][] {
  let groups: number[][] = [];
  let tracking: [number, number][] = [];

  for (let i = 0; i < groupSizes.length; i++) {
    tracking.push([i, groupSizes[i]]);
  }

  let sorted: [number, number][] = tracking.sort((a, b) => a[1] - b[1]);
  let group: number[] = [];
  let size = sorted[0][1];

  for (let i = 0; i < sorted.length; i++) {
    if (group.length !== size) {
      group.push(sorted[i][0]);
    } else {
      groups.push(group);
      group = [];
      size = sorted[i][1];
      group.push(sorted[i][0]);
    }
  }

  groups.push(group);

  return groups;
}
