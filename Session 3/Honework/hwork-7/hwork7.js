const arr = [3,4,6,-9,10, -88, 2];
let numberInput = prompt (`Enter a number`);
for ( i=0 ; i <= arr.length -1; i ++) {
    if ( numberInput == arr [i]) {
        alert (`${numberInput} is in my Array`);
    }
    else {
        alert (`${numberInput} is not in my Array`);
    }
    break;
}