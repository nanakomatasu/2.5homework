const fs = require("fs");
const res = fs.readFileSync("./info.json", "utf8");
const arr = res.split(",");
console.log(arr);
// const socres = arr.map((item) => {
//   const newArr = item.split("=");
//   return +newArr[1];
// });

// const total = socres.reduce((a, s) => {
//   return a + s;
// }, 0);
// console.log(total);

// fs.writeFileSync("./成绩.txt", total + "");
