'use strict';

const appData = {
    title: '', 
    screens: [], 
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    services: {},
    start: function() {
        appData.asking()
        appData.addPrices()
        appData.getFullPrice()
        appData.getServicePercentPrices()
        appData.getTitle()
        appData.logger()
    },
    isNumber: function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },  
    asking: function() {
        appData.title = prompt('Как называется ваш проект?', 'проект')

        for (let i = 0; i < 2; i++) {
            let name = prompt('Какие типы экранов нужно разработать?')
            let price = 0

            do {
                price = prompt('Сколько будет стоить данная работа?')
            } while(!appData.isNumber(price))

            appData.screens.push({ id: i, name: name, price: price })            

        }

        for (let i = 0; i < 2; i++) {
            let name = prompt('Какой дополнительный тип услуги нужен?', 'метрика');
            let price = 0
    
            do {
                price = +prompt("Сколько это будет стоить?")
            } while (!appData.isNumber(price))
            
            appData.services[name] = +price
        }
    
        appData.adaptive = confirm('Нужен ли адаптив на сайте?')
    },
    addPrices: function() {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }

        for(let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
    },
    getRollbackMessage: function (price) {
        if (price >= 30000){
            return 'Даем скидку в 10%'
        }
        else if (price >= 15000 && appData.fullPrice < 30000){
            return 'Даем скидку 5%'
        }
        else if (price < 15000 && appData.fullPrice > 0){
           return 'Скидка не предусмотрена' 
        }
        else {
            return 'Что то пошло не так'
        }
    },
    getFullPrice: function() {
        appData.fullPrice = +appData.screenPrice + +appData.allServicePrices
    },
    getTitle: function() {
      let titleNew = appData.title.split('')[0].toUpperCase()
      let title2 = appData.title.slice(1);
      appData.title = titleNew + title2
      appData.title = appData.title
    },
    getServicePercentPrices: function() {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    logger: function() {
        console.log (appData.fullPrice);
        console.log (appData.servicePercentPrice);
        console.log (appData.screens);
    }

}
appData.start()

// console.log (fullPrice);
// console.log (allServicePrices);
// console.log (getTitle());
// console.log ('Стоимость разработки сайта' + " " + fullPrice + " " + 'рублей');
// console.log ('adaptive'+ " " + adaptive);
// console.log ('Стоимость верстки экранов' + " " + screenPrice + " " + 'рублей');
// console.log ('rollback'+ " " + rollback);
// console.log (screens.length);
// console.log (screens.toLowerCase().split(', '));
// console.log ('Процент отката посреднику за работу ' + " " + Math.round((fullPrice * (rollback/100))));
// console.log ('Итоговая стоимость работы' + " " + fullPrice);
// console.log (servicePercentPrice);
// console.log(getRollbackMessage(fullPrice));



// console.log (typeof title);
// console.log (typeof fullPrice);
// console.log (typeof adaptive);
// console.log (typeof screenPrice);
// console.log (typeof rollback);


