'use strict'

const yearOfBirth = prompt('Введи, будь ласка, рік народження');
if (yearOfBirth === null || yearOfBirth === '') {
    alert('Шкода, що ти не захотів ввести свій рік народження');
} 
const city = prompt('У якому місті ти живеш?');
if (city === null || city === '') {
    alert('Шкода, що ти не захотів ввести назву міста, в якому ти живеш');
}
const sport = prompt('Який твій улюблений вид спорту?');
if (sport === null || sport === '') {
    alert('Шкода, що ти не захотів ввести улюблений вид спорту');
}

const ageMessage = (yearOfBirth !== null && yearOfBirth !== '') 
    ? `Твій вік: ${2023 - +yearOfBirth} роки(ів)` 
    : 'Шкода, що ти не захотів ввести свій рік народження';

let cityMessage = '';
switch(city){
    case 'Київ':
        cityMessage = 'Ти живеш у столиці України';
        break;
    case 'Вашингтон':
        cityMessage = 'Ти живеш у столиці Сполучених Штатів Америки';
        break;
    case 'Лондон':
        cityMessage = 'Ти живеш у столиці Великобританії';
        break;
    case '':
        cityMessage = 'Шкода, що ти не захотів ввести назву міста, в якому ти живеш';
        break;
    case null:
        cityMessage = 'Шкода, що ти не захотів ввести назву міста, в якому ти живеш';
        break;
    default:
        cityMessage = `Ти живеш у місті ${city}`;
    }

let sportMessage = '';
switch(sport){
    case 'футбол':
        sportMessage = 'Круто! Хочеш стати Ліонелем Мессі?';
        break;
    case 'баскетбол':
        sportMessage = 'Круто! Хочеш стати Майклом Джорданом?';
        break;
    case 'бокс':
        sportMessage = 'Круто! Хочеш стати Майком Тайсоном?';
        break;
    case '':
        sportMessage = 'Шкода, що ти не захотів ввести улюблений вид спорту';
        break;
    case null:
        sportMessage = 'Шкода, що ти не захотів ввести улюблений вид спорту';
        break;
    default:
        sportMessage = `Твій улюблений вид спорту: ${sport}`;
    }
        
const nextRow ='\r';    
alert (ageMessage + nextRow + cityMessage + nextRow + sportMessage);