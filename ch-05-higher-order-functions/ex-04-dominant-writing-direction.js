function dominantDirection(text) {
  let count = countBy(text, (character) => {
    let script = characterScript(character.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ name }) => name != "none");

  if (count.length == 0) return "ltr";

  return count.reduce((a, b) => (a.count > b.count ? a : b)).name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
