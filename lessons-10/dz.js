// Чему равно а, почему?

//let a = 0 || 'string'; //'string'
//let a = 1 && 'string'; //'string'
//let a = null || 25; //25
//let a = null && 25; //null
//let a = null || 0 || 35; //35
let a = null && 0 && 35; //null
console.log(a)

// Что отобразится в консоли. Почему?

// 12 + 14 + '12' //'2612'
// 3 + 2 - '1' // 4
// '3' + 2 - 1 // 31
// true + 2 //3
// +'10' + 1 //11
// undefined + 2 //NaN
// null + 5 //5
// true + undefined //NaN

//1
let x = 'hidden'
if (x == 'hidden') {
  x = 'visible';
} else {
  x = 'hidden';
}
console.log(x);

//2
let val = 5;
if (val == 0) {
  val = 1;
} else if (val > 0) {
  val *= 10;
} else {
  val = "less then zero";
}
console.log(val)

//3
let car = {
  name: 'Lexus',
  age: 10,
  create: 2008,
  needRepair: false
}
if (car.age > 5) {
  console.log('Need Repair');
  car.needRepair = true;
} else {
  car.needRepair = false;
}
console.log(car);

//4
let item = {
  name: 'Intel core i7',
  price: '100$',
  discount: '15%'
}
if (item.discount && item.discount != "") {
  item.priceWithDiscount = parseFloat(item.price) * (parseFloat(item.discount) / 100);
} else {
  console.log(item.price);
}
console.log(item);

//4 correct 
let price = parseFloat(item.price);
let discount = parseFloat(item.discount);
let isValid = !isNaN(discount) && !isNaN(price);
if (isValid) {
  item.priceWithDiscount = (price * (100 - discount) / 100);
  console.log(item.priceWithDiscount);
} else {
  console.log(item.price);
}

//5
let product = {
  name: 'Яблоко',
  price: '10$'
};
let min = 10; // минимальная цена 
let max = 20; // максимальная цена 

if (min <= (parseFloat(product.price)) && (parseFloat(product.price)) <= max) {
  console.log(product.name);
} else {
  console.log('товаров не найдено');
}