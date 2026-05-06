/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/
let str = "буба";

function doubleEachCharacter(str) {
  let text = "";
  for (let i = 0; i < str.length; i++) {
    text = text + str.charAt(i) + str.charAt(i);
  }
  return text;
}

console.log(doubleEachCharacter("hwe"));
