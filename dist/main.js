/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_formValidate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/formValidate */ \"./src/modules/formValidate.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_priceForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/priceForm */ \"./src/modules/priceForm.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_send__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/send */ \"./src/modules/send.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('30 april 2022')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_formValidate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_priceForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])() \r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(100)\r\n;(0,_modules_send__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\n\n//# sourceURL=webpack://prooektjs2/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) =>{\r\n    const calcBlock = document.querySelector('.calc-block')\r\n    const calcType = document.querySelector('.calc-type')\r\n    const calcSquare = document.querySelector('.calc-square')\r\n    const calcCount = document.querySelector('.calc-count')\r\n    const calcDay = document.querySelector('.calc-day')\r\n    const total = document.getElementById('total')\r\n\r\n\r\n    const countCalc = () =>{\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value\r\n        const calcSquareValue = calcSquare.value\r\n\r\n        let totalValue = 0\r\n        let calcCountValue = 1\r\n        let calcDayValue = 1\r\n\r\n        if(calcCount.value > 1){\r\n            calcCountValue += +calcCount.value / 10\r\n        }\r\n\r\n        if(calcDay.value && calcDay.value < 5) {\r\n            calcDayValue = 2\r\n        }else if(calcDay.value && calcDay.value < 10){\r\n            calcDayValue = 1.5\r\n        }\r\n\r\n        if(calcType.value && calcSquare.value){\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue *calcDayValue\r\n        } else{\r\n            totalValue = 0\r\n        }\r\n        total.textContent = totalValue\r\n    }\r\n\r\n    calcBlock.addEventListener('input', (e) =>{\r\n        if (e.target === calcType || e.target === calcSquare || \r\n            e.target === calcCount || e.target === calcDay){\r\n                countCalc()\r\n            }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://prooektjs2/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/formValidate.js":
/*!*************************************!*\
  !*** ./src/modules/formValidate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formValidate = () => {\r\n    const form = document.querySelector('.main-form')\r\n    const inputEmail = form.querySelector('.form-email')\r\n    const inputPhone = form.querySelector('.form-phone')\r\n    const inputName = form.querySelector('.form-name')\r\n    const form2 = document.querySelector('.footer-form')\r\n    const inputName2 = form2.querySelector('#form2-name')\r\n    const inputEmail2 = form2.querySelector('#form2-email')\r\n    const inputPhone2 = form2.querySelector('#form2-phone')\r\n\r\n    form.addEventListener('submit', (e) =>{\r\n        e.preventDefault()\r\n        let error = false\r\n        if(/[^а-яА-Я\\-\\s]/g.test(inputName.value)){\r\n            alert('имя введено неверно')\r\n        }\r\n        if(!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(inputEmail.value)) {\r\n            alert('email введен неверно')\r\n        }\r\n        if(!/^\\s*(?:\\+?(\\d{1,3}))?([-. (]*(\\d{3})[-. )]*)?((\\d{3})[-. ]*(\\d{2,4})(?:[-.x ]*(\\d+))?)\\s*$/g.test(inputPhone.value)){\r\n            alert('телефон введен неверно')\r\n        }\r\n        else if(!error){\r\n            alert ('Данные отправлены')\r\n        }\r\n    })\r\n\r\n    form2.addEventListener('submit', (e) =>{\r\n        e.preventDefault()\r\n        let error = false\r\n        if(/[^а-яА-Я\\-\\s]/g.test(inputName2.value)){\r\n            alert('имя введено неверно')\r\n        }\r\n        if(!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(inputEmail2.value)) {\r\n            alert('email введен неверно')\r\n        }\r\n        if(!/^\\s*(?:\\+?(\\d{1,3}))?([-. (]*(\\d{3})[-. )]*)?((\\d{3})[-. ]*(\\d{2,4})(?:[-.x ]*(\\d+))?)\\s*$/g.test(inputPhone2.value)){\r\n            alert('телефон введен неверно')\r\n        }\r\n        else if(!error){\r\n            alert ('Данные отправлены')\r\n        }\r\n    })\r\n} \r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValidate);\r\n\r\n\n\n//# sourceURL=webpack://prooektjs2/./src/modules/formValidate.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu')\r\n    const menu = document.querySelector('menu')\r\n    const closeBtn = menu.querySelector('.close-btn')\r\n    const menuItems = menu.querySelectorAll('ul>li>a')\r\n    // const scrollBtn \r\n\r\nconst handleMenu = () =>{\r\n    menu.classList.toggle('active-menu')\r\n}\r\n    menuBtn.addEventListener('click', handleMenu)\r\n    closeBtn.addEventListener('click', handleMenu) \r\n    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://prooektjs2/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () =>{\r\n    const modal = document.querySelector('.popup')\r\n    const modalContent = document.querySelector('.popup-content')\r\n    const buttons = document.querySelectorAll('.popup-btn')\r\n   \r\n \r\n    let intervalID\r\n    let count = -100\r\n\r\n    modal.style.display = 'none'\r\n    modalContent.style.transform = `translateX(${count}%)`\r\n\r\n    const counter = () => {\r\n        count += 1\r\n        console.log(count);\r\n    }\r\n\r\n    const modalOpen = () => {\r\n        counter()\r\n        modalContent.style.transform = `translateX(${count}%)`\r\n        if (count >= 0) {\r\n            clearInterval(intervalID)\r\n        }\r\n    }\r\n    \r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () =>{\r\n            if (innerWidth <= 768){\r\n                modal.style.display = 'block'\r\n                modalContent.style.transform = `translateX(-15%)`\r\n                modalContent.style.display = 'block'\r\n            }else{\r\n            modal.style.display = 'block'\r\n            intervalID = setInterval(() => {\r\n                modalOpen()\r\n            }, 5);\r\n            }    \r\n        })\r\n    })\r\n\r\n    modal.addEventListener('click', (e)=>{\r\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')){\r\n            modal.style.display = 'none'\r\n            modalContent.style.transform = 'translateX(-100%)'\r\n            count = -100\r\n        }\r\n    })\r\n}\r\n \r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://prooektjs2/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/priceForm.js":
/*!**********************************!*\
  !*** ./src/modules/priceForm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst priceFrom = () =>{\r\n    const calcSquare = document.querySelector('.calc-square')\r\n    const calcCount = document.querySelector('.calc-count')\r\n    const calcDay = document.querySelector('.calc-day')\r\n\r\n    const numberEnable = (e) => {\r\n        e.target.value = e.target.value.replace(/\\D+/, \"\")  \r\n    }\r\n    calcSquare.addEventListener('input', numberEnable)\r\n    calcCount.addEventListener('input', numberEnable)\r\n    calcDay.addEventListener('input', numberEnable)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (priceFrom);\n\n//# sourceURL=webpack://prooektjs2/./src/modules/priceForm.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n    const downBtn = document.querySelector('[href=\"#service-block\"]')\r\n    const serviceBlock = document.getElementById('service-block')\r\n\r\n    downBtn.addEventListener('click', (e) =>{\r\n        e.preventDefault()\r\n        serviceBlock.scrollIntoView({block: \"start\", behavior: \"smooth\"});\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://prooektjs2/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/send.js":
/*!*****************************!*\
  !*** ./src/modules/send.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendingForm = () => {\r\n    const form = document.querySelector('#form1')\r\n    const formName = document.querySelector('#form1-name')\r\n    const formEmail = document.querySelector('#form1-email')\r\n    const formTel = document.querySelector('#form1-phone')\r\n\r\n    const sendData = (url, data) => {\r\n        return fetch(url, {\r\n            method: 'POST',\r\n            body: data,\r\n            headers: {\r\n                'Content-type': 'application/json; charset=UTF-8',\r\n            },\r\n        }).then(response => response.json())\r\n    }\r\n    const sendform = (e) => {\r\n        e.preventDefault()\r\n\r\n       const user = {\r\n           name: formName.value,\r\n           email: formEmail.value,\r\n           tel: formTel.value,\r\n       }\r\n       sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(user))\r\n            .then(data => {\r\n                console.log(data);\r\n            })\r\n\r\n    }\r\n    const getData = () => {\r\n        fetch('https://jsonplaceholder.typicode.com/posts')\r\n            .then((response) => response.json())\r\n            .then((data) => console.log(data));\r\n    }\r\n\r\n    getData()\r\n    form.addEventListener('submit', sendform)\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendingForm);\n\n//# sourceURL=webpack://prooektjs2/./src/modules/send.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    const sliderBlock = document.querySelector('.portfolio-content')\r\n    const slides = document.querySelectorAll('.portfolio-item')\r\n    const dots = document.querySelectorAll('.dot')\r\n    const timeInterval = 2000\r\n    let currentSlide = 0\r\n    let interval\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass)\r\n    }\r\n    const nextSlide = (elems, index, strClass) =>{\r\n        elems[index].classList.add(strClass)\r\n    }\r\n\r\n    const autoSlide = () =>{\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n        prevSlide(dots, currentSlide, 'dot-active')\r\n        currentSlide++\r\n\r\n        if (currentSlide >= slides.length){\r\n            currentSlide = 0\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n        nextSlide(dots, currentSlide, 'dot-active')\r\n    }\r\n\r\n    const startSlide = (timer = 1500) =>{\r\n        interval = setInterval(autoSlide, timer)\r\n    }\r\n\r\n    const stopSlide = () =>{\r\n        clearInterval(interval)\r\n    }\r\n\r\n    sliderBlock.addEventListener('click', (e) =>{\r\n        e.preventDefault()\r\n\r\n        if (!e.target.matches('.dot, .portfolio-btn')){\r\n            return\r\n        }\r\n\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n        prevSlide(dots, currentSlide, 'dot-active')\r\n\r\n        if(e.target.matches('#arrow-right')){\r\n            currentSlide++\r\n        }else if(e.target.matches('#arrow-left')){\r\n            currentSlide--\r\n        }else if (e.target.classList.contains('dot')){\r\n            dots.forEach((dot, index)=>{\r\n                if(e.target === dot){\r\n                    currentSlide = index\r\n                }\r\n            })\r\n        }\r\n\r\n        if (currentSlide >= slides.length){\r\n            currentSlide = 0\r\n        }\r\n        if (currentSlide < 0){\r\n            currentSlide = slides.length - 1\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n        nextSlide(dots, currentSlide, 'dot-active')\r\n    })\r\n\r\n    sliderBlock.addEventListener('mouseenter', (e)=>{\r\n        if (e.target.matches('.dot, .portfolio-btn')){\r\n            stopSlide()\r\n        }\r\n    }, true)\r\n    sliderBlock.addEventListener('mouseleave', (e) =>{\r\n        if (e.target.matches('.dot, .portfolio-btn')){\r\n            startSlide(timeInterval)\r\n        }\r\n    }, true)\r\n    startSlide(timeInterval)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://prooektjs2/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector('.service-header')\r\n    const tabs = document.querySelectorAll('.service-header-tab')\r\n    const tabContent = document.querySelectorAll('.service-tab')\r\n\r\n    tabPanel.addEventListener('click', (e) =>{\r\n        if(e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab')\r\n            tabs.forEach((tab, index) =>{\r\n                if (tab === tabBtn){\r\n                    tab.classList.add('active')\r\n                    tabContent[index].classList.remove('d-none')\r\n                } else{\r\n                    tab.classList.remove('active')\r\n                    tabContent[index].classList.add('d-none')\r\n                }\r\n            })\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://prooektjs2/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours')\r\n    const timerMinutes = document.getElementById('timer-minutes')\r\n    const timerSeconds = document.getElementById('timer-seconds')\r\n    let intervalId\r\n\r\n    const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime()\r\n    let dateNow = new Date().getTime()\r\n    let timeRemaining = (dateStop - dateNow)/1000\r\n    // let days = Math.floor(timeRemaining / 60 / 60 /24)\r\n    let hours = Math.floor((timeRemaining / 60 / 60) % 24)\r\n    let minutes = Math.floor((timeRemaining / 60) % 60)\r\n    let seconds = Math.floor(timeRemaining % 60)\r\n\r\n        return{ timeRemaining, hours, minutes, seconds }\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining()\r\n        if (getTime.hours < 10){\r\n            timerHours.textContent = '0' + getTime.hours\r\n        } else timerHours.textContent = getTime.hours\r\n        if (getTime.minutes < 10){\r\n            timerMinutes.textContent = '0' + getTime.minutes\r\n        } else timerMinutes.textContent = getTime.minutes\r\n        if (getTime.seconds < 10){\r\n            timerSeconds.textContent = '0' + getTime.seconds\r\n        } else timerSeconds.textContent = getTime.seconds\r\n\r\n        if (getTime.timeRemaining < 0){\r\n            timerHours.textContent = '00'\r\n            timerMinutes.textContent = '00'\r\n            timerSeconds.textContent = '00'\r\n            clearInterval(intervalId)\r\n        }\r\n    }\r\n    intervalId = setInterval(updateClock, 500)\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://prooektjs2/./src/modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;