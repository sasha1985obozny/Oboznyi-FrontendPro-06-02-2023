console.log('Створити масив, довжину та елементи якого задає користувач.\nВідсортувати масив за зростанням.\nВидалити елементи з масиву з 2 по 4 (включно!).\nУ міру змін виводити вміст масиву на сторінку.');

let arr = [546, 6, 40, 10, 0, 5789, 56, 225, 1, 20, 'qwerty', 33, 78, 'hello', 'welcome', 34, 'Lorem ipsum', 'quality', 'armour', 50, 12, 'opportunity', 'dinosaur', 'matrix'];

console.log(`Вихідний масив: ${arr}`);

function compare(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}

arr.sort(compare);

console.log(`Масив, відсортований за зростанням: ${arr}`);

arr.splice(1, 3);

console.log(`Масив з видаленим другим, третім і четвертим елементом: ${arr}`);