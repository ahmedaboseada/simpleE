// const users = [
//   { id: 101, name: ' Ada ', scores: [10, 20, 30] },

//   { id: 102, name: '', scores: [5, 0, 15] },

//   { id: 103, name: null, scores: [7, 14] },

//   { id: 104, /* name missing on purpose */ scores: [3, 3, 3, 3] },

//   { id: 105, name: 'Grace', scores: [] },
// ];

// function normalizeName(value) {
//   if (value === null || typeof value === 'undefined' || value.trim() === '') {
//     return 'Unknown';
//   }
//   return value.trim();
// }
// // hi

// function averageScore(scores) {
//   try {
//     if (!Array.isArray(scores)) {
//       throw new Error('scores must be an array');
//     } else if (scores.length == 0) {
//       return null;
//     } else {
//       return (
//         Math.round(
//           ((scores) => {
//             var sum = 0;
//             for (let number of scores) {
//               sum += number;
//             }
//             return (sum / scores.length) * 100;
//           })(scores)
//         ) / 100
//       );
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// function buildUserSummary(user) {
//   if (typeof user !== 'Object' || user === null)
//     throw new Error('user must be an object');
//   user.name = normalizeName(name);
//   user.scoreCount =
    // !Array.isArray(user.scores) || user.scores === null ? 0 : scores.length;
//   user.avg =
//     user.scores === null || !Array.isArray(scores)
//       ? 0
//       : averageScore(user.scores);
// }
// console.log('hello');
// console.log('world');
// console.log('!');
// console.log();

function studentCreator(name,age,email) {
  var student={}
  student.name=name
  student.age=age
  student.email=email
  return student
}

var student1 = studentCreator("s", 22, "ahmedabuseada22@gmail.com")

console.log(student1);


var student2 = studentCreator("Ahmed", 22, "bershamaful9@gmail.com")
var student3 = studentCreator(name, age, email)
console.log();

var student3 = studentCreator(name, age, email)
console.log();
