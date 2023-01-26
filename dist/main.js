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

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car{\n    constructor(id,make,model,year){\n        this.id=id;\n        this.make=make;\n        this.model=model;\n        this.year=year;\n\n    }\n\n}\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n\n\n//selection statements\n\nconst submitForm=document.getElementById(\"submitForm\");\nconst makeInput = document.querySelector(\"#makeInput\");\nconst modelInput = document.querySelector(\"#modelInput\");\nconst yearInput = document.querySelector(\"#yearInput\");\nconst carMake = document.querySelector(\"#car-make\");\nconst carModel = document.querySelector(\"#car-model\");\nconst carYear = document.querySelector(\"#car-year\");\nconst removeBtn = document.querySelector(\".removeBtn\");\nconst wishlistUl = document.querySelector(\"#wishListContainer > ul\");\n\n// Ex6\nfunction showCarDetails(car){\n    carMake.textContent = car.make;\n    carModel.textContent=car.model;\n    carYear.textContent=car.year;\n    removeBtn.disabled=false;\n    removeBtn.setAttribute(\"data-carId\", car.id);\n    removeBtn.addEventListener(\"click\", removeCar);\n\n}\n\n//Ex7\nfunction updateDOMList(){\n    wishlistUl.innerHTML=\"\";\n    myWishList.list.forEach((car)=>{\n        const newLi=document.createElement(\"li\");\n        newLi.textContent=`${car.make} ${car.model}`;\n        newLi.addEventListener(\"click\", ()=>{\n            showCarDetails(car);\n        });\n        wishlistUl.appendChild(newLi);\n    })\n}\n\n\n//Ex8\n\nfunction addCar(event){\n    event.preventDefault();\n    myWishList.add(makeInput.value, modelInput.value, yearInput.value);\n    updateDOMList();\n}\n\n//Ex 9\nfunction removeCar(){\n    const carId = Number(removeBtn.getAttribute(\"data-carId\"));\n    myWishList.remove(carId);\n    updateDOMList();\n    carMake.textContent=\"\";\n    carModel.textContent=\"\";\n    carYear.textContent=\"\";\n    removeBtn.disabled=true;\n}\n\n\n\n\n\n//construction\nconst myWishList = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nsubmitForm.addEventListener(\"submit\", addCar);\n\n\n\n\nmyWishList.add(\"Ford\", \"Mustang\", 2020);\nmyWishList.add(\"Chevy\", \"Cavalier\", 1999);\nmyWishList.add(\"Ford\", \"Mustang\", 2020);\nmyWishList.add(\"Chevy\", \"Cavalier\", 1999);\n\nconsole.log(JSON.parse(JSON.stringify(myWishList)));\n\nmyWishList.remove(2);\n\nupdateDOMList();\n\nconsole.log(myWishList);\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wishlist)\n/* harmony export */ });\n/* harmony import */ var _car_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car.js */ \"./src/car.js\");\n\nclass Wishlist {\n\n    constructor(){\n        this.list=[];\n        this.nextId=0;\n    }\n    add(make,model,year){\n        const nextCar = new _car_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](++this.nextId,make,model,year);\n        this.list.push(nextCar);\n    }\n    remove(carId){\n        this.list = this.list.filter((element,index,array)=>{\n            if (element.id == carId){\n                return false;\n            }return true;\n        });\n    }\n}\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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