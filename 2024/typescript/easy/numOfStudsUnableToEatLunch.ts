function countStudents(students: number[], sandwiches: number[]): number {
  while (students.length && sandwiches.length) {
    if (!students.includes(sandwiches[0])) break;
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
    } else {
      let first = students.shift() as number;
      students.push(first);
    }
  }

  return students.length;
}
