//1
function multiply() {
  let res = 1;
  if (arguments.length == 0) {
    return 0;
  } else {
    for (let i = 0; i < arguments.length; i++) {
      if (!isNaN(arguments[i]));
      res *= arguments[i]
    }
    return res;
  }
}
console.log(multiply());
console.log(multiply(3, 5));
console.log(multiply(3, 10, 6));

//2
function reverseString(str) {
  let newStr = '';
  for (let i = 1; i <= str.length; i++) {
    newStr += str[str.length - i]
  }
  return newStr;
}
console.log(reverseString('test'));
console.log(reverseString('Hello Word!'));


// 3
function getCodeStringFromText(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += str[i].charCodeAt() + " ";
  }
  return console.log(newStr);
}
getCodeStringFromText('test');
getCodeStringFromText('Hello Word!');
getCodeStringFromText('hello') // “104 101 108 108 111” 


//4
function guesNum(num) {
  let rundomNum;
  if (num < 0 || num > 10) {
    return console.log("Укажите число от 0 до 10");
  } else {
    rundomNum = Math.floor(Math.random() * 10);
    console.log(rundomNum)
    if (num === rundomNum) {
      return console.log('Вы выиграли')
    } else {
      return console.log(`Вы не угадали ваше число ${num} а выпало число ${rundomNum}`)
    }

  }
}
guesNum(3);
guesNum(9);



//5
function getArray(num) {
  let newArr = [];
  for (let i = 1; i <= num; i++) {
    newArr.push(i);
  }
  return console.log(newArr);
}
getArray(3);
getArray(10)


//6
// Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
function doubleArray(arr) {
  let newArr = [];
  for (let i = 1; i <= arr.length; i++) {
    newArr.push(i);
  }
  return console.log(newArr.concat(arr));
}
doubleArray([1, 2, 3]); // [1,2,3,1,2,3]
doubleArray([1, 2, 3, 4])


//7
function changeCollection() {
  let newArr = [];
  if (arguments.length === 0) {
    return console.log('укажите массив')
  }
  for (let i = 0; i < arguments.length; i++) {
    newArr.push(arguments[i].slice(1))
  }
  return console.log(newArr)

}
changeCollection([1, 2, 3], ['a', 'b', 'c']);
changeCollection([1, 2, 3]);
changeCollection();

//8 
let users = [{
    name: 'Denis',
    age: '29',
    gender: 'male'
  },
  {
    name: 'Irina',
    age: '20',
    gender: 'female'
  }, {
    name: 'Ivan',
    age: '21',
    gender: 'male'
  },
  {
    name: 'Olga',
    age: '29',
    gender: 'female'
  }
]

// function funcGetUsers(users, param1, param2) {
//   let newArr = [];
//   if (arguments.length == 3) {
//     for (let i = 0; i < arguments.length; i++) {
//       if (users[i][param1] == param2) {
//         newArr.push(users[i]);
//       }
//     }
//     return console.log(newArr);
//   }
// }

function funcGetUsers(users, param1, param2) {
  let newArr = [];
  if (arguments.length == 3) {
    newArr = users.filter(user => user[param1] == param2)
    return console.log(newArr);
  }
}

funcGetUsers(users, 'gender', 'male'); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]
funcGetUsers(users, 'gender', 'female');
funcGetUsers(users, 'age', '20');