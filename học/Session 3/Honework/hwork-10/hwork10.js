let name = prompt (`Enter sequence of name:`);
let nameArr = name.split(",");
for (i=0; i<= nameArr.length -1 ; i++) {
    nameArr[i] = `<${nameArr[i]}>`
}
console.log(...nameArr);