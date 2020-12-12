1.
let items = document.getElementsByTagName("td");
let groupItems = [];
for (i =0 ; i < items.length; i ++) {
    groupItems.push (items[i].innerHTML);
}
console.log(groupItems);
2.
let listTest = document.getElementById("test");
console.log(listTest);
3. 
for (i= 0; i< groupItems.length; i ++) {
    let li = document.createElement("li");
    li.innerText = groupItems[i] ;
    listTest.appendChild(li);
}
let ul_list_test = document.getElementsByTagName("li");
ul_list_test[0].remove();
ul_list_test[0].remove();