// 8.1
let sheepSize= [7,8,200,3,4,5,6];
console.log (`Hello, my name is Linh and here is my Sheep size : `)
console.log (...sheepSize);

8.2
let max = sheepSize [0];
for (i=0; i <= sheepSize.length -1; i++) {
    if (max < sheepSize[i]){
        max = sheepSize[i]; 
    }
}
console.log(`Now my biggest sheep has the size ${max}, let's shave it`);

// 8.3
let x = sheepSize. indexOf (max);
sheepSize [x] = 8 ;
console.log (`After shearing, here is my flock`);
console.log(...sheepSize);

8.4 
for ( k= 1; k <=4 ; k ++) {
    for (i = 0; i <= sheepSize.length -1; i ++) { 
        let x2 = sheepSize[i] + 50;
        sheepSize[i] = x2;
    } 
    console.log(`MONTH ${k}`);
    console.log(`One month has, passed, my sheeps have grown, here are their sizes`);
    console.log (...sheepSize);
    max = sheepSize [0];
    for (i=0; i <= sheepSize.length -1; i++) {
    if (max < sheepSize[i]){
        max = sheepSize[i]; 
    }
    }
    console.log(`Now my biggest sheep has the size ${max}, let's shave it`);
    x = sheepSize. indexOf (max);
    sheepSize [x] = 8 ;
    console.log (`After shearing, here is my flock`);
    console.log(...sheepSize);
}
    
//8.6 
let C = 0;
for ( l =0 ; l <=sheepSize.length -1 ; l++) {
    C = C + sheepSize [l];
}
console.log(`My flock has size in total: ${C}
I would get: ${C} x 2$ = ${C * 2} `);