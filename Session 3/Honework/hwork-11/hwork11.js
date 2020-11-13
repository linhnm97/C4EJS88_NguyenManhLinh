let number = prompt (`Enter a sequence of number: `);
let numberArr = number.split(",");
for (i= 0 ; i <= numberArr.length -1 ; i++) {
    if (numberArr[i] % 2 !== 0) {
        alert (`${numberArr} => ${numberArr[i]}`);
    }
    
}
