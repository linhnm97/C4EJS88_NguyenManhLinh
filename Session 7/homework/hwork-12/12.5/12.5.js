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
    let addLi = document.createElement("li");
        addLi.innerText = input.value;
        listTest.appendChild(addLi);
//12.11
    input.value ="";
})
let buttonRemove = document.createElement("button");
    buttonRemove.innerText = "Remove";
    

