let squence = prompt (`Enter a sequence of number, separated by ","`);
let number = squence .split(",");
let min = Number(number [0]);
for ( i=0 ; i <= number.length -1; i ++) {
    if (min > Number(number [i])) {
        min = Number(number [i]);
    }
}
alert(`Số nhỏ nhất là ${min}` );