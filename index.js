alert('Введіть 3 числа і Ви дізнаєтесь їх середнє арифметичне значення');

let num1 = Number(prompt('Введіть перше число'));
let num2 = Number(prompt('Введіть друге число'));
let num3 = Number(prompt('Введіть третє число'));

while (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert('Одне або декілька введених значень не є числами');
    num1 = Number(prompt('Введіть перше число'));
    num2 = Number(prompt('Введіть друге число'));
    num3 = Number(prompt('Введіть третє число'));
}

let arithmeticMean = (num1 + num2 + num3) / 3;
alert('Середнє арифметичне цих трьох чисел: (' + num1 + ' + ' + num2 + ' + ' + num3 + ') / 3 = ' + arithmeticMean);
