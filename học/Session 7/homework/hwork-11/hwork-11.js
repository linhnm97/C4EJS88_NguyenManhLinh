// 11.2
// let upper = document.getElementById("upper");
// upper.onclick =  (e) => {
//     console.log(e.target);
// };
// 11.3
// let upper = document.getElementById("upper");
// upper.onclick = () => {
//     console.log("Upper it!!! just clicked");
// }
// 11.4
// let input = document.getElementById("input");
// input.onclick = (e) => {
//         console.log(e.target);
//     };
// 11.5
let input = document.getElementById("input");
let upper = document.getElementById("upper");
upper.addEventListener ("click", () => {
    console.log("Upper it!!! just clicked");
    console.log(`User's name: ${input.value}`);
    // 11.6
    console.log(`User's name uppercase : ${input.value.toUpperCase()}`)
    text.innerText = input.value.toUpperCase();
})
// 11.7
let text = document.getElementById("result");
console.log(text);
// 11.8

console.log(text);