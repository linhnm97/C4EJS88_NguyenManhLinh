// console.log('hello');

// function sayHello (name) {
//     name = "Nam";
//     console.log(`Hello ${name}`)
// }
// sayHello ();

// Tạo function tính diện tích tam giác , function này nhận đầu là H chiều cao D là cạnh đáy

// function triangle (H,D) {
//    H = prompt ('Nhập chiều cao');
//     D = prompt('Nhập đáy');
//     var S = 1/2*H*D;
//     console.log(S);
// }
// triangle();

// function count (a,b,count) {
//         count = [];
//     for (i=a ; i <= b ; i ++){
//         count.push([i]);
//     }
//     console.log (`${count}`);
    
// }
// count(2,7);

// function totalArr (arrNumber, C) {
//     C =0 ;
//     for (i =0; i <= arrNumber.length -1; i ++) {
//        C =  arrNumber [i] + C;
//     }
//     console.log(C);
// }
// totalArr([1,2,3,4,5,6,7]);

function reversétring (str) {
    let newStr = str.split("").reverse().join("");
    // console.log(newStr);
    return str;
    // mọi câu lệnh sau return sẽ không được thực thi
}
let result = reversétring("Nam nggggg");

const people = {
    name: "Peter",
    year: 18,
    gender : "Male",
    sing: function () {
        console.log("lalalalalal");
    },
    sayHello: function (name2) {
        console.log("Hello" + `${name2}`);
    },
    introduce: function () {
        console.log(`My name is ${this.name}`);
        console.log(this);
    },
}
people.sing();
people.function("Hương");
people.introduce();
