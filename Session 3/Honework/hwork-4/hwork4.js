let clothesType = ["Jeans", "T-shirt", "Socks"];
while (true) {
    let answer = (prompt (`Hi there, welcome to shop admin panel. What do you want (C,R, U, D)?`)).toUpperCase();
    if (answer == "R") {
        alert(`The current items are :`);
        let str ='';
        for (i=0; i<= clothesType.length-1; i++){
            str = str + `${i}. ${clothesType[i]} \n`;
        }
        alert (str);
        break;
    }
    else if (answer == "C" ) {
        var newItem = prompt('Enter the name of the new item');
        clothesType.push(newItem);
        alert (`Done`);
    }
    else if (answer == "U") {
        var position = prompt (`Enter the position you want to update:`);
        var newName = prompt (`Enter the new name`);
        clothesType [position]= newName;
        alert(`Done`);
    }   
    else if (answer == "D"){
        var pDelete = prompt (`Enter the position you want to delete`);
        clothesType.splice (pDelete, 1);
        alert(`Done`);
    }}
