function firstFunc(arr, handler) {
  let newStr = '';
  for (let i = 0; i < arr.length; i++) {
    newStr += (handler(arr[i]))
  }
  return newStr;
}

function handler1(elem) {
  return elem[0].toUpperCase() + elem.slice(1);
}

function handler2(elem) {
  return (elem + ", ");
}

function handler3(elem) {
  return (elem.name + " is " + elem.age + ", ");
}

function handler4(elem) {
  return elem.split('').reverse().join('') + ", ";
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));
console.log(firstFunc([10, 20, 30], handler2));
console.log(firstFunc([{
  age: 45,
  name: 'Jhon'
}, {
  age: 20,
  name: 'Aaron'
}], handler3));
console.log(firstFunc(['abc', '123'], handler4));


function myEvery(arrEvery, callbackEvery) {
  if (!Array.isArray(arrEvery)) {
    return "Fist argument mast be array"
  } else if (!(typeof callbackEvery) == "function") {
    return "Second argumen must be function"
  } else {
    let res;
    for (let i = 0; i < arrEvery.length; i++) {
      if ((callbackEvery(arrEvery[i])) == false) {
        return false
      }
    }
    return true;

  }
}

function myCallback(elem) {
  return elem > 5;
}

function myCallback1(elem) {
  return elem % 2 == 0;
}

console.log(myEvery([10, 90, 3], myCallback1));
console.log(myEvery([1, 90, 7], myCallback));