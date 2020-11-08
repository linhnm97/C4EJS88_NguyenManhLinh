let n = prompt ("Nhap so n");
let Chan = 0;
let Le =  0; 
for (let i = 1 ; i <= n; i++){
    if (i%2 == 0) {
        Chan = Chan + i; 
    }
    else {
        Le =  Le + i;
    }
    };
alert (`Tổng các số chẵn trong đoạn từ 1 đến ${n} là ${Chan} ;  
Tổng các số lẻ trong đoạn từ 1 đến ${n} là ${Le}`)