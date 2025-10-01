// Write a function maskify, which changes all but the last four characters into '#'.
function maskify(cc) {
  let lastFour = "";
  if (cc.length > 4) {
    lastFour = cc.substring(cc.length -4, cc.length);
    return "#".repeat(cc.length-4) + lastFour;
  }
  return cc;
}
console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));