// 1. Дано масив з елементами різних типів. \nСтворити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

console.log('1. Дано масив з елементами різних типів. \nСтворити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.')

function calcAverageNumberElementsOfArray(arr){
    let sum = 0;
    let numberCount = 0;
    arr.forEach((item) => {
       if (typeof(item) === 'number'){
        sum += item;
        numberCount++;
       }
    })
    return console.log(`Середнє арифметичне лише числових елементів масиву складає ${(sum/numberCount).toFixed(2)}`);
}

// Тести

const testArr1 = [45, true, 'script', 0, '15', {name: 'Thomas', lastName: 'Anderson', alias: 'Neo'}, false, 15, null, 124, undefined, 100];
const testArr2 = [null, '785', 97586, 10, 'success', {age: 15, amount: 225}, 2418967, 0, 1, true, undefined, false, null, 17456.74, 1.5, 2145.2, undefined, true, {name: 'Alex', age: 18}];

console.log('Тестовый масив 1:');
console.log(testArr1);
calcAverageNumberElementsOfArray(testArr1);

console.log('Тестовый масив 2:');
console.log(testArr2);
calcAverageNumberElementsOfArray(testArr2);

// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
console.log('');
console.log('2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.')

let result = 0;
function doMath(x, znak, y){
    if (typeof(x) !== 'number' || typeof(y) !== 'number'){
        return result = 'Операнди повинні бути числами';
    }
    switch(znak){
        case '+':
            return result = x + y;
        case '-':
            return result = x - y;
        case '*':
            return result = x * y;
        case '/':
            return result = x / y;
        case '%':
            return result = x % y;
        case '^':
            return result = x ** y;
        default:
            return result = 'Знак операції повинен бути одним із шести варіантів: +, -, *, /, % або ^';
    }
}

// Тести

console.log('Тест 1: 20 + 10 =');
doMath(20, '+', 10);
console.log(result);

console.log('Тест 2: 40 - 15 =');
doMath(40, '-', 15);
console.log(result);

console.log('Тест 3: 50 * 60 =');
doMath(50, '*', 60);
console.log(result);

console.log('Тест 4: 80 / 4 =');
doMath(80, '/', 4);
console.log(result);

console.log('Тест 5: 11 % 3 =');
doMath(11, '%', 3);
console.log(result);

console.log('Тест 6: 5 ^ 4 =');
doMath(5, '^', 4);
console.log(result);

console.log('Тест 7: 5 & 4 =');
doMath(5, '&', 4);
console.log(result);

console.log('Тест 8: \'5\' * 4 =');
doMath('5', '*', 4);
console.log(result);

console.log('Тест 9: 5 + \'4\' =');
doMath(5, '+', '4');
console.log(result);

// 3. Написати функцію яка приймає массив чисел та повертає максимальне число в цьому масиві.
console.log('');
console.log('3. Написати функцію яка приймає массив чисел та повертає максимальне число в цьому масиві.');

let max = 0;
function maxNumberInArray(arr){
    for (let i = 0; i < arr.length; i++){        
        if(typeof(arr[i]) !== 'number'){
            max = undefined;
            console.log('Всі елементи масива повинні бути числами');
            return false;
        }
    }
    max = arr[0];
    arr.forEach((item) => {
        if(item > max){
            max = item;
        }
    })
    return max;
}

// Тести

console.log('Тест1: Вихідний масив [1, 2, 3, 8, 4, 5]');
maxNumberInArray([1, 2, 3, 8, 4, 5]);
console.log(`Максимальне значення в масиві: ${max}`);

const array1 = [25.7, 38, 41.6, 98.1, 456.45, 12, 783.5, 127, 315.8, 14];
console.log('Тест2: Вихідний масив:');
console.log(array1);
maxNumberInArray(array1);
console.log(`Максимальне значення в масиві: ${max}`);

console.log('Тест3: Вихідний масив [1, \'2\', 3, 8, 4, 5]');
maxNumberInArray([1, '2', 3, 8, 4, 5]);
console.log(`Максимальне значення в масиві: ${max}`);


// 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
console.log('');
console.log('4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. \'func(\" hello world\", [\'l\', \'d\'])\' поверне нам \"heo wor\". Вихідний рядок та символи для видалення задає користувач.');

function deleteSymbolsFromString (str, arr){
    arr.forEach((item) => {
        str = str.replaceAll(item, '');
    })
    if (str.includes('  ')){
        str = str.replaceAll('  ', ' ');
    }
    return str;
}

// Тести

let string1 = 'Lorem ipsum dolor sit amet';
let arr41 = ['s', 't', 'i'];

let testStr1 = deleteSymbolsFromString(string1, arr41);

console.log(`Вихідний рядок: ${string1}`);
console.log('Масив символів, які необхідно видалити:');
console.log(arr41);
console.log('Рядок з видаленими символами:');
console.log(testStr1);

let string2 = 'hello world';
let arr42 = ['l', 'd'];

let testStr2 = deleteSymbolsFromString(string2, arr42);

console.log(`Вихідний рядок: ${string2}`);
console.log('Масив символів, які необхідно видалити:');
console.log(arr42);
console.log('Рядок з видаленими символами:');
console.log(testStr2);