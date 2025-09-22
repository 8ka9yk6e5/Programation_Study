console.time("test");
console.group();
console.log("this is inside a group");
console.groupEnd();
console.group("another");
console.log("another group");
console.groupEnd();
console.timeEnd("test");