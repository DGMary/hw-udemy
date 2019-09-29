// /br>Из задач по условному оператору if else выполнить задачи 1 и 2 в виде тернарного оператора.
//1
let a1 = "flex";
switch (a1) {
  case 'block':
    console.log('block');
    break;
  case 'none':
    console.log('none');
    break;
  case 'inline':
    console.log('inline');
    break;
  default:
    console.log('other');
    break;
}

//2
let a2 = 'visible';
switch (a2) {
  case 'hidden':
    a2 = 'visible';
    break;
  default:
    a2 = 'hidden'
}
console.log(a2)

//3
let a3 = -7;
switch (true) {
  case (a3 == 0):
    a3 = 1;
    break;
  case (a3 < 0):
    a3 = "less then zero";
    break;
  default:
    a3 *= 10
}
console.log(a3)