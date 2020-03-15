let string = "some test string";
// ВРУЧНУЮ НИЧЕГО НЕ СЧИТАТЬ

// 1. Получить первую и последнюю буквы строки
console.log("First letter: " + string[0]);
console.log("Last letter: " + string[string.length - 1]);
console.log("First letter charAt : " + string.charAt(0));
console.log("Last letter charAt : " + string.charAt(string.length - 1));

/**
 * best solution
 */
const firstChar = string[0];
const lastChar = string[string.length - 1];
console.log(firstChar, lastChar);

// 2. Сделать первую и последнюю буквы в верхнем регистре
console.log("First letter: " + string[0].toUpperCase());
console.log("Last letter: " + string[string.length - 1].toUpperCase());
console.log("First letter charAt : " + string.charAt(0).toUpperCase());
console.log(
  "Last letter charAt : " + string.charAt(string.length - 1).toUpperCase()
);
/**
 * best solution
 */
const firstLastUpper = `${string[0].toUpperCase()}${string.slice(
  1,
  -1
)}${string[string.length - 1].toUpperCase()}`;
console.log(firstLastUpper);

// 3. Найти положение слова ‘string’ в строке
console.log(string.indexOf("string"));
/**
 * best solution
 */
const wordPos = string.indexOf("string");
console.log(wordPos);

// 4. Найти положение второго пробела (“вручную” ничего не считать);
let indextOfFirst = string.indexOf(" ") + 1;
console.log(string.indexOf(" ", indextOfFirst));
/**
 * best solution
 */
const firstSpace = string.indexOf(" ");
const secondSpace = string.indexOf(" ", firstSpace + 1);
console.log(secondSpace);

// 5. Получить строку с 5-го символа длиной 4 буквы
console.log(string.substr(4, 4));
/**
 * best solution
 */
const substr = string.substr(5, 4);
console.log(substr);

// 6. Получить строку с 5-го по 9-й символы
console.log(string.substr(4, 9));
/**
 * best solution
 */
const slice = string.slice(5, 10);
console.log(slice);

// 7. Получить новую строку из исходной путем удаления последних 6-и символов
// (то есть исходная строка без последних 6и символов)
var newStr = string.substr(0, string.length - 6);
console.log("newStr : " + newStr);
let str = string.slice(0, -6);
console.log("new str:" + str);
/**
 * best solution
 */
const lastSix = string.slice(0, -6);
console.log(lastSix);

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
// содержаться текст “2016”
var a = 20,
  b = 16;
console.log(a + b.toString());
console.log("" + a + b);
console.log(`${a}${b}`);
/**
 * best solution
 */
const a = 20,
  b = 16;
const strFromNum = String(a) + String(b);
console.log(strFromNum);

//Numbers
// 1. Получить число pi из Math и округлить его до 2-х знаков после точки
console.log("PI: " + parseFloat(Math.PI.toFixed(2)));

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
console.log("max: " + Math.max(15, 11, 16, 12, 51, 12, 13, 51));
console.log("min: " + Math.min(15, 11, 16, 12, 51, 12, 13, 51));

// 3. Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой
// b. Получить случайное целое число от 0 до X. X - любое произвольное число.
console.log(Math.random().toFixed(2));
console.log(Math.round(Math.random() * 100));

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
console.log((0.6 * 10 + 0.7 * 10) / 10);
console.log((0.6 + 0.7).toFixed(1));

// 5. Получить число из строки ‘100$’
console.log(parseInt("100$"));