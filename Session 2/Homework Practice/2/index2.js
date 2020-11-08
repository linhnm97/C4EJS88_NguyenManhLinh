while (true) {
    let n = Number (prompt("Nhập số n:"));
    if (n > 1) {
        for (i = 2 ; i < n ; i ++){
            if( n !== 2 && n%i == 0 && i !== n) {
            alert (`${n} không phải là số nguyên tố, xin mời bạn nhập lại :`);
            break;
            }
            else {
                alert (`${n} là số nguyên tố`);
            break;
    }}
    break;
    }
    else if ( n <= 1) {
        alert(`${n} không hợp lệ`);
    }
    }

