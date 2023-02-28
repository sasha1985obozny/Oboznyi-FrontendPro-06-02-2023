'use strict';

console.log('Написати функцію, яка приймає один аргумент. Якщо його не передати - то по замовчуванню цей аргумент дорівнює - 0.\nПри першому виклику, вона його запам\'ятовує, при наступних переданий аргумент сумується з результатом попереднього виклику.\nДля цього використовуємо замикання (без нього тут не обійтися)\nЯк це буде виглядати:\nconst sum = sumFunction();\nsum(3) ; // 3\nsum(5); // 8\nsum(20); // 28\nВажливо: функція має повертати значення, а не просто виводити його в console.log')

function sumFunction(initValue = 0) {
    let result = initValue;
    return function (arg = 0){
        if (arg === 0){
            result = arg;//Можливо, стріляю собі в ногу, але подумав, що не погано було б додати можливість занулення
        }
        return result += arg;
    }
}

let sum = sumFunction();

console.log('sum(3) -> ' + sum(3));
console.log('sum(5) -> ' + sum(5));
console.log('sum(20) -> ' + sum(20));
console.log('Занулюємо');
console.log('sum(0) -> ' + sum(0));
console.log('sum(10) -> ' + sum(10));
console.log('sum(15) -> ' + sum(15));
console.log('Занулюємо');
console.log('sum(0) -> ' + sum(0));
console.log('sum(250) -> ' + sum(250));
console.log('sum(-50) -> ' + sum(-50));
console.log('Занулюємо');
console.log('sum() -> ' + sum());

const a = 10;
const b = 25;
const c = 30;

console.log(`a = ${a}, b = ${b}, c = ${c}`);
console.log(`sum(${a} + ${b} = ${a + b}) -> ` + sum(a + b));
console.log(`sum(${c} - ${b} = ${c - b}) -> ` + sum(c - b));
console.log(`sum(${c} / ${a} = ${c / a}) -> ` + sum(c / a));
console.log(`sum(${b} * ${c} = ${b * c}) -> ` + sum(b * c));