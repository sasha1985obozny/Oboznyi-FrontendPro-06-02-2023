'use strict'

const hours = prompt('Введіть, будь ласка, кількість годин');
const seconds = +hours * 3600;
alert(`Кількість введених годин: ${hours}. Це складає ${seconds} секунд.`);