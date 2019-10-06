// Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
const rectangle = {
  width: 5,
  height: 4,
  getSquare: function () {
    return this.width * this.height
  }
};
console.log(rectangle.getSquare())

// Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
const price = {
  price: 10,
  discount: '15%',
  getPrice: function () {
    console.log(this.price)
  },
  getPriceWithDiscount: function () {
    console.log(this.price - ((this.price * parseFloat(this.discount)) / 100))
  }
};
price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5

// 3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:

const object = {
  height: 1,
  newHeight: function () {
    let innerHeight = this.height;
    let count = 0;
    count++;
    return (this.height = innerHeight + count);
  }
}
object.height = 10;
console.log(object.height)
object.newHeight();
console.log(object.height)
object.height; // 11;
console.log(object.height);
object.newHeight();
console.log(object.height) //12


// 4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
const numerator = {
  value: 1,
  double: function () {
    this.value = (this.value * 2)
    return this
  },
  plusOne: function () {
    this.value = (this.value + 1)
    return this
  },
  minusOne: function () {
    this.value = (this.value - 1)
    return this
  },
}

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value) // 3


// Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)
const product = {
  price: 12,
  amount: 3,
  totalPrice: function () {
    return this.price * this.amount;
  }
}
console.log(product.totalPrice());
// Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.

const product1 = {
  price: 11,
  amount: 5,
}
let totalPrice1 = product.totalPrice.bind(product1)
console.log(totalPrice1());

// Даны объект и функция:
let sizes = {
    width: 5,
    height: 10
  },
  getSquare = function () {
    return this.width * this.height
  };
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes
let getSquare1 = getSquare.bind(sizes)
console.log(getSquare1());


// 4.  
let element = {
  height: 25,
  getHeight: function () {
    return this.height;
  }
};

let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight()); // undefined

// Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.