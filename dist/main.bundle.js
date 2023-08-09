/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --scarlet: #ff220c;
    --space-cadet: #1c1f33;
    --maize: #FFF689;
    --aquamarine: #00FFCD;
    --header-height: 3rem;
    --font-archivo: 'Archivo Black', sans-serif;
    --font-noto: 'Noto Sans Mono', monospace;
    --font-tilt: 'Tilt Warp', cursive;
    --h2-font-size: 4rem;
    --h3-font-size: 2rem;
}

/*
  1. Use a more-intuitive box-sizing model.
*/
*,
*::before,
*::after {
    box-sizing: border-box;
}

/*
  2. Remove default margin
*/
* {
    margin: 0;
}

/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/

body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    height: fit-content;
    width: 100%;

}

/*
  5. Improve media defaults
*/
img,
picture,
video,
canvas,
svg {
    display: block;
    max-width: 100%;
}

/*
  6. Remove built-in form typography styles
*/
input,
button,
textarea,
select {
    font: inherit;
}

/*
  7. Avoid text overflows
*/
p,
h1,
h2,
h3,
h4,
h5,
h6 {
    overflow-wrap: break-word;
}

/*
  8. Create a root stacking context
*/
#root,
#__next {
    isolation: isolate;
}

.content {
    display: grid;
    grid-template-rows: repeat(5, auto);
}

header {
    grid-row: 1;
    width: 100vw;
    height: var(--header-height);
    background-color: var(--scarlet);
}

main {
    grid-row: 2;

    height: 100%;
    width: 100%;
    background-color: var(--scarlet);

}

.test-container {
    display: grid;
    grid-template-rows: auto auto auto;
    height: fit-content;
    width: fit-content;
    margin: auto;
}

.hello {
    font-size: 2vw;
    font-family: var(--font-tilt);
    height: fit-content;
    padding-left: 2.8vw;
}

.my-name {
    display: flex;
    flex-direction: column;
    line-height: 5vw;

    text-align: center;
    font-family: var(--font-archivo);
    font-size: 8vw;

    -webkit-text-stroke: 2px black;


    color: var(--scarlet);
    transition: .3s ease-in-out;
    cursor: default;
}

.my-name:hover {
    color: black;
}

.fullstack {
    text-align: end;
    font-size: 2vw;
    font-family: var(--font-noto);
    /* color: #f0eff4; */

}

.sidebar {
    z-index: 5;
    position: fixed;
    height: 100vh;
    display: flex;
    align-items: center;
    margin-top: -3rem;
}

.about-me {
    grid-row: 3;

    top: 100vh;
    height: 100vh;
    width: 100vw;
    background-color: var(--scarlet);

    display: flex;
    justify-content: center;
    align-items: start;
    padding-top: 6rem;

}

.about-me>.container {
    min-width: 30rem;
    max-width: 60rem;
    height: 100%;
}

[class \$="title"] {
    font-family: var(--font-archivo);
}

h2 {
    font-size: var(--h2-font-size);

}

h3 {
    font-size: var(--h3-font-size);
}

p {
    font-family: var(--font-noto);
}

.projects {
    display: flex;
    justify-content: center;
    grid-row: 4;
    background-color: var(--scarlet);

}

.projects>.container {
    display: grid;
    grid-template-rows: auto 1fr;
    width: 80%;

}

.projects-title {
    text-align: center;
}

.cards-wrapper {
    display: grid;
    gap: 1rem;

    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-auto-flow: row;
    padding-top: 1rem;

}


[class^="card-"] {
    border: 2px solid black;
    height: min-content;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.5fr 1fr;

}

.thumbnail {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
}

.project-info {
    background-color: black;
    display: grid;
    padding: .5rem;
    grid-row: auto 1fr auto;

}

.project-name {
    color: var(--maize);
}

.summary {
    color: var(--aquamarine);
}

.links {
    display: flex;
    justify-content: end;
    color: var(--aquamarine);
    gap: 10px;

}

.links>p {
    cursor: pointer;
}

.contact {
    grid-row: 5;
    background-color: var(--scarlet);
    height: 40rem;
    width: 100%;
}

nav {
    display: flex;
    flex-direction: column;
    margin-left: -8px;
}

