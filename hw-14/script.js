'use strict'

const shoppingCart = {
    items: [],
    addItem(item){
        if (this.items.length === 0){
          this.items.push(item);
          console.log('массив пустой добавляю первый элемент');
          return this;
        } 

        for(let i = 0; i < this.items.length; i++){
          console.log(this.items[i].name);
          console.log(item.name);
          if(this.items[i].name === item.name){
            this.items[i].count += item.count;
            console.log('Имя совпадает. Увеличиваю количество');
            return this;                  
              } 
        }
        
        console.log('Имя не совпадает. Пушу новый элемент');
        this.items.push(item);
        return this;
    },

    deleteItem(item) {
      for (let i = 0; i < this.items.length; i++){
        console.log(item);
        console.log(this.items[i].name);
        console.log(this.items[i].count);
        if(this.items[i].name === item && this.items[i].count === 1){
          console.log('Delete item');
          this.items.splice(i, 1);
          return this;
        } else if (this.items[i].name === item ){
          this.items[i].count -= 1;
          return this;
        }
      }
    },

    getTotalSum(){
      let totalSum = this.items.reduce((sum, current) => {
        sum += current.count * current.price;
        return sum;
      }, 0);
      return totalSum;
    }
  };

  // Test cases

  console.log('Кошик порожній');
  shoppingCart.addItem({name: 'Headphone', count: 4, price: 100});
  console.log(`Додано товар: {name: 'Headphone', count: 4, price: 100}`);
  let resultSum = shoppingCart.getTotalSum();
  console.log(`Загальна вартість всіх товарів складає ${resultSum}`);

  shoppingCart.addItem({name: 'Headphone', count: 3, price: 100});
  console.log(`Додано товар: {name: 'Headphone', count: 3, price: 100}`);
  resultSum = shoppingCart.getTotalSum();
  console.log(`Загальна вартість всіх товарів складає ${resultSum}`);

  shoppingCart.addItem({name: 'Vacuum cleaner', count: 2, price: 300});
  console.log(`Додано товар: {name: 'Vacuum cleaner', count: 2, price: 300}`);
  resultSum = shoppingCart.getTotalSum();
  console.log(`Загальна вартість всіх товарів складає ${resultSum}`);

  shoppingCart.deleteItem('Headphone');
  console.log(`Видалено товар: 'Headphone'`);
  resultSum = shoppingCart.getTotalSum();
  console.log(`Загальна вартість всіх товарів складає ${resultSum}`);

  shoppingCart.addItem({name: 'Vacuum cleaner', count: 5, price: 300});
  console.log(`Додано товар: {name: 'Vacuum cleaner', count: 5, price: 300}`);
  resultSum = shoppingCart.getTotalSum();
  console.log(`Загальна вартість всіх товарів складає ${resultSum}`);

  shoppingCart.deleteItem('Vacuum cleaner');
  console.log(`Видалено товар: 'Vacuum cleaner'`);
  resultSum = shoppingCart.getTotalSum();
  console.log(`Загальна вартість всіх товарів складає ${resultSum}`);

  shoppingCart.addItem({name: 'Iron', count: 5, price: 500});
  console.log(`Додано товар: {name: 'Iron', count: 5, price: 500}`);
  resultSum = shoppingCart.getTotalSum();
  console.log(`Загальна вартість всіх товарів складає ${resultSum}`);

  shoppingCart.deleteItem('Vacuum cleaner');
  console.log(`Видалено товар: 'Vacuum cleaner'`);
  resultSum = shoppingCart.getTotalSum();
  console.log(`Загальна вартість всіх товарів складає ${resultSum}`);

  shoppingCart.addItem({name: 'Laptop', count: 1, price: 1000});
  console.log(`Додано товар: {name: 'Laptop', count: 1, price: 1000}`);
  resultSum = shoppingCart.getTotalSum();
  console.log(`Загальна вартість всіх товарів складає ${resultSum}`);

  shoppingCart.deleteItem('Laptop');
  console.log(`Видалено товар: 'Laptop'`);
  resultSum = shoppingCart.getTotalSum();
  console.log(`Загальна вартість всіх товарів складає ${resultSum}`);

  console.log(shoppingCart.items);