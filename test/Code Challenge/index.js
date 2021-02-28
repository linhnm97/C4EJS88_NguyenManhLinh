let inputNumber = document.getElementById("input");
let submit = document.getElementById("submit");
let list = document.getElementById("list");
let check = document.getElementById("check");
let lotteryNumber = [];
let winner = document.getElementById("win");
let erase = document.getElementById("erase");
submit.onclick = () => {
  checkinput ();
  if(lotteryNumber.length > 2) {
    submit.style.display = "none";
  }
}
function checkinput ()  {
  if(inputNumber.value > 10 || inputNumber.value < 1 ) {
    alert ("Nhập sai, đề nghị nhập lại");
    inputNumber.value= "";
  }
  else if(inputNumber.value == NaN) {
    alert ("Nhập sai, đề nghị nhập lại");
    inputNumber.value= "";
  }
  else {
      lotteryNumber.push(inputNumber.value);
      list.innerHTML += `<li> ${inputNumber.value} </li>`;
      inputNumber.value= "";
      console.log(lotteryNumber);
  }
}
check.onclick = () => {
  let a = Math.floor(Math.random() * 10) + 1;
  for ( i = 0; i < lotteryNumber.length -1; i++) {
    if(lotteryNumber[i] == a) {
      alert("Chúc mừng bạn đã được giải");
      }
    };
    if (lotteryNumber [0] != a && lotteryNumber [1] != a && lotteryNumber [2] != a){
      alert (`Xin lỗi bạn chưa trúng giải, Giải nhất là ${a}`);
      winner.innerHTML = `Kết quả là : ${a}`;
    }
  }
erase.onclick = () => {
  list.innerHTML="";
}