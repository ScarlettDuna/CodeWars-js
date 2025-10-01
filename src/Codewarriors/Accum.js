/* accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" */

function accum(s) {
  let result = []
  for (let i = 0; i < s.length; i++) {
    let c = s[i].toUpperCase() + s[i].repeat(i).toLowerCase()
    result.push(c)
  }
  return result.join('-');
}

console.log(accum('abcd'));

/* function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}*/