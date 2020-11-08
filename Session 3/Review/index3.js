// B
// let n = Number(prompt ("Nhap gia tri n :"));
// let B = 0;
// for(i= 1; i <= n ; i++) {
//     B = B + i**2;
// };
// console.log(B);
//  C
// let  n = Number (prompt ('Nhap gia tri n :'));
// let C = 1;
// for (i = 2 ; i <= n ; i ++) {
//     C = C + (1/ (i*(i+1)))
// }
// console.log (C);
// 1.
// let numberInput = Number ( prompt('Nhap so n:'));
// let n =1;
// if (numberInput < 0) {
//     console.log (`invalid input`);
//     }
// else {
//     for(i= 1; i <= numberInput ; i++){
//         n = n * i
//     }
//     console.log(`Giai thừa của ${numberInput} là ${n}`);
//     }
2.
// let age = prompt ('Nhap so tuoi cua ban:');
// if ( age < 18 ) {
//     alert ("Bạn chưa đủ tuổi vào trang web này");
// }
// else if ( age >= 18) {
//     let   x = prompt ("Bạn có muốn tiếp tục đăng nhập vào trang web không (yes,no) ?");
//     if ( x == "yes"){
//         alert ("Bạn đã đăng nhập vào trang web thành công");
//     }
//     else if ( x == "no"){
//         alert ("Bạn đã thoát khỏi trang web");
//     }
// }
3.
// let userName = "linhnm97";
// let passWord = "12345";
// let userName2 = prompt ("Nhap username");
// let passWord2 = prompt ("Nhap password");

// if (userName2 === userName && passWord2 === passWord ) {
//     alert ("Đăng nhập thành công")
// }
// else if (userName2 != userName) {
//     alert ("Nhập sai username")
// }
// else if (passWord2 != passWord) {
//     alert ("Nhập sai password")
// };
4.
// let yourName = prompt ("Nhập tên của bạn :");
// let month = Number(prompt ("Nhập tháng sinh của bạn"));
// if ( month == 1 || month == 2 || month == 3 ) {
//     alert(` ${yourName} sinh ra vào mùa Xuân`)
// }
// else if ( month == 4 || month == 5 || month == 6) {
//     alert ( `${yourName} sinh ra vào mùa Hè`)
// }
// else if ( month == 7 || month == 8|| month == 9 ) {
//     alert ( `${yourName} sinh ra vào mùa Thu`)
// }
// else if ( month == 10 || month == 11|| month == 12 ) {
//     alert ( `${yourName} sinh ra vào mùa Đông`)
// }
// else {
//     alert ("Giá trị không hợp lệ")
// }
// 5. 
// while (true) {
//     let a= Number(prompt("Nhap bien a"));
//     let b= Number(prompt("Nhap bien b"));
//     let c = Number(prompt ('Nhap bien c'));
//     let x1;
//     let x2
//     let Delta;

// if ( a == 0) {
//     x1 = -c/b;
//     alert (`x cần tìm bằng ${x1}`);
// }
// else if (a != 0 ) {
//     Delta = Math.pow (b, 2) - 4*a*c
//     if(Delta < 0){
//         alert ("Phương trình vô nghiệm");
//     }
//     else if (Delta == 0) {
//         x1 = -b/2*a;
//         alert (`x1 = x2 = ${x1}`);
//     }
//     else if (Delta > 0) {
//         x1 = (-b + Math. sqrt(Delta)) / 2*a;
//         x2 = (-b - Math. sqrt(Delta)) / 2*a;
//         alert (`x1 = ${x1} và x2 = ${x2}`);
//     }
//  let n = prompt ("bạn có tiếp tục hay không");
//   if (n == "no") {
//       break;
//   }
// }}
6. 
// let randomString = "Hello World";
// for (let i =0 ; i <= randomString.length -1; i++){
//     console.log (randomString);
// }
7. 
// while (true) {
//     let randomString = prompt ("Nhập chuỗi :");
//     let x= "";
//     let n = randomString.length
//     for (i = n -1; i >= 0; i--) {
//         x= x + randomString [i];
//     }
//     console.log(x);
//     let answer = prompt ("Bạn có muốn tiếp tục không ?");
//     if(answer = "no") {
//         break;
//     }
// }
    