.selection {
    cursor: pointer;
    left: 1rem;
    height: 1.5rem;
    width: 100px;
    transform-style: preserve-3d;
    transform: rotateY(0) rotateX(0);
    transition: .3s ease-in-out;
}

.selection:hover {
    transform: rotateY(8deg) rotateX(8deg);
}

.selection:active {
    transition: 0s none;
    transform: rotateY(6deg) rotateX(6deg);
}



.side {
    position: absolute;
    width: 100%;
}

.front {
    height: 100%;
    text-align: center;
    font-family: 'Archivo Black', sans-serif;
    border: 1px solid black;
    transform: translateZ(50px);
    background-color: var(--scarlet);

}

.left {
    height: 100%;
    transform: translateX(-50%) rotateY(90deg);
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    background-color: var(--scarlet);
}


.bottom {
    height: 400%;
    transform: translateY(-25.5%) rotateX(90deg);
    border-right: 1px solid black;
}

ul {
    padding: 8px;
}

li {
    list-style-type: none;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap');\n\n:root {\n    --scarlet: #ff220c;\n    --space-cadet: #1c1f33;\n    --maize: #FFF689;\n    --aquamarine: #00FFCD;\n    --header-height: 3rem;\n    --font-archivo: 'Archivo Black', sans-serif;\n    --font-noto: 'Noto Sans Mono', monospace;\n    --font-tilt: 'Tilt Warp', cursive;\n    --h2-font-size: 4rem;\n    --h3-font-size: 2rem;\n}\n\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n/*\n  2. Remove default margin\n*/\n* {\n    margin: 0;\n}\n\n/*\n  Typographic tweaks!\n  3. Add accessible line-height\n  4. Improve text rendering\n*/\n\nbody {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    height: fit-content;\n    width: 100%;\n\n}\n\n/*\n  5. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n    display: block;\n    max-width: 100%;\n}\n\n/*\n  6. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\n/*\n  7. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    overflow-wrap: break-word;\n}\n\n/*\n  8. Create a root stacking context\n*/\n#root,\n#__next {\n    isolation: isolate;\n}\n\n.content {\n    display: grid;\n    grid-template-rows: repeat(5, auto);\n}\n\nheader {\n    grid-row: 1;\n    width: 100vw;\n    height: var(--header-height);\n    background-color: var(--scarlet);\n}\n\nmain {\n    grid-row: 2;\n\n    height: 100%;\n    width: 100%;\n    background-color: var(--scarlet);\n\n}\n\n.test-container {\n    display: grid;\n    grid-template-rows: auto auto auto;\n    height: fit-content;\n    width: fit-content;\n    margin: auto;\n}\n\n.hello {\n    font-size: 2vw;\n    font-family: var(--font-tilt);\n    height: fit-content;\n    padding-left: 2.8vw;\n}\n\n.my-name {\n    display: flex;\n    flex-direction: column;\n    line-height: 5vw;\n\n    text-align: center;\n    font-family: var(--font-archivo);\n    font-size: 8vw;\n\n    -webkit-text-stroke: 2px black;\n\n\n    color: var(--scarlet);\n    transition: .3s ease-in-out;\n    cursor: default;\n}\n\n.my-name:hover {\n    color: black;\n}\n\n.fullstack {\n    text-align: end;\n    font-size: 2vw;\n    font-family: var(--font-noto);\n    /* color: #f0eff4; */\n\n}\n\n.sidebar {\n    z-index: 5;\n    position: fixed;\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    margin-top: -3rem;\n}\n\n.about-me {\n    grid-row: 3;\n\n    top: 100vh;\n    height: 100vh;\n    width: 100vw;\n    background-color: var(--scarlet);\n\n    display: flex;\n    justify-content: center;\n    align-items: start;\n    padding-top: 6rem;\n\n}\n\n.about-me>.container {\n    min-width: 30rem;\n    max-width: 60rem;\n    height: 100%;\n}\n\n[class $=\"title\"] {\n    font-family: var(--font-archivo);\n}\n\nh2 {\n    font-size: var(--h2-font-size);\n\n}\n\nh3 {\n    font-size: var(--h3-font-size);\n}\n\np {\n    font-family: var(--font-noto);\n}\n\n.projects {\n    display: flex;\n    justify-content: center;\n    grid-row: 4;\n    background-color: var(--scarlet);\n\n}\n\n.projects>.container {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    width: 80%;\n\n}\n\n.projects-title {\n    text-align: center;\n}\n\n.cards-wrapper {\n    display: grid;\n    gap: 1rem;\n\n    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n    grid-auto-flow: row;\n    padding-top: 1rem;\n\n}\n\n\n[class^=\"card-\"] {\n    border: 2px solid black;\n    height: min-content;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1.5fr 1fr;\n\n}\n\n.thumbnail {\n    height: 100%;\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.project-info {\n    background-color: black;\n    display: grid;\n    padding: .5rem;\n    grid-row: auto 1fr auto;\n\n}\n\n.project-name {\n    color: var(--maize);\n}\n\n.summary {\n    color: var(--aquamarine);\n}\n\n.links {\n    display: flex;\n    justify-content: end;\n    color: var(--aquamarine);\n    gap: 10px;\n\n}\n\n.links>p {\n    cursor: pointer;\n}\n\n.contact {\n    grid-row: 5;\n    background-color: var(--scarlet);\n    height: 40rem;\n    width: 100%;\n}\n\nnav {\n    display: flex;\n    flex-direction: column;\n    margin-left: -8px;\n}\n\n.selection {\n    cursor: pointer;\n    left: 1rem;\n    height: 1.5rem;\n    width: 100px;\n    transform-style: preserve-3d;\n    transform: rotateY(0) rotateX(0);\n    transition: .3s ease-in-out;\n}\n\n.selection:hover {\n    transform: rotateY(8deg) rotateX(8deg);\n}\n\n.selection:active {\n    transition: 0s none;\n    transform: rotateY(6deg) rotateX(6deg);\n}\n\n\n\n.side {\n    position: absolute;\n    width: 100%;\n}\n\n.front {\n    height: 100%;\n    text-align: center;\n    font-family: 'Archivo Black', sans-serif;\n    border: 1px solid black;\n    transform: translateZ(50px);\n    background-color: var(--scarlet);\n\n}\n\n.left {\n    height: 100%;\n    transform: translateX(-50%) rotateY(90deg);\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    background-color: var(--scarlet);\n}\n\n\n.bottom {\n    height: 400%;\n    transform: translateY(-25.5%) rotateX(90deg);\n    border-right: 1px solid black;\n}\n\nul {\n    padding: 8px;\n}\n\nli {\n    list-style-type: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwySEFBMkg7QUFDM0gsNEhBQTRIO0FBQzVILHVIQUF1SDtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7O0FBRXZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxLQUFLLE9BQU8sWUFBWSxPQUFPLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sTUFBTSxLQUFLLFNBQVMsVUFBVSxVQUFVLE9BQU8sTUFBTSxLQUFLLFFBQVEsVUFBVSxPQUFPLE1BQU0sS0FBSyxXQUFXLFlBQVksT0FBTyxNQUFNLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLFlBQVksY0FBYyxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLGFBQWEsY0FBYyxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUss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Q0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7O0FDQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFyY2hpdm8rQmxhY2smZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK01vbm8mZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGlsdCtXYXJwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tc2NhcmxldDogI2ZmMjIwYztcbiAgICAtLXNwYWNlLWNhZGV0OiAjMWMxZjMzO1xuICAgIC0tbWFpemU6ICNGRkY2ODk7XG4gICAgLS1hcXVhbWFyaW5lOiAjMDBGRkNEO1xuICAgIC0taGVhZGVyLWhlaWdodDogM3JlbTtcbiAgICAtLWZvbnQtYXJjaGl2bzogJ0FyY2hpdm8gQmxhY2snLCBzYW5zLXNlcmlmO1xuICAgIC0tZm9udC1ub3RvOiAnTm90byBTYW5zIE1vbm8nLCBtb25vc3BhY2U7XG4gICAgLS1mb250LXRpbHQ6ICdUaWx0IFdhcnAnLCBjdXJzaXZlO1xuICAgIC0taDItZm9udC1zaXplOiA0cmVtO1xuICAgIC0taDMtZm9udC1zaXplOiAycmVtO1xufVxuXG4vKlxuICAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsLlxuKi9cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLypcbiAgMi4gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luXG4qL1xuKiB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4vKlxuICBUeXBvZ3JhcGhpYyB0d2Vha3MhXG4gIDMuIEFkZCBhY2Nlc3NpYmxlIGxpbmUtaGVpZ2h0XG4gIDQuIEltcHJvdmUgdGV4dCByZW5kZXJpbmdcbiovXG5cbmJvZHkge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuXG4vKlxuICA1LiBJbXByb3ZlIG1lZGlhIGRlZmF1bHRzXG4qL1xuaW1nLFxucGljdHVyZSxcbnZpZGVvLFxuY2FudmFzLFxuc3ZnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi8qXG4gIDYuIFJlbW92ZSBidWlsdC1pbiBmb3JtIHR5cG9ncmFwaHkgc3R5bGVzXG4qL1xuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gICAgZm9udDogaW5oZXJpdDtcbn1cblxuLypcbiAgNy4gQXZvaWQgdGV4dCBvdmVyZmxvd3NcbiovXG5wLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuXG4vKlxuICA4LiBDcmVhdGUgYSByb290IHN0YWNraW5nIGNvbnRleHRcbiovXG4jcm9vdCxcbiNfX25leHQge1xuICAgIGlzb2xhdGlvbjogaXNvbGF0ZTtcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgYXV0byk7XG59XG5cbmhlYWRlciB7XG4gICAgZ3JpZC1yb3c6IDE7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NhcmxldCk7XG59XG5cbm1haW4ge1xuICAgIGdyaWQtcm93OiAyO1xuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjYXJsZXQpO1xuXG59XG5cbi50ZXN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmhlbGxvIHtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aWx0KTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHBhZGRpbmctbGVmdDogMi44dnc7XG59XG5cbi5teS1uYW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbGluZS1oZWlnaHQ6IDV2dztcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1hcmNoaXZvKTtcbiAgICBmb250LXNpemU6IDh2dztcblxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCBibGFjaztcblxuXG4gICAgY29sb3I6IHZhcigtLXNjYXJsZXQpO1xuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5teS1uYW1lOmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5mdWxsc3RhY2sge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1ub3RvKTtcbiAgICAvKiBjb2xvcjogI2YwZWZmNDsgKi9cblxufVxuXG4uc2lkZWJhciB7XG4gICAgei1pbmRleDogNTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLTNyZW07XG59XG5cbi5hYm91dC1tZSB7XG4gICAgZ3JpZC1yb3c6IDM7XG5cbiAgICB0b3A6IDEwMHZoO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjYXJsZXQpO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgcGFkZGluZy10b3A6IDZyZW07XG5cbn1cblxuLmFib3V0LW1lPi5jb250YWluZXIge1xuICAgIG1pbi13aWR0aDogMzByZW07XG4gICAgbWF4LXdpZHRoOiA2MHJlbTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbltjbGFzcyBcXCQ9XCJ0aXRsZVwiXSB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtYXJjaGl2byk7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IHZhcigtLWgyLWZvbnQtc2l6ZSk7XG5cbn1cblxuaDMge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taDMtZm9udC1zaXplKTtcbn1cblxucCB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbm90byk7XG59XG5cbi5wcm9qZWN0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLXJvdzogNDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY2FybGV0KTtcblxufVxuXG4ucHJvamVjdHM+LmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICAgIHdpZHRoOiA4MCU7XG5cbn1cblxuLnByb2plY3RzLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkcy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMXJlbTtcblxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuXG59XG5cblxuW2NsYXNzXj1cImNhcmQtXCJdIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVmciAxZnI7XG5cbn1cblxuLnRodW1ibmFpbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLnByb2plY3QtaW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBncmlkLXJvdzogYXV0byAxZnIgYXV0bztcblxufVxuXG4ucHJvamVjdC1uYW1lIHtcbiAgICBjb2xvcjogdmFyKC0tbWFpemUpO1xufVxuXG4uc3VtbWFyeSB7XG4gICAgY29sb3I6IHZhcigtLWFxdWFtYXJpbmUpO1xufVxuXG4ubGlua3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgY29sb3I6IHZhcigtLWFxdWFtYXJpbmUpO1xuICAgIGdhcDogMTBweDtcblxufVxuXG4ubGlua3M+cCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGFjdCB7XG4gICAgZ3JpZC1yb3c6IDU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NhcmxldCk7XG4gICAgaGVpZ2h0OiA0MHJlbTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XG59XG5cbi5zZWxlY3Rpb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsZWZ0OiAxcmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKSByb3RhdGVYKDApO1xuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnNlbGVjdGlvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDhkZWcpIHJvdGF0ZVgoOGRlZyk7XG59XG5cbi5zZWxlY3Rpb246YWN0aXZlIHtcbiAgICB0cmFuc2l0aW9uOiAwcyBub25lO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg2ZGVnKSByb3RhdGVYKDZkZWcpO1xufVxuXG5cblxuLnNpZGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZyb250IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnQXJjaGl2byBCbGFjaycsIHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDUwcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjYXJsZXQpO1xuXG59XG5cbi5sZWZ0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZVkoOTBkZWcpO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NhcmxldCk7XG59XG5cblxuLmJvdHRvbSB7XG4gICAgaGVpZ2h0OiA0MDAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjUuNSUpIHJvdGF0ZVgoOTBkZWcpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG51bCB7XG4gICAgcGFkZGluZzogOHB4O1xufVxuXG5saSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsMkNBQTJDO0lBQzNDLHdDQUF3QztJQUN4QyxpQ0FBaUM7SUFDakMsb0JB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QUFVO0lBQ1YsY0FBYztJQUNkLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixzQ0FBc0M7QUFDMUM7Ozs7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUN4Qyx1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLGdDQUFnQzs7QUFFcEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMENBQTBDO0lBQzFDLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0FBQ3BDOzs7QUFHQTtJQUNJLFlBQVk7SUFDWiw0Q0FBNEM7SUFDNUMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BcmNoaXZvK0JsYWNrJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytNb25vJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRpbHQrV2FycCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tc2NhcmxldDogI2ZmMjIwYztcXG4gICAgLS1zcGFjZS1jYWRldDogIzFjMWYzMztcXG4gICAgLS1tYWl6ZTogI0ZGRjY4OTtcXG4gICAgLS1hcXVhbWFyaW5lOiAjMDBGRkNEO1xcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDNyZW07XFxuICAgIC0tZm9udC1hcmNoaXZvOiAnQXJjaGl2byBCbGFjaycsIHNhbnMtc2VyaWY7XFxuICAgIC0tZm9udC1ub3RvOiAnTm90byBTYW5zIE1vbm8nLCBtb25vc3BhY2U7XFxuICAgIC0tZm9udC10aWx0OiAnVGlsdCBXYXJwJywgY3Vyc2l2ZTtcXG4gICAgLS1oMi1mb250LXNpemU6IDRyZW07XFxuICAgIC0taDMtZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4vKlxcbiAgMS4gVXNlIGEgbW9yZS1pbnR1aXRpdmUgYm94LXNpemluZyBtb2RlbC5cXG4qL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLypcXG4gIDIuIFJlbW92ZSBkZWZhdWx0IG1hcmdpblxcbiovXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLypcXG4gIFR5cG9ncmFwaGljIHR3ZWFrcyFcXG4gIDMuIEFkZCBhY2Nlc3NpYmxlIGxpbmUtaGVpZ2h0XFxuICA0LiBJbXByb3ZlIHRleHQgcmVuZGVyaW5nXFxuKi9cXG5cXG5ib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbn1cXG5cXG4vKlxcbiAgNS4gSW1wcm92ZSBtZWRpYSBkZWZhdWx0c1xcbiovXFxuaW1nLFxcbnBpY3R1cmUsXFxudmlkZW8sXFxuY2FudmFzLFxcbnN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qXFxuICA2LiBSZW1vdmUgYnVpbHQtaW4gZm9ybSB0eXBvZ3JhcGh5IHN0eWxlc1xcbiovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuICA3LiBBdm9pZCB0ZXh0IG92ZXJmbG93c1xcbiovXFxucCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi8qXFxuICA4LiBDcmVhdGUgYSByb290IHN0YWNraW5nIGNvbnRleHRcXG4qL1xcbiNyb290LFxcbiNfX25leHQge1xcbiAgICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgYXV0byk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjYXJsZXQpO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjYXJsZXQpO1xcblxcbn1cXG5cXG4udGVzdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmhlbGxvIHtcXG4gICAgZm9udC1zaXplOiAydnc7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpbHQpO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIuOHZ3O1xcbn1cXG5cXG4ubXktbmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGxpbmUtaGVpZ2h0OiA1dnc7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtYXJjaGl2byk7XFxuICAgIGZvbnQtc2l6ZTogOHZ3O1xcblxcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggYmxhY2s7XFxuXFxuXFxuICAgIGNvbG9yOiB2YXIoLS1zY2FybGV0KTtcXG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5teS1uYW1lOmhvdmVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZnVsbHN0YWNrIHtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBmb250LXNpemU6IDJ2dztcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbm90byk7XFxuICAgIC8qIGNvbG9yOiAjZjBlZmY0OyAqL1xcblxcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIHotaW5kZXg6IDU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogLTNyZW07XFxufVxcblxcbi5hYm91dC1tZSB7XFxuICAgIGdyaWQtcm93OiAzO1xcblxcbiAgICB0b3A6IDEwMHZoO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjYXJsZXQpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBwYWRkaW5nLXRvcDogNnJlbTtcXG5cXG59XFxuXFxuLmFib3V0LW1lPi5jb250YWluZXIge1xcbiAgICBtaW4td2lkdGg6IDMwcmVtO1xcbiAgICBtYXgtd2lkdGg6IDYwcmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbltjbGFzcyAkPVxcXCJ0aXRsZVxcXCJdIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtYXJjaGl2byk7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1oMi1mb250LXNpemUpO1xcblxcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taDMtZm9udC1zaXplKTtcXG59XFxuXFxucCB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5vdG8pO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjYXJsZXQpO1xcblxcbn1cXG5cXG4ucHJvamVjdHM+LmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIHdpZHRoOiA4MCU7XFxuXFxufVxcblxcbi5wcm9qZWN0cy10aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmRzLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuXFxufVxcblxcblxcbltjbGFzc149XFxcImNhcmQtXFxcIl0ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMS41ZnIgMWZyO1xcblxcbn1cXG5cXG4udGh1bWJuYWlsIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLnByb2plY3QtaW5mbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgZ3JpZC1yb3c6IGF1dG8gMWZyIGF1dG87XFxuXFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpemUpO1xcbn1cXG5cXG4uc3VtbWFyeSB7XFxuICAgIGNvbG9yOiB2YXIoLS1hcXVhbWFyaW5lKTtcXG59XFxuXFxuLmxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGNvbG9yOiB2YXIoLS1hcXVhbWFyaW5lKTtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbn1cXG5cXG4ubGlua3M+cCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRhY3Qge1xcbiAgICBncmlkLXJvdzogNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NhcmxldCk7XFxuICAgIGhlaWdodDogNDByZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogLThweDtcXG59XFxuXFxuLnNlbGVjdGlvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbGVmdDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDApIHJvdGF0ZVgoMCk7XFxuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnNlbGVjdGlvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSg4ZGVnKSByb3RhdGVYKDhkZWcpO1xcbn1cXG5cXG4uc2VsZWN0aW9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zaXRpb246IDBzIG5vbmU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSg2ZGVnKSByb3RhdGVYKDZkZWcpO1xcbn1cXG5cXG5cXG5cXG4uc2lkZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mcm9udCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0FyY2hpdm8gQmxhY2snLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDUwcHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY2FybGV0KTtcXG5cXG59XFxuXFxuLmxlZnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGVZKDkwZGVnKTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjYXJsZXQpO1xcbn1cXG5cXG5cXG4uYm90dG9tIHtcXG4gICAgaGVpZ2h0OiA0MDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1LjUlKSByb3RhdGVYKDkwZGVnKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbnVsIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=