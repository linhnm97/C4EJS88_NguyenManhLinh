let sequence = prompt ("Enter a sequence of number, seperates a commas (,)");
let arr = sequence.split(",");
let C = 0;
for ( i = 0; i <= arr.length -1 ; i++) {
    C = C + Number(arr [i]);
}
alert (`The sum of sequence is ${C}`);
