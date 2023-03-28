'use strict';

function Human(name, gender) {
    this.name = name;
    this.gender = gender;
}

function Flat() {
    this.residents = [];
}

Flat.prototype.addResident = function (resident) {
    this.residents.push(resident);
}
 
function House(maxFlatAmount) {
    this.maxFlatAmount = maxFlatAmount;
    this.flats = [];
}

House.prototype.addFlat = function (flat) {

    for (let i = 0; i < this.flats.length; i++) {
        if (this.flats[i] === flat){
            console.log('Ця квартира уже існує');
            return;
        }
    }

    if(this.flats.length < this.maxFlatAmount){
        this.flats.push(flat);
        console.log('Успішно');
    } else {
        console.log(`Будинок не може містити більше ${this.maxFlatAmount} квартир`);
    }   
}

console.log('Створюємо екземпляри класу Людина');

const mary = new Human('Mary', 'female');
const harry = new Human('Harry', 'male');
const jerry = new Human('Jerry', 'male');
const julia = new Human('Julia', 'female');
const tom = new Human('Tom', 'male');

console.log(mary);
console.log(harry);
console.log(jerry);
console.log(julia);
console.log(tom);

console.log('');
console.log('Створюємо екземпляри класу Квартира');

const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();
const flat4 = new Flat();
const flat5 = new Flat();

console.log(flat1);
console.log(flat2);
console.log(flat3);
console.log(flat4);
console.log(flat5);

console.log('');
console.log('Додаємо екземпляри класу Людина до екземплярів класу Квартира');

function showResidents(arr){
    if (arr.length === 0){
        console.log('В квартирі немає жителів');
    }
    arr.forEach(item => {
        console.log(item.name);
    });
}

flat1.addResident(mary);
flat1.addResident(harry);
console.log('Жителі квартири 1:');
showResidents(flat1.residents);

flat2.addResident(jerry);
console.log('Жителі квартири 2:');
showResidents(flat2.residents);

console.log('Жителі квартири 3:');
flat3.addResident(julia);
flat3.addResident(tom);
showResidents(flat3.residents);

console.log('Жителі квартири 4:');
showResidents(flat4.residents);

console.log('Жителі квартири 5:');
showResidents(flat5.residents);

console.log('');
console.log('Створюємо екземпляр класу Будинок');
const house = new House(3);
console.log(house);

console.log('Додаємо екземпляри класу Квартира до екземпляру класу Будинок');
console.log('Додаємо квартиру 1 до екземпляру класу Будинок');
house.addFlat(flat1);
console.log('');
console.log('Додаємо квартиру 1 до екземпляру класу Будинок');
house.addFlat(flat1);
console.log('');
console.log('Додаємо квартиру 2 до екземпляру класу Будинок');
house.addFlat(flat2);
console.log('');
console.log('Додаємо квартиру 3 до екземпляру класу Будинок');
house.addFlat(flat3);
console.log('');
console.log('Додаємо квартиру 2 до екземпляру класу Будинок');
house.addFlat(flat2);
console.log('');
console.log('Додаємо квартиру 4 до екземпляру класу Будинок');
house.addFlat(flat4);
console.log('');
console.log('Додаємо квартиру 5 до екземпляру класу Будинок');
house.addFlat(flat5);

console.log('');
console.log(house);