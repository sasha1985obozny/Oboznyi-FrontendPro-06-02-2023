class Hamburger {

    constructor(size, stuffing){
        this.size = size,
        this.stuffing = stuffing,
        this.topping = []
    }

    static SIZE_SMALL = {
        size: 'small',
        price: 50,
        calories: 20
    }

    static SIZE_BIG = {
        size: 'big',
        price: 100,
        calories: 40
    }

    static STUFFING_CHEESE = {
        stuffing: 'cheese',
        price: 10,
        calories: 20
    }

    static STUFFING_SALAD = {
        stuffing: 'salad',
        price: 20,
        calories: 5
    }

    static STUFFING_POTATO = {
        stuffing: 'potato',
        price: 15,
        calories: 10
    }

    static TOPPING_MAYO = {
        topping: 'mayo',
        price: 20,
        calories: 5
    }

    static TOPPING_SAUCE = {
        topping: 'sauce',
        price: 15,
        calories: 0
    }

    addTopping(topping, quantity) {
        for (let i = 0; i < quantity; i++) {
            this.topping.push(topping);
        }
    }

    calculateCalories() {
        return this.size.calories 
        + this.stuffing.calories 
        + this.topping.reduce((sum, curr) => {
            return sum + curr.calories;
        }, 0);
    }

    calculatePrice() {
        return this.size.price
        + this.stuffing.price
        + this.topping.reduce((sum, curr) => {
            return sum + curr.price;
        }, 0);
    }
}

console.log('Marry: I\'d like small hamburger with cheese');
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
console.log(hamburger);
console.log(`Waiter: Here you go. 
Your hamburger has ${hamburger.calculateCalories()} calories. 
The price is ${hamburger.calculatePrice()} tugriks.`);

console.log('Marry: Add 2 mayo topping, please');
hamburger.addTopping(Hamburger.TOPPING_MAYO, 2);
console.log(hamburger);
console.log(`Waiter: Here you go. 
Now your hamburger has ${hamburger.calculateCalories()} calories. 
The price is ${hamburger.calculatePrice()} tugriks.`);

console.log('Marry: And add 1 sauce topping, please');
hamburger.addTopping(Hamburger.TOPPING_SAUCE, 1);
console.log(hamburger);
console.log(`Waiter: Here you go. 
Now your hamburger has ${hamburger.calculateCalories()} calories. 
The price is ${hamburger.calculatePrice()} tugriks.`);

console.log('');
console.log('Max: I\'d like big hamburger with salad');
const hamburger1 = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_SALAD);
console.log(hamburger1);
console.log(`Waiter: Here you go. 
Your hamburger has ${hamburger1.calculateCalories()} calories. 
The price is ${hamburger1.calculatePrice()} tugriks.`);

console.log('Max: Add 3 mayo and 2 sauce, please');
hamburger1.addTopping(Hamburger.TOPPING_MAYO, 3);
hamburger1.addTopping(Hamburger.TOPPING_SAUCE, 2);
console.log(hamburger1);
console.log(`Waiter: Here you go. 
Your hamburger has ${hamburger1.calculateCalories()} calories. 
The price is ${hamburger1.calculatePrice()} tugriks.`);

console.log('');
console.log('John: I\'d like big hamburger with potato');
console.log('John: Add 1 mayo and 1 sauce, please');
const hamburger2 = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_POTATO);
hamburger2.addTopping(Hamburger.TOPPING_MAYO, 1);
hamburger2.addTopping(Hamburger.TOPPING_SAUCE, 1);
console.log(hamburger2);
console.log(`Waiter: Here you go. 
Your hamburger has ${hamburger2.calculateCalories()} calories. 
The price is ${hamburger2.calculatePrice()} tugriks.`);