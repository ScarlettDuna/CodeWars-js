// To be a senior, a member must be at least 55 years old and have a handicap greater than 7.

function openOrSenior(data){
  let solution = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      solution.push("Senior");
    } else {
      solution.push("Open");
    }
  }
  return solution;
}




let input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

console.log(openOrSenior(input));
