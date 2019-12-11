let courses = [
  {
    subject: "math",
    numberOfStudents: 3,
    waitlistStudents: 2,
    students: ["Janet", "Martha", "Bob", ["Phil", "Candace"]]
  },
  {
    subject: "english",
    numberOfStudents: 2,
    students: ["Wilson", "Taylor"]
  },
  {
    subject: "history",
    numberOfStudents: 4,
    students: ["Edith", "Jacob", "Peter", "Betty"]
  }
];

let courseStudents = courses.map(course => course.students);
// [
//   [ 'Janet', 'Martha', 'Bob', [ 'Phil', 'Candace' ] ],
//   [ 'Wilson', 'Taylor' ],
//   [ 'Edith', 'Jacob', 'Peter', 'Betty' ]
// ]

console.log("Student arrays to map: ", courseStudents);
console.log(
  "[].concat.apply([], courseStudents): ",
  [].concat.apply([], courseStudents)
);

// 위와 동일한 결과가 나타난다.
let flattenOneLevel = courseStudents.flat(1);
console.log("FlattenOneLevel: ", flattenOneLevel);

let flattenTwoLevel = courseStudents.flat(2);
console.log("FlattenTwoLevel: ", flattenTwoLevel);

// 결과
// [
//   "Janet",
//   "Martha",
//   "Bob",
//   "Phil",
//   "Candace",
//   "Wilson",
//   "Taylor",
//   "Edith",
//   "Jacob",
//   "Peter",
//   "Betty"
// ];
