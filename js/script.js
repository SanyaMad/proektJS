'use strict';

let title = prompt('Как называется ваш проект?', 'проект');
let screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
let screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let rollback = Math.round(Math.random() * 50);
let service1 = prompt('Какой дополнительный тип услуги нужен?', 'метрика');
let servicePrice1 = +prompt('Сколько это будет стоить?', '500');
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'адаптация');
let servicePrice2 = +prompt('Сколько это будет стоить?', '500');
let fullPrice;
let servicePercentPrice;
let allServicePrices;
let argument = prompt('Введите аргумент?', 'аргумент');


const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
    if (price >= 30000){
        return 'Даем скидку в 10%'
    }
    else if (price >= 15000 && fullPrice < 30000){
        return 'Даем скидку 5%'
    }
    else if (price < 15000 && fullPrice > 0){
       return 'Скидка не предусмотрена' 
    }
    else {
        return 'Что то пошло не так'
    }
}

const getAllServicePrices = function(servicePrice1, servicePrice2) {
    return servicePrice1 + servicePrice2
}
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices
  }
fullPrice = getFullPrice(screenPrice, allServicePrices);

const getTitle = function() {
    let titleNew = title.split('')[0].toUpperCase()
    let title2 = title.slice(1);
    title = titleNew + title2
    console.log(title);
    return title
}

const getServicePercentPrices = function(fullPrice, rollback) {
    return fullPrice - rollback
}
servicePercentPrice = Math.ceil(getServicePercentPrices(fullPrice, rollback));


console.log (fullPrice);
console.log (allServicePrices);
console.log (getTitle());
console.log ('Стоимость разработки сайта' + " " + fullPrice + " " + 'рублей');
console.log ('adaptive'+ " " + adaptive);
console.log ('Стоимость верстки экранов' + " " + screenPrice + " " + 'рублей');
console.log ('rollback'+ " " + rollback);
console.log (screens.length);
console.log (screens.toLowerCase().split(', '));
console.log ('Процент отката посреднику за работу ' + " " + Math.round((fullPrice * (rollback/100))));
console.log (service1 + " " + servicePrice1);
console.log (service2 + " " + servicePrice2);
console.log ('Итоговая стоимость работы' + " " + fullPrice);
console.log (servicePercentPrice);
console.log(getRollbackMessage(fullPrice));



showTypeOf(title)
showTypeOf(fullPrice)
showTypeOf(adaptive)
showTypeOf(screenPrice)
showTypeOf(rollback)

console.log (typeof title);
console.log (typeof fullPrice);
console.log (typeof adaptive);
console.log (typeof screenPrice);
console.log (typeof rollback);

/*
const functionName = function(argument) {
     if (argument != string){
         return 'В качестве аргумента передана не строка'
     }
     else if (argument == string){
         argument.trim()
     }
}
*/
