function minMovesToSeat(seats: number[], students: number[]): number {
  let seatsSorted = seats.sort((a, b) => a - b);
  let studsSorted = students.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < seatsSorted.length; i++) {
    count += Math.abs(seatsSorted[i] - studsSorted[i]);
  }

  return count;
}
