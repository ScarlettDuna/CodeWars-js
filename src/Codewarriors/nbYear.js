/* In a small town the population is p0 = 1000 at the beginning of a year.
The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?
p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)*/
function nbYear(p0, percent, aug, p) {
  let counter = 0;
  while (p0 <= p){
    // incremento
    let augPercent = parseInt(p0 * (percent / 100))
    p0 += (aug + augPercent)
    counter++;
  }
  return counter;
}
console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));