const fs = require("fs");
const res = fs.readFileSync("./info.json", "utf8");
const arr = JSON.parse(res);
console.log(arr);
const item = arr[Math.floor(Math.random() * arr.length)];
console.log(item);

// const socres = arr.map((item) => {
//   const newArr = item.split("=");
//   return +newArr[1];
// });

// const total = socres.reduce((a, s) => {
//   return a + s;
// }, 0);
// console.log(total);

// fs.writeFileSync("./成绩.txt", total + "");
