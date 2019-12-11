let obj = '"name":"kido", "age":25';

try {
  let passed = JSON.parse(obj);
  console.log(passed);
} catch (e) {
  console.log(obj);
}

try {
  let passed = JSON.parse(obj);
  console.log(passed);
} catch {
  console.log(obj);
}
