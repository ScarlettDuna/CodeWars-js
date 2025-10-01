/* Your goal is to write a function that removes the first and last characters of a string.
You're given one parameter, the original string. */
function removeChar(str){
  return str.slice(1,str.length -1);

};

console.log(removeChar("Anchan"));
console.log(removeChar('eloquent'));
console.log(removeChar('ab'));


