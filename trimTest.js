let message = "    Welcome to CS 101...    ";
let trimRight = message.trimRight();

console.log("message.trimRight: [", trimRight, "]");

let trimLeft = message.trimLeft();

console.log("message.trimLeft(): [", trimLeft, "]");

let trimAll = message.trimLeft().trimRight();

console.log("message.trimLeft().trimRight(): [", trimAll, "]");

let trimEnd = message.trimEnd();

console.log("message.trimEnd(): [", trimEnd, "]");

let tirmStart = message.trimStart();

console.log("message.trimStart(): [", tirmStart, "]");

let trimAll2 = message.trimStart().trimEnd();

console.log("message.trimStart().trimEnd(): [", trimAll2, "]");
