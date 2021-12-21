let map = { one: true, two: true, hasOwnPropery: true };

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
