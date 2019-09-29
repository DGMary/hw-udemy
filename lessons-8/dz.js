let string = 'some test string';
// ВРУЧНУЮ НИЧЕГО НЕ СЧИТАТЬ

// 1. Получить первую и последнюю буквы строки
// 2. Сделать первую и последнюю буквы в верхнем регистре
// 3. Найти положение слова ‘string’ в строке
// 4. Найти положение второго пробела (“вручную” ничего не считать)
// 5. Получить строку с 5-го символа длиной 4 буквы
// 6. Получить строку с 5-го по 9-й символы
// 7. Получить новую строку из исходной путем удаления последних 6-и символов
// (то есть исходная строка без последних 6и символов)
// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
// содержаться текст “2016”

//1
let firstLetter = string[0];
let lastLetter = string[string.length - 1]
console.log(firstLetter);
console.log(lastLetter);

//2
let firstLetterUpper = string[0].toLocaleUpperCase();
let lastLetterUpper = string[string.length - 1].toLocaleUpperCase();
let newStr = firstLetterUpper + string.slice(1, -1) + lastLetterUpper;
console.log(newStr);

//3
let stringLocation = string.indexOf('string');
console.log(stringLocation);

//4
console.log(string.lastIndexOf(' '));

//5
console.log(string.substr(5, 4))

//6
console.log(string.substring(5, 9))

//7
console.log(string.slice(0, -6));

// 8 Из двух переменных  получить переменную string, в которой будет
// содержаться текст “2016”
let a = 20,
  b = 16;
let string1 = a.toString() + b.toString();
console.log(string1);
console.log("" + a + b);