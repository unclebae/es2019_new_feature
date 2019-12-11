# es2019 에서 향상된 기능 소개.

벌써 es2019 까지 나와 있네요. 자바스크립트의 인기와 그 발전 속도가 무섭네요.

## es2019 에서 향상된 기능

- Array.prototype.flat, Array.prototype.flatMap
- Object.entries, Object.fromEntries
- try catch 에서 선택적 바인딩
- Function.prototype.toString
- String.prototype.trimStart, String.prototype.trimEnd

### Array.prototype.flat / Array.prototype.flatMap

배열을 flat 을 통해서 배열의 깊이를 1차원으로 플래팅 할 수 있습니다.

샘플 예제는 다음과 같습니다.

```
['Apple', ['Banana', ['Melon']]].flat()

// --> ['Apple', 'Banana', ['Melon']]

['Apple', ['Banana', ['Melon']]].flat(2)

// --> ['Apple', 'Banana', 'Melon']

['Apple', ['Banana', ['Melon']]].flat(Infinity)

// --> ['Apple', 'Banana', 'Melon']
```

flatMap 은 다음과 같이 사용할 수 있습니다.

```
['Hello kido', 'My name is javascript'].flatMap(greet => greet.split(' '));

// --> ['Hello', 'kido', 'My', 'name', 'is', 'javascript']
```

### Object.entires, Object.fromEntries

Object.entries 는 객체를 배열로 변경할 수 있습니다.

```
let student = { name: 'KIDO', age: 25 }
let entries = Object.entries(student);

console.log(entries)

[['name', 'KIDO'], ['age', 25]]
```

반대로 Object.fromEntries 는 배열을 객체로 변경할 수 있습니다.

```
let studentEntry = [['name', 'KIDO'], ['age', 25]];
let fromEntries = Object.fromEntries(studentEntry);

console.log(fromEntries);

{ name: 'KIDO', age: 25}
```

### try catch 를 옵션널 하게 사용하기.

기본적으로 try catch 는 다음과 같이 사용했습니다.

```
let obj = '"name":"kido", "age":25';

try {
  let passed = JSON.parse(obj);
  console.log(passed);
} catch (e) {
  console.log(obj);
}
```

es2019 에서는 error 객체를 파라미터로 전달하지 않아도 됩니다.

```
try {
  let passed = JSON.parse(obj);
  console.log(passed);
} catch {
  console.log(obj);
}

```

### trimStart, trimEnd

es2019 는 위 메소드를 이용할 수 있습니다 .

```
'    hello trim'.trimStart()
// --> 'hello trim'

'hello trim    '.toEnd()
// --> 'hello trim'

'    hello trim    '.trimStart().trimEnd()
// --> 'hello trim'
```

### Function.toString 이용하기.

함수를 문자로 반환하도록 할 수 있습니다.

```
function greeting() {
  const name = "Hello greeting";
  console.log(`hello from ${name}`);
}

console.log("Function.toString(): ", greeting.toString());

```

결과

```
Function.toString():  function greeting() {
  const name = "Hello greeting";
  console.log(`hello from ${name}`);
}
```

es2019 는 보시는 바와 같이 매우 편리한 메소드를 제공하고 있습니다.

점점 javascript 도 발전하고 있네요 ^^

참고: https://css-tricks.com/all-the-new-es2019-tips-and-tricks/
