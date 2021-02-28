const phoneList = [
    {
        name: "Peter",
        phone: "0973712312"
    },
    {
        name: "Tony",
        phone: "098123321"
    }
];

while (true) {
    let action = prompt ("Nhập thao tác bạn muốn thực hiện :"). toUpperCase();
        if (action == "C" || action == "R" || action == "U" || action == "D") {
            if (action == "C") {
                let nameNew = prompt (`Nhập tên của liên hệ :`);
                let phoneNew = prompt (`Nhập số điện thoại mới :`);
                let newContact = {
                    name : "",
                    phone : "",
                };
                newContact.phone = phoneNew;
                newContact.name = nameNew ;
                phoneList.push (newContact);
                for (let k =0 ; k <= phoneList.length -1; k ++) {
                    console.log (`${phoneList[k]. name} : ${phoneList[k]. phone}`);
                    console.log (`-----------------------------------------`);
                }
            }
            if(action == "R") {
                for (let k =0 ; k <= phoneList.length -1; k ++) {
                    console.log (`${phoneList[k]. name} : ${phoneList[k]. phone}`);
                    console.log (`-----------------------------------------`);
                }
            }
            if(action == "U") {
                let findName1 = prompt ("Nhập tên liên hệ mà bạn muốn thay đổi ?");
                for (t = 1 ; t <= phoneList.length -1 ; t ++) {
                    if (findName1 == phoneList[t].name) {
                        let newPhone = prompt (`Nhập số điện thoại bạn muốn thay đổi ?`);
                        phoneList[t].phone = newPhone;
                        console.log (phoneList);
                        break;
                    }
                    else {
                        alert (`Không tìm thấy liên hệ này`);
                        break;
                    }
                }
                }
            if (action == "D") {
                let findName2 = prompt (`Nhập tên liên hệ mà bạn muốn xóa ?`);
                for (k = 1 ; k <= phoneList.length -1 ; k ++) {
                    if (findName2 == phoneList[k].name) {
                        phoneList.splice(k,1);
                        alert ("Đã xóa thành công");
                        console.log (phoneList);
                    }
                    else {
                        alert (`Không tìm thấy contact`);
                        break;
                        }
                }
                for (let m = 0 ; m <= phoneList.length - 1; m ++) {
                    console.log (`${phoneList[m].name} : ${phoneList[m].phone}`);
                    console.log (`-----------------------------------------`);
                }
            } } 
        else {
            alert (`Sai cú pháp. Đề nghị nhập lại`);
        } ;
        let answer = prompt ("Bạn có muốn tiếp tục không ?");
        if (answer == "no") {
            break;
        } };