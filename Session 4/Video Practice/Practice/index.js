// let person = ["Nam", 19, "Hanoi", 25, false];
// console.log(person);
// let person = {
//     name : "Nam"
// }
// //  console.log(person);

//  let person = {
//     name : "Nam",
//     age : 19,
//  };
//  console.log(person);

// let person = [
//   {
//     name: "Nam",
//     age: 18,
//   },
//   {
//     name: "Linh",
//     age: 19,
//   },
// ];
// // console.log(person.age);
// let prop = "name";
// console.log (person[prop]);

// person.name = "Nguyen Phương Nam",
// console.log(person.name);
// person.location = "Hanoi";
// console.log (person);

// delete person.age;
// console.log (person);

// x = person[1];
// console.log(x.name);

// for (let i = 0; i <= person.length; i++) {
//   let p = person[i];
//   console.log(p);
//   console.log(p.age);
// }

let person = {
   name : "Nam",
   age : 18,
   favs : ["Netflix", "Coffee", "Code"]
};
console.log (person.favs[1]);
let favs = person.favs;
console.log (favs);
console.log (favs[0]);
favs.push(`MC`);
console.log (favs);