// boolean : true or false
// let single = true;
// let flag = false;
// //Branching
// // So sánh ==, !=
// // >, >=, <, <=
// console.log(1 == 1);
// console.log(1 === '1');

// && (and) , || (or)

// BT
// let x = Number(prompt("Nhap so tuoi cua ban:"));
// if (x < 18) {
//     alert('you cannot enter the bar');
// }
// else if (x >= 18 && x < 21) {
//     alert('You can enter but not drink');
// }
// else {
//     alert('you are free to drink');
// }

// BT : tính chỉ số BMI
// let weight = Number(prompt("Nhap can nang cua ban (kg):"));
// let height = Number(prompt('Nhap chieu cao cua ban:'));
// let BMI = weight / Math.pow(height / 100, 2);
// console.log(BMI);
// if (BMI <= 18.5) {
//     alert('Underweight');
// }
// else if (BMI > 18.5 && BMI <= 24.9) {
//     alert('Normal weight');
// }
// else if (BMI >= 25 && BMI <= 29.9) {
//     alert('Overweight');
// }
// else if (BMI >= 30) {
//     alert('Obesity');
// };
// alert('Chi so BMI cua ban la:' + `= ${BMI}`)

// for (let i = 1; i <= 5; i = i + 2) {
//     console.log(`${i}.Hello world`);
// }
// for (i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(`${i} là số chẵn `);
//     }
//     else {
//         console.log(`${i} là số lẻ `);
//     }
// }

let loop = true;
while (loop === true) {
    let userInput = prompt ('aaananana? ');
    if (userInput === "yes") {
        loop =false;
    }
}
