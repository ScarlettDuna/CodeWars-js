// [0, 0, 1] - [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

function tribonacci(signature,n){
  if (n > 2) {
    let i = 0;
    while (signature.length < n){
      signature.push(signature[i] + signature[i+1] + signature[i+2]);
      i++;
    }
    return signature;
  } else {
    return signature.slice(0, n);
  }

}
console.log(tribonacci([0,1,1], 0));