/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
// var countStudents = function (students, sandwiches) {
//   let queueCount = students.length;

//   while (queueCount > 0) {
//     if (students[0] === sandwiches[0]) {
//       students.shift();
//       sandwiches.shift();
//       queueCount = students.length;
//     } else {
//       students.push(students.shift());
//       queueCount--;
//     }
//   }

//   return students.length;
// };

var countStudents = function (students, sandwiches) {
  let counts = [0, 0];
  for (let s of students) counts[s]++;

  for (let sandwich of sandwiches) {
    if (counts[sandwich] > 0) {
      counts[sandwich]--;
    } else {
      break;
    }
  }

  return counts[0] + counts[1];
};

console.log(countStudentsOptimized([1, 1, 0, 0], [0, 1, 0, 1])); // Output: 0
console.log(countStudentsOptimized([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // Output: 3
