let grades = [78, 62, 80, 64];

let curved = grades.map(grade => [grade, grade + 7]);

console.log("grades.map : ", curved);

let flatMapped = [].concat.apply([], curved);
console.log("[].concat.apply([], curved) : ", flatMapped);

let flatMappedV2 = grades.map(grade => [grade, grade + 7]).flat();

console.log("grades.map(grade => [grade, grade + 7]).flat(): ", flatMappedV2);

let flatMappedV3 = grades.flatMap(grade => [grade, grade + 7]);

console.log("grades.flatMap(grade => [grade, grade + 7]): ", flatMappedV3);
