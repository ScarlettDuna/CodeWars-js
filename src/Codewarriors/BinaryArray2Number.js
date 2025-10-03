/* Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.*/
const binaryArrayToNumber = arr => {
    let power = 1;
    let total = 0;
    for (let i = arr.length -2; i >= 0 ; i--) {
        total += Math.pow(arr[i] * 2, power);
        power++;
    }
    if (arr[arr.length - 1] === 0) {
        return total;
    }
    return total + 1;
};

console.log(binaryArrayToNumber([0, 1, 1, 0]));

/* const binaryArrayToNumber = arr => parseInt(arr.join(''), 2); */