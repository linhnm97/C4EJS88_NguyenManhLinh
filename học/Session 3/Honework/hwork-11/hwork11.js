let number = prompt (`Enter a sequence of number: `);
let numberArr = number.split(",");
let numberArr2 = [];
for (i= 0 ; i <= numberArr.length -1 ; i++) {
    if (numberArr[i] % 2 !== 0) {
        numberArr2.push(numberArr[i]);
    }
}
alert (`${numberArr} => ${numberArr2}`);