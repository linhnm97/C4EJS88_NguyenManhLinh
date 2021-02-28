let movie = {
    title :"The dark night rises",
    year :2012,
    rate : 8.4,
}
// console.log (movie);
// console.log (movie.title);
// console.log (movie.year);

// console.log (movie [`title`]);
// console.log (movie ["year"]);

// let x = prompt ("Nhập tên của thuộc tính ?");
// if (x == null || x == undefined){
//     alert (`${x} không có giá trị`);
// }
// else if (x == "title" || x == "year" || x == "rate") {
//     alert (`${x.toUpperCase()} là  ${movie[x]}`);
// }
// else {
//     alert (`${x} không có giá trị`)
// }

// movie.rate = 8.7;
// console.log (movie.rate);
// movie.rate += 0.5;
// console.log (movie.rate);

// let x = prompt ("Nhập tên của thuộc tính ?");
// if (x == null || x == undefined){
//     alert (`${x} không có giá trị`);
// }
// else if (x == "title" || x == "year" || x == "rate") {
//     let value = prompt (`Nhập giá trị muốn thay đổi ?`);
//     movie[x] = value;
//     alert (`${x.toUpperCase()} là  ${movie[x]}`);
//     console.log(movie);
// }
// else {
//     alert (`${x} không có giá trị`);
//     let value = prompt(`Enter the value`);
//     movie[x] = value;
//     console.log(movie);
// }

let movieArr = [
    {
        name : "Wonder Woman",
        rate : 7.9,
        year : 2010,
        genre : "Action"
    },
    {
        name : "Captain Marvel",
        rate : 8.2,
        year : 2018,
        genre : "Action"
    },
    {
        name : "Thor",
        rate : 8.5,
        year : 2016,
        genre : "Action"
    }
]

console.log(movieArr[0]);
let x = Number(movieArr.length-1); 
console.log (movieArr[x].name);

for (i =0 ; i <= movieArr.length -1; i++) {
    movieArr[i];
    console.log (`-------------------`);
    console.log(movieArr[i].name);
    console.log(movieArr[i].rate);
    console.log(movieArr[i].year);
    console.log(movieArr[i].genre);
}
movieArr[x].rate += 0.7;
console.log(movieArr[x].rate);