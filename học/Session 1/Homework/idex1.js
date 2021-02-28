// 1.Search and Answer the following questions:
// How to check a variable’s type?
// In what cases, you will get SyntaxError from the compiler telling you that some of your variables have invalid names? Can you give 3 different examples of invalid names?
// 1. The typeof to check a variable’s type
// - Bắt đầu bằng số.
//- Chứa những ký tự đặc biệt (khoảng trắng cũng tính là ký tự đặc biệt), ngoại trừ "_" và "$".
//- Trùng với các từ khóa (keywords) của javascript.
// VD: 1e, @, var

// 2.Write a program that calculates the area of a circle. The circle radius is entered by users
// let radius = Number(prompt("Nhap ban kinh hinh tron :"));
// let area = Math.pow(radius, 2) * Math.PI;
// console.log(`Area : ${area}`);

//3.Write a program that converts Celsius (0C) into Fahrenheit (0F)
let Celsius = Number(prompt("Enter the temperature of Celcius :"));
let Fahrenheit = Celsius * 9 / 5 + 32;
console.log(`${Celsius} (C) : ${Fahrenheit} (F)`);
