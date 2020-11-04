// ===================== ADDITIONAL ========================== //
// == task-1 == //
// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).
// let admin, name;
// name = "Джон";
// admin = name;
// alert(admin);

// == task-2 == //
// Завдання: Написати програму яка буде перевіряти чи рік народження користувача був високосним
// Наприклад: 2000, 2004, 2016 - високосні 1998, 2002, 1900 2100 - не високосні
//РЕШЕНИЕ
// const leapYear = "Год високосный";
// const noLeapYear = "Год не високосный";
// let userYear = prompt();
// console.log(userYear);
// if (userYear === null) {
//   alert("Отмена пользователем");
// } else if (userYear == 0 || isNaN(userYear)) {
//   alert(invalid);
// } else if (userYear % 4 === 0 && userYear != 0) {
//   alert(leapYear);
// } else {
//   notLeapYear;
// }

// let year = prompt();
// if (year % 400 === 0) {
//   alert(leapYear);
// } else if (year % 100 === 0) {
//   alert(noLeapYear);
// } else if (year % 4 === 0) {
//   alert(leapYear);
// } else alert(noLeapYear);

// == task-3 == //
// Написати програму де компютер загадає число від 1 до 10 і запропонує користувачу вгадати його Користувач вводить свій варіант і отримує результат (Виграв чи ні) Вивести результат в форматі "Вітаю ви вгадали число (тут варіант компютера)" або "Ви програли, компютер загадав (тут варіант компютера)"

let userInput = prompt("Веди число, друг"); //плюсик ето второй способ после number переобразования значения к числу
let computerInput = Math.floor(Math.random() * (11 - 1) + 1);

if (userInput === null) {
  alert("Отмена");
} else {
  if (isNaN(userInput) || userInput < 1 || userInput > 10) {
    alert("Введи то что тебя попросили!!!");
  } else if (+userInput === computerInput) {
    alert(`Совпало: ${userInput} - ${computerInput}`);
  } else {
    alert(`"Не Совпало" ${userInput} - ${computerInput}`);
  }
}

// const pcNumber = Math.floor(Math.random() * 10) + 1;
// console.log(`PC Number is: ${pcNumber}`);
// let userNumber =
//   Number.parseInt(prompt("Спробуйте вгадати число (від 1 до 10)")) === pcNumber ?
//   alert(`Вітаю ви вгадали число ${pcNumber}`) :
//   alert(`Ви програли, компютер загадав ${pcNumber}`);

// == task-4 == //
// Написати програму яка буде знаходити суму, різницю, добуток, частрку двох чисел Користувач вводить 2 числа потім вводить знак операції і отримує результат в форматі "Сума чисел a i b = результат" (такий шаблон для кожної відповіді)

// let a = Number.parseInt(prompt("Input first number"));
// let b = Number.parseInt(prompt("Input second number"));
// let operation = prompt("Input operation (+ - / *)");
// console.log(operation);
// switch (operation) {
//   case "+":
//     alert(`Сума чисел ${a} i ${b} = ${a + b}`);
//     break;
//   case "-":
//     alert(`Різниця чисел ${a} i ${b} = ${a - b}`);
//     break;
//   case "*":
//     alert(`Добуток чисел ${a} i ${b} = ${a * b}`);
//     break;
//   case "/":
//     alert(`Частка чисел ${a} i ${b} = ${a / b}`);
//     break;

//   default:
//     alert("😵");
//     break;
// }

// == task-5 == //
// Написати програму яка буде переводити температуру з цельсія в фаренгейти, або навпаки з фаренгейта в цельсії

// let temp = prompt(
//   "Введите температуру (Цельсий - C, Фарингейт -  F), например: 50F"
// );
// let enteredTemp = Number.parseFloat(temp);
// if (temp.includes("C")) {
//   alert(`Температура по Фарингейту ${enteredTemp * 1.8 + 32}F`);
// } else if (temp.includes("F")) {
//   alert(`Температура по Цельсию ${(enteredTemp - 32) / 1.8}C`);
// } else alert("😵");

// == task-6 == //
// Написати програму яка перевіряє чи введене число потрапляє в діапазон від 55 до 99 включно

// let inputNumber = Number.parseInt(prompt());
// if (inputNumber >= 55 && inputNumber <= 99) {
//   alert("число потрапляє в діапазон від 55 до 99 включно");
// } else alert("число не потрапляє в діапазон від 55 до 99 включно");

// == task-7 == //
// Написати програму де користувач вводить 3 числа, після вводу всіх трьох чисел йому на екрані показується найбільше з них. Додатково перевіряти чи це взагалі числа

// let a, b, c;
// do {
//   a = Number.parseInt(prompt("Введите первое число"));
//   if (isNaN(a)) {
//     alert("Было введено не число, попробуйте еще раз");
//   } else {
//     break;
//   }
// } while (typeof a !== "number" || isNaN(a));
// do {
//   b = Number.parseInt(prompt("Введите второе число"));
//   if (isNaN(b)) {
//     alert("Было введено не число, попробуйте еще раз");
//   } else {
//     break;
//   }
// } while (typeof b !== "number" || isNaN(b));
// do {
//   c = Number.parseInt(prompt("Введите второе число"));
//   if (isNaN(c)) {
//     alert("Было введено не число, попробуйте еще раз");
//   } else {
//     break;
//   }
// } while (typeof c !== "number" || isNaN(c));

// alert(`Самое большое число: ${Math.max(a, b, c)}`);

// == task-8 == //
// Написати програму яка переведе введену оцінку студента до болонського формату 89 - 100 це A 75 - 88 це В 60 - 74 це С 45 - 59 це D 20 - 44 це Е до 20 це F

// == task-9 == //
// Написати програму яка отримає від користувача число (кількість хвилин) і виведе на екран строку в форматі години і хвилини Приклад 70 покаже 1:10 450 покаже 7:30 1441 покаже 24:1

// == task-10 == //
// Написати гру камінь ножиці папір. Де компютер загадує своє значення потім користувач вводить свій варіант і далі ми бачимо результат на екпані хто виграв

// // && ищет true до конца или спотыкается на первом false
// console.log(1 && true && "js"); // js
// console.log(0 && true && "js"); // 0
// console.log(1 && false && "js"); // false
// console.log(1 && "false" && "js"); // js

// // || ищет false до конца или спотыкается на первом true
// console.log(0 || false || "" || "1"); // 1
// console.log(0 || false || "" || undefined); // undefined
// console.log(1 || true || "fff" || undefined); // 1
// console.log(0 || true || "" || undefined); // true

// let userAge = 23;
// if (userAge >= 20 && userAge <= 30) {
//   console.log("Возраст пользователья от 20 до 30 лет");
// }
// userAge = 32;
// if (userAge >= 20 || userAge <= 30) {
//   console.log("Возраст пользователья от 20 до 30 лет");
// }

// const friends = ["Mangoo", "Kiwi", "Poly", "Ajax"];
// const nameToFind = "Poly";
// let massage;

// for (let i = 0; i < friends.length; i += 1) {
//   const friend = friends[i];

//   if (nameToFind === friends) {
//     massage = "Нашли такого друга";
//   }
// }
// console.log(massage);
