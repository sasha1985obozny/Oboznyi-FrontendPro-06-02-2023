'use strict';

console.log('Реалізувати рекурсивну функцію, яка зводить число в ступінь.\nЧисло, яке треба піднести до ступеню, передається як перший аргумент у функції;\nСтупінь передається як другий аргумент у функцію pow(num, degree).');

function pow(num, degree) {
  if (degree === 0) {
    return 1;
  }
  return num * pow(num, degree - 1);
}

// Test cases

    const num1 = 2;
    const degree1 = 10;
    const test1 = pow(num1, degree1);
    console.log(`pow(${num1}, ${degree1}) - ${num1} в ступені ${degree1} дорівнює ${test1}`);

    const num2 = 3;
    const degree2 = 0;
    const test2 = pow(num2, degree2);
    console.log(`pow(${num2}, ${degree2}) - ${num2} в ступені ${degree2} дорівнює ${test2}`);

    const num3 = 10;
    const degree3 = 6;
    const test3 = pow(num3, degree3);
    console.log(`pow(${num3}, ${degree3}) - ${num3} в ступені ${degree3} дорівнює ${test3}`);