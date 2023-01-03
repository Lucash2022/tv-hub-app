/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktv_hub"] = self["webpackChunktv_hub"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function searchShow(query) {\r\n  const url = `https://api.tvmaze.com/search/shows?q=${query}`;\r\n  fetch(url)\r\n  .then(response => response.json())\r\n  .then((jsonData) => {\r\n    console.log(jsonData)\r\n    const results = jsonData.map(element => element.show.name);\r\n    renderResults(results);\r\n    document.getElementById(\"errorMessage\").innerHTML = \"\";\r\n  })\r\n  .catch((error) => {\r\n    document.getElementById(\"errorMessage\").innerHTML = error;\r\n    renderResults([]);\r\n  });\r\n}\r\n\r\nfunction renderResults(results) {\r\n  const list = document.getElementById(\"resultsList\");\r\n  list.innerHTML = \"\";\r\n  results.map(result => {\r\n    const element = document.createElement(\"li\");\r\n    element.innerText = result;\r\n    list.appendChild(element);\r\n  });\r\n}\r\nlet searchTimeoutToken = 0;\r\nwindow.onload = () => {\r\n  const searchFieldElement = document.getElementById(\"searchField\");\r\n  searchFieldElement.onkeyup = (event) => {\r\n    clearTimeout(searchTimeoutToken);\r\n    if(searchFieldElement.value.trim().length === 0) {\r\n      return;\r\n    }\r\n    searchTimeoutToken = setTimeout(() => {\r\n      searchShow(searchFieldElement.value);\r\n    }, 250);\r\n    \r\n  }\r\n}\n\n//# sourceURL=webpack://tv-hub/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);