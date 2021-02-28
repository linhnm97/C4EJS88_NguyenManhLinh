let items = document.getElementsByTagName("td");
let groupItems = [];
for (i =0 ; i < items.length; i ++) {
    groupItems.push (items[i].innerHTML);
}
// console.log(groupItems);
2.
let listTest = document.getElementById("test");
// console.log(listTest);
3. 
for (i= 0; i< groupItems.length; i ++) {
    let li = document.createElement("li");
    li.innerText = groupItems[i] ;
    listTest.appendChild(li);
}

// 12.7
let input = document.getElementById("input")
let btn = document.getElementById("btn1");
btn.addEventListener("click", () => {
    console.log("Add button clicked");
//  12.8   
    console.log(input.value);
//12.9
    groupItems.push(input.value);
    console.log(groupItems);
// 12.10
// cho function thêm li, xóa toàn bộ thẻ li : li.innerHTML ="";
    let addLi = document.createElement("li");
        addLi.innerText = input.value;
        listTest.appendChild(addLi);
//12.11
    input.value ="";
    render();
})

function render () {
    listTest.innerHTML= "";
    for (let item of groupItems) {
        let li = `<li class= "list-item">${item}<button class= "remove_btn">Remove</button></li>`
        listTest.innerHTML += li;
    }
}
render();
console.log(groupItems);
listTest.onclick = function(event) {
    if(event.target.classList.contains("remove_btn")) {
        let content= event.target.parentElement.innerText;
        content = content.replace ("Remove", "");   
        console.log(content)
        groupItems.forEach(function(item, index) {
            if(item === content) {
                groupItems.splice(index, 1);
            }
        }); 
        console.log(groupItems)
        render(groupItems);
    } 
    if(event.target.classList.contains("list-item")) {
        if(event.target.style.textDecoration != "line-through") {
            event.target.style.textDecoration = "line-through";
        } else {
            event.target.style.textDecoration = ""
        }
}
//     console.log(content);
//     // tiến hành xóa khỏi mảng
//     let newItems= groupItems.filter(function(item,index){
//         return item !== content; 
//     })
//     // render mảng mới;



}
   
