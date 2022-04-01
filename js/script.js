'use strict';


const title = document.getElementsByTagName('h1')[0]
const buttonsPlus = document.querySelector('.screen-btn')
const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]
const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')
const inputRange = document.querySelector('.rollback input')
const inputRangeValue = document.querySelector('.rollback .range-value')
const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollBack = document.getElementsByClassName('total-input')[4]
let screens = document.querySelectorAll('.screen')


const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function() {
        appData.addTitle()
        startBtn.addEventListener('click', appData.buttonBlock)
        buttonsPlus.addEventListener('click', appData.addScreenBlock)
    },
    addTitle() {
        document.title = title.textContent
    },
    start: function() {
        appData.addScreens()
        appData.addServices()
        appData.addPrices()
        // appData.getServicePercentPrices()
        appData.loggerLine()
        appData.showResult()
    },
    showResult: function () {
        total.value = appData.screenPrice
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
        fullTotalCount.value = appData.fullPrice
    },
    addScreens: function() {
        appData.screens.length = 0
        screens = document.querySelectorAll('.screen')
        screens.forEach(function(screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            })
        })
        console.log(appData.screens)
    },
    addServices: function() {
        otherItemsPercent.forEach(function(item){
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if(check.checked){
                appData.servicesPercent[label.textContent] = +input.value
            }
        })

        otherItemsNumber.forEach(function(item){
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if(check.checked){
                appData.servicesNumber[label.textContent] = +input.value
            }
        })
    },
    addScreenBlock: function(){
        const cloneScreen = screens[0].cloneNode(true)
        screens[screens.length - 1].after(cloneScreen)
    },
    addPrices: function() {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }

        for(let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key]
        }

        for(let key in appData.servicesPercent) {
            appData.servicePricesPercent += (appData.screenPrice * (appData.servicesPercent[key] / 100))
        }
        
        appData.fullPrice = +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber
    },
    buttonBlock: () => {
        let input
        let select
        screens = document.querySelectorAll('.screen')
        screens.forEach(screen => {
            input = screen.querySelector('input')
            select = screen.querySelector('select')
        })
        if (select.selectedIndex == 0 || input.value == 0 || input.value == '') {
            appData.init()
        } else {
            appData.start()
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
    getServicePercentPrices: function() {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    logger: function() {
        console.log (appData.fullPrice);
        console.log (appData.servicePercentPrice);
        console.log (appData.screens);
    },
}

appData.init()

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


