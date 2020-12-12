// const app = document.getElementById("text");
// console.dir(app);
// children;
// classlist;
// innerHTML;
// innerText;
// Id;
// firstChild;
// lastChild;
// parentElement;
// style;
// Query HTML Element 
// const app2 = document.getElementsByClassName("demo");
// console.log(app2);

// const app3= document.getElementsByTagName("div");
// console.log(app3)

// let firstdiv = app3[0];
// console.log(firstdiv);

// Property:

// console.log(app.innerHTML);
// console.log(app.innerText);
// console.log(app.textContent);

// app.innerHTML = `<b style = "font-size: 31px">Hello world</b>`;
// app.innerText = "linh"

// Style:
// app.style.color= "red";

//.id vs classlist
// console.log(app.id);
// console.log(app.classList);
// app.classList.add("cl3");
// console.log(app.classlist);
// app.classList.remove ("cl3");
// console.log(app.classList)

// children vs parentElement
// const child = app.children[0];
// console.log(child.parentElement);
// const ul = document.getElementById("todoList");
// console.log(ul);

// GÁN THÊM NỘI DUNG CHO TO DO LIST
// //Tạo thêm 1 thẻ li
// const li = document.createElement("li");
// console.log(li);
// //gàn nội dung cho một thẻ html
// li.innerText = "Đi ăn cơm";
// ul.appendChild(li);
// li.remove();

// const btn = document.getElementById("btn");
// console.log(btn);
// btn.onclick= function() {
//     alert("Hello world");
// }


//Click -event 


// function doSomething () {
//     alert("Hello world");
// }
// ----------------------
// 1. xóa thẻ div
// const btn1 = document.getElementById("btn1");
// const name = document.getElementById("name");
// tonTai = true
// btn1.onclick = function remove() {
//     if (tonTai) {
//         name.style.display = "none"
//     }
//     else {
//         name.style.display = "block";
//     }
//     tonTai = !tonTai;
// }
// btn1.onclick = function remove() {
//     if (name.style.display == "block") {
//         name.style.display = "none"
//     }
//     else {
//         name.style.display = "block";
//     }
// }


// 2. đổi màu
// const colors = [ `#00aefd`, `#ffa400`, `#07a787`]
// btn1.onclick = function changeColor () {
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     name.style.backgroundColor = randomColor;
// }

// btn1.onclick = function () {
//     let randomColor = generateRandomColor(); 
//     name.style.backgroundColor = randomColor;
// }

// function generateRandomColor() {
//     let r = Math.ceil (Math.random() * 255);
//     let g = Math.ceil (Math.random() * 255);
//     let b = Math.ceil (Math.random() * 255);
//     let color = `rgb(${r}, ${g}, ${b})`;
//     return color;
// } 

const btn2 = document.getElementById('btn2');
console.log(btn2);
const input = document.getElementById("input");
console.log(input.value);
let ul = document.getElementById("todoList")

btn2.onclick = function () {
    let li = document.createElement("li");
    li.innerText =input.value;
    ul.appendChild(li);
    input.value= "";
}
