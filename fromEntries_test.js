let students = {
  amelia: 20,
  beatrice: 22,
  cece: 20,
  deirdre: 19,
  eloise: 21
};

// Object.entires 는 객체를 배열로 변경해준다.
let entriesValue = Object.entries(students);

console.log("Object.entires: ", entriesValue);
// [
//  [ 'amelia', 20 ],
//  [ 'beatrice', 22 ],
//  [ 'cece', 20 ],
//  [ 'deirdre', 19 ],
//  [ 'eloise', 21 ]
// ]

// 배열로 변경한후, 필터링 처리를 수행한 결과를 아래와 같이 얻을 수 있다. (배열이기 때문에 filter를 이용할 수 있다.)
let overTwentyOne = Object.entries(students).filter(([name, age]) => {
  return age >= 21;
});
console.log("overTwentyOne: ", overTwentyOne);

// 배열을 순회하면서, 새로운 객체를 생성한다.
let DrinkingAgeStudents = {};
for (let [name, age] of overTwentyOne) {
  DrinkingAgeStudents[name] = age;
}

console.log("DriningAgeStudents: ", DrinkingAgeStudents);

// Object.fromEntries 는 루프를 제거한다.

let DrinkingAgeStudents2 = Object.fromEntries(overTwentyOne);

console.log("Object.fromEntries: ", DrinkingAgeStudents2);

// 배열을 반대로 객체로 전환할 수 있다.
let studentsArr = [
  ["amelia", 22],
  ["beatrice", 22],
  ["eloise", 21],
  ["beatrice", 20]
];

let studentObj = Object.fromEntries(studentsArr);

console.log("Object.fromEntries: ", studentObj);
