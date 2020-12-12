1.
const btn1 = document.getElementById("button1");
const btn2= document.getElementById("button2");
btn1.addEventListener ("click", (e) => {
    console.log(e.target);
});
btn2.addEventListener ("click", (e) => {
    console.log(e.target);
})
2.
let input = document.getElementById("input");
input.addEventListener("keydown", (e) => {
    console.log(e.key);
})