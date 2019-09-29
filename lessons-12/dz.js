// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре. Использовать for или while.
let str = "i am in the easycode".split(" ");
let newStr = "";

for (let i = 0; i < str.length; i++) {
  newStr += str[i][0].toLocaleUpperCase() + str[i].slice(1) + " ";
}
console.log(newStr);

// 2
let str1 = "tseb eht ma i";
let newStr1 = "";

for (let i = 1; i <= str1.length; i++) {
  newStr1 += str1[str1.length - i];
}
console.log(newStr1);

// 3
let n = 4;
let newN = n;
for (let i = 1; i < n; i++) {
  newN *= n - i;
}
console.log(newN);

// 4
let str2 = "JavaScript is a pretty good language".split(" ");
let newStr2 = "";

for (let i = 0; i < str2.length; i++) {
  newStr2 += str2[i][0].toLocaleUpperCase() + str2[i].slice(1);
}
console.log(newStr2);

// 5
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 != 0) {
    console.log(num[i]);
  }
}

// 6
let list = {
  name: "denis",
  work: "easycode",
  age: 29
};

// 7
for (item in list) {
  if (typeof list[item] === "string") {
    list[item] = list[item].toUpperCase();
  }
}

console.log(list);
