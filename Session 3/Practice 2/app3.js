// let menu = ["Pho", "Cơm rang", "Burger"];
// for (i = 0; i <= menu.length - 1; i++) {
//   console.log(menu[i]);
// }
// while (true) {
//   let todoList = ["Đi chợ", "Nấu cơm", "Giặt quần áo"];
//   let answer = prompt("Nhập thao tác bạn muốn làm :").toUpperCase();
//   if (answer == "C" || answer == "R" || answer == "U" || answer == "D") {
//     if (answer == "C") {
//       let add = prompt("Nhập phần tử bạn muốn thêm vào :");
//       todoList.push(add);
//       for (i = 0; i <= todoList.length - 1; i++) {
//         console.log(todoList[i]);
//       }
//     } else if (answer == "R") {
//       for (i = 0; i <= todoList.length - 1; i++) {
//         console.log(todoList[i]);
//         document.write (`${todoList[i]} 
//         `);
//       }
//     } else if (answer == "U") {
//       while (true) {
//         let m = prompt("Nhập vị trí bạn muốn update");
//         if (m <= todoList.legth - 1 && m >= 0) {
//           let update = prompt("Nội dung update");
//           todoList[m] = update;
//           for (i = 0; i <= todoList.length - 1; i++) {
//             console.log(todoList[i]);
//           }
//           break;
//         } else {
//           alert("Nhập lại giá trị");
//         }
//       }
//     } else {
//       let k = prompt("Nhập vị trí bạn muốn xóa");
//       answer.splice(k, 1);
//       for (i = 0; i <= todoList.length - 1; i++) {
//         console.log(todoList[i]);
//       }
//     }
//     break;
//   } else {
//     alert("Sai cú pháp, đề nghị nhập lại");
//   }
// }
// let C =0;
const arr = [1,2,3,4,5];
// for (i= 0; i <= arr.length -1; i ++) {
//     C= C + arr[i]
// }  
// console.log (C);

// for (i=0; i<=arr.length -1; i++ ){
//     if(arr[i] % 2 == 0) {
//         C = C + arr [i];
//     }
// }
// console.log (C);
// let C
// const arr2 = [];
// for(i = 0; i <= arr.length -1 ; i++){
//     arr2.push (arr[i]+2);
// }
// console.log (arr2);
// let arr2 =[];
// for ( i = arr.length -1; i >= 0; i-- ) {
//     arr2.push (arr[i]);
// }
// console.log(arr2)
let max = arr[0];
for ( i = 0; i <= arr.length -1; i ++) {
    if (max < arr[i]) {
        max = arr [i];
    }
}
console.log (max);