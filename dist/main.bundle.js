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

html {
    scroll-behavior: smooth;
    background-color: var(--scarlet);
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
    overflow-x: hidden;

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

a {
    text-decoration: none;
    color: black;
}

.content {
    display: grid;
    grid-template-rows: repeat(5, auto);
}

header {
    position: fixed;
    grid-row: 1;
    width: 100vw;
    height: var(--header-height);
    background-color: var(--scarlet);
}

.header-name {
    font-family: var(--font-archivo);
    font-size: 3rem;
    line-height: 3rem;
}

.hidden {
    visibility: hidden;
}

main {
    grid-row: 2;

    height: 100%;
    width: 100%;
    background-color: var(--scarlet);
    margin-top: var(--header-height);

}

.main-container {
    display: grid;
    grid-template-rows: auto auto auto;
    height: fit-content;
    width: fit-content;
    margin: auto;
}

#hello-wrapper,
#my-name-wrapper {
    height: max-content;
    width: max-content;
    z-index: 2;
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
    transition: 200ms ease-in-out;
    cursor: default;
}

.my-name:hover {
    color: black;
}

.relocated {
    font-family: var(--font-archivo);
    font-size: 3rem;
    line-height: 3rem;
    position: absolute;
    left: 0;
    top: 0;
}

.flatten {
    transform: animation;
    animation: flatten 1s linear 1 forwards;
}

@keyframes flatten {
    from {
        transform: rotateX(0deg);

    }
    
    to {
        transform: rotateX(90deg);

    }
}

#hello-wrapper{
    transform-origin: bottom;

}


#fullstack-wrapper {
    display: flex;
    justify-content: end;

    transform-origin: top;
}

.fullstack {
    font-size: 2vw;
    font-family: var(--font-noto);

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

    height: max-content;
    background-color: var(--scarlet);

    display: flex;
    justify-content: center;
    margin-top: 9rem;
}

.about-me>.container {
    min-width: 30rem;
    max-width: 60rem;
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
    margin-top: 5rem;

}

.projects>.container {
    display: grid;
    grid-template-rows: auto 1fr;
    width: 80%;
    place-content: center;

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

.project-info>.links {
    display: flex;
    justify-content: end;
    color: var(--aquamarine);
    gap: 10px;

}

.links>p {
    cursor: pointer;
}


.contact {
    padding-top: 10rem;
    grid-row: 5;
    height: max-content;
    background-color: var(--scarlet);
    display: flex;
    justify-content: center;
}

.contact-container {
    width: 960px;
    height: 20rem;

    display: grid;
    grid-template-rows: auto 1fr;

}


.contact-title {
    text-align: end;
}


.contact-container>.links {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 1rem;
}

.socials {
    display: flex;
    justify-content: flex-end;
    font-family: var(--font-noto);
    gap: 1rem;
    height: max-content;
}

#resume,
#github,
#linkedin {
    display: inline-block;
    color: black;

}

#resume::after,
#github::after,
#linkedin::after {
    content: '';
    display: block;
    border-bottom: 2px solid var(--space-cadet);
    transform: scaleX(0);
    transition: transform 100ms ease-in-out;


}

#resume:hover::after,
#github:hover::after,
#linkedin:hover::after {
    transform: scaleX(1);
}

.email-wrapper {
    display: flex;
    justify-content: end;
}

#email {
    text-decoration: none;
    color: var(--maize);
    font-family: var(--font-tilt);
    font-size: 3rem;
    transition: 200ms;
    width: max-content;
}

#email:hover {
    color: var(--space-cadet);
}

nav {
    display: flex;
    flex-direction: column;
    margin-left: -8px;
    margin-top: var(--header-height);
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
}

@media (max-width: 1200px) {
    .about-me>.container {
        padding-left: 10%;
        padding-right: 10%;
    }

    .contact-container {
        padding-left: 10%;
        padding-right: 10%;
        width: 100%;
    }

}

@media (max-width: 700px) {
    .contact-title {
        text-align: center;
        line-height: 3rem;
    }

    #email {
        font-size: 2rem;
        margin-top: 2rem;

    }

    .email-wrapper {
        display: flex;
        justify-content: center;
    }

    .socials {
        justify-content: center;
    }


}


@media (max-width: 600px) {
    .about-me>.container {
        width: 80%;
    }


}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap');\n\n:root {\n    --scarlet: #ff220c;\n    --space-cadet: #1c1f33;\n    --maize: #FFF689;\n    --aquamarine: #00FFCD;\n    --header-height: 3rem;\n    --font-archivo: 'Archivo Black', sans-serif;\n    --font-noto: 'Noto Sans Mono', monospace;\n    --font-tilt: 'Tilt Warp', cursive;\n    --h2-font-size: 4rem;\n    --h3-font-size: 2rem;\n}\n\nhtml {\n    scroll-behavior: smooth;\n    background-color: var(--scarlet);\n}\n\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n/*\n  2. Remove default margin\n*/\n* {\n    margin: 0;\n}\n\n/*\n  Typographic tweaks!\n  3. Add accessible line-height\n  4. Improve text rendering\n*/\n\nbody {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    height: fit-content;\n    width: 100%;\n    overflow-x: hidden;\n\n}\n\n/*\n  5. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n    display: block;\n    max-width: 100%;\n}\n\n/*\n  6. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\n/*\n  7. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    overflow-wrap: break-word;\n}\n\n/*\n  8. Create a root stacking context\n*/\n#root,\n#__next {\n    isolation: isolate;\n}\n\na {\n    text-decoration: none;\n    color: black;\n}\n\n.content {\n    display: grid;\n    grid-template-rows: repeat(5, auto);\n}\n\nheader {\n    position: fixed;\n    grid-row: 1;\n    width: 100vw;\n    height: var(--header-height);\n    background-color: var(--scarlet);\n}\n\n.header-name {\n    font-family: var(--font-archivo);\n    font-size: 3rem;\n    line-height: 3rem;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\nmain {\n    grid-row: 2;\n\n    height: 100%;\n    width: 100%;\n    background-color: var(--scarlet);\n    margin-top: var(--header-height);\n\n}\n\n.main-container {\n    display: grid;\n    grid-template-rows: auto auto auto;\n    height: fit-content;\n    width: fit-content;\n    margin: auto;\n}\n\n#hello-wrapper,\n#my-name-wrapper {\n    height: max-content;\n    width: max-content;\n    z-index: 2;\n}\n\n\n.hello {\n    font-size: 2vw;\n    font-family: var(--font-tilt);\n    height: fit-content;\n    padding-left: 2.8vw;\n}\n\n\n\n.my-name {\n    display: flex;\n    flex-direction: column;\n    line-height: 5vw;\n\n    text-align: center;\n    font-family: var(--font-archivo);\n    font-size: 8vw;\n\n    -webkit-text-stroke: 2px black;\n\n\n    color: var(--scarlet);\n    transition: 200ms ease-in-out;\n    cursor: default;\n}\n\n.my-name:hover {\n    color: black;\n}\n\n.relocated {\n    font-family: var(--font-archivo);\n    font-size: 3rem;\n    line-height: 3rem;\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.flatten {\n    transform: animation;\n    animation: flatten 1s linear 1 forwards;\n}\n\n@keyframes flatten {\n    from {\n        transform: rotateX(0deg);\n\n    }\n    \n    to {\n        transform: rotateX(90deg);\n\n    }\n}\n\n#hello-wrapper{\n    transform-origin: bottom;\n\n}\n\n\n#fullstack-wrapper {\n    display: flex;\n    justify-content: end;\n\n    transform-origin: top;\n}\n\n.fullstack {\n    font-size: 2vw;\n    font-family: var(--font-noto);\n\n}\n\n.sidebar {\n    z-index: 5;\n    position: fixed;\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    margin-top: -3rem;\n}\n\n.about-me {\n    grid-row: 3;\n\n    height: max-content;\n    background-color: var(--scarlet);\n\n    display: flex;\n    justify-content: center;\n    margin-top: 9rem;\n}\n\n.about-me>.container {\n    min-width: 30rem;\n    max-width: 60rem;\n}\n\n[class $=\"title\"] {\n    font-family: var(--font-archivo);\n}\n\nh2 {\n    font-size: var(--h2-font-size);\n\n}\n\nh3 {\n    font-size: var(--h3-font-size);\n}\n\np {\n    font-family: var(--font-noto);\n}\n\n.projects {\n    display: flex;\n    justify-content: center;\n    grid-row: 4;\n    background-color: var(--scarlet);\n    margin-top: 5rem;\n\n}\n\n.projects>.container {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    width: 80%;\n    place-content: center;\n\n}\n\n.projects-title {\n    text-align: center;\n}\n\n.cards-wrapper {\n\n    display: grid;\n    gap: 1rem;\n\n    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n    grid-auto-flow: row;\n    padding-top: 1rem;\n\n}\n\n\n[class^=\"card-\"] {\n    border: 2px solid black;\n    height: min-content;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1.5fr 1fr;\n\n}\n\n.thumbnail {\n    height: 100%;\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.project-info {\n    background-color: black;\n    display: grid;\n    padding: .5rem;\n    grid-row: auto 1fr auto;\n\n}\n\n.project-name {\n    color: var(--maize);\n}\n\n.summary {\n    color: var(--aquamarine);\n}\n\n.project-info>.links {\n    display: flex;\n    justify-content: end;\n    color: var(--aquamarine);\n    gap: 10px;\n\n}\n\n.links>p {\n    cursor: pointer;\n}\n\n\n.contact {\n    padding-top: 10rem;\n    grid-row: 5;\n    height: max-content;\n    background-color: var(--scarlet);\n    display: flex;\n    justify-content: center;\n}\n\n.contact-container {\n    width: 960px;\n    height: 20rem;\n\n    display: grid;\n    grid-template-rows: auto 1fr;\n\n}\n\n\n.contact-title {\n    text-align: end;\n}\n\n\n.contact-container>.links {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 1rem;\n}\n\n.socials {\n    display: flex;\n    justify-content: flex-end;\n    font-family: var(--font-noto);\n    gap: 1rem;\n    height: max-content;\n}\n\n#resume,\n#github,\n#linkedin {\n    display: inline-block;\n    color: black;\n\n}\n\n#resume::after,\n#github::after,\n#linkedin::after {\n    content: '';\n    display: block;\n    border-bottom: 2px solid var(--space-cadet);\n    transform: scaleX(0);\n    transition: transform 100ms ease-in-out;\n\n\n}\n\n#resume:hover::after,\n#github:hover::after,\n#linkedin:hover::after {\n    transform: scaleX(1);\n}\n\n.email-wrapper {\n    display: flex;\n    justify-content: end;\n}\n\n#email {\n    text-decoration: none;\n    color: var(--maize);\n    font-family: var(--font-tilt);\n    font-size: 3rem;\n    transition: 200ms;\n    width: max-content;\n}\n\n#email:hover {\n    color: var(--space-cadet);\n}\n\nnav {\n    display: flex;\n    flex-direction: column;\n    margin-left: -8px;\n    margin-top: var(--header-height);\n}\n\n.selection {\n    cursor: pointer;\n    left: 1rem;\n    height: 1.5rem;\n    width: 100px;\n    transform-style: preserve-3d;\n    transform: rotateY(0) rotateX(0);\n    transition: .3s ease-in-out;\n}\n\n.selection:hover {\n    transform: rotateY(8deg) rotateX(8deg);\n}\n\n.selection:active {\n    transition: 0s none;\n    transform: rotateY(6deg) rotateX(6deg);\n}\n\n\n\n.side {\n    position: absolute;\n    width: 100%;\n}\n\n.front {\n    height: 100%;\n    text-align: center;\n    font-family: 'Archivo Black', sans-serif;\n    border: 1px solid black;\n    transform: translateZ(50px);\n    background-color: var(--scarlet);\n\n}\n\n.left {\n    height: 100%;\n    transform: translateX(-50%) rotateY(90deg);\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    background-color: var(--scarlet);\n}\n\n\n.bottom {\n    height: 400%;\n    transform: translateY(-25.5%) rotateX(90deg);\n    border-right: 1px solid black;\n}\n\nul {\n    padding: 8px;\n}\n\nli {\n    list-style-type: none;\n}\n\n@media (max-width: 1200px) {\n    .about-me>.container {\n        padding-left: 10%;\n        padding-right: 10%;\n    }\n\n    .contact-container {\n        padding-left: 10%;\n        padding-right: 10%;\n        width: 100%;\n    }\n\n}\n\n@media (max-width: 700px) {\n    .contact-title {\n        text-align: center;\n        line-height: 3rem;\n    }\n\n    #email {\n        font-size: 2rem;\n        margin-top: 2rem;\n\n    }\n\n    .email-wrapper {\n        display: flex;\n        justify-content: center;\n    }\n\n    .socials {\n        justify-content: center;\n    }\n\n\n}\n\n\n@media (max-width: 600px) {\n    .about-me>.container {\n        width: 80%;\n    }\n\n\n}"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./src/relocate-name.js":
/*!******************************!*\
  !*** ./src/relocate-name.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   relocateName: () => (/* binding */ relocateName)
/* harmony export */ });
const relocateName = () => {
    const name = document.body.querySelector('#my-name-wrapper');

    name.addEventListener('click', () => {
        document.body.querySelector('.my-name').classList.toggle('relocated');
        // document.body.querySelector('.my-name').classList.toggle('hidden');
        document.body.querySelector('.hello').classList.toggle('hidden');
        document.body.querySelector('.fullstack').classList.toggle('hidden');
        // document.body.querySelector('.hello').classList.toggle('flatten');
        // document.body.querySelector('.fullstack').classList.toggle('flatten');
    })
}

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
/* harmony import */ var _relocate_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./relocate-name */ "./src/relocate-name.js");
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/style.css */ "./src/style.css");



(0,_relocate_name__WEBPACK_IMPORTED_MODULE_0__.relocateName)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwySEFBMkg7QUFDM0gsNEhBQTRIO0FBQzVILHVIQUF1SDtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sS0FBSyxPQUFPLFlBQVksT0FBTyxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxhQUFhLE9BQU8sTUFBTSxLQUFLLFNBQVMsVUFBVSxVQUFVLE9BQU8sTUFBTSxLQUFLLFFBQVEsVUFBVSxPQUFPLE1BQU0sS0FBSyxXQUFXLFlBQVksT0FBTyxNQUFNLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFNBQVMsS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsWUFBWSxjQUFjLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLGFBQWEsT0FBTyxLQUFLLGFBQWEsTUFBTSxNQUFNLEtBQUssYUFBYSxRQUFRLEtBQUssVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFlBQVksYUFBYSxjQUFjLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFVBQVUsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7O1VDWEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBOEM7QUFDdkI7O0FBRXZCLDREQUFZLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3JlbG9jYXRlLW5hbWUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QXJjaGl2bytCbGFjayZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrTW9ubyZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UaWx0K1dhcnAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1zY2FybGV0OiAjZmYyMjBjO1xuICAgIC0tc3BhY2UtY2FkZXQ6ICMxYzFmMzM7XG4gICAgLS1tYWl6ZTogI0ZGRjY4OTtcbiAgICAtLWFxdWFtYXJpbmU6ICMwMEZGQ0Q7XG4gICAgLS1oZWFkZXItaGVpZ2h0OiAzcmVtO1xuICAgIC0tZm9udC1hcmNoaXZvOiAnQXJjaGl2byBCbGFjaycsIHNhbnMtc2VyaWY7XG4gICAgLS1mb250LW5vdG86ICdOb3RvIFNhbnMgTW9ubycsIG1vbm9zcGFjZTtcbiAgICAtLWZvbnQtdGlsdDogJ1RpbHQgV2FycCcsIGN1cnNpdmU7XG4gICAgLS1oMi1mb250LXNpemU6IDRyZW07XG4gICAgLS1oMy1mb250LXNpemU6IDJyZW07XG59XG5cbmh0bWwge1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjYXJsZXQpO1xufVxuXG4vKlxuICAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsLlxuKi9cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLypcbiAgMi4gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luXG4qL1xuKiB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4vKlxuICBUeXBvZ3JhcGhpYyB0d2Vha3MhXG4gIDMuIEFkZCBhY2Nlc3NpYmxlIGxpbmUtaGVpZ2h0XG4gIDQuIEltcHJvdmUgdGV4dCByZW5kZXJpbmdcbiovXG5cbmJvZHkge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG5cbn1cblxuLypcbiAgNS4gSW1wcm92ZSBtZWRpYSBkZWZhdWx0c1xuKi9cbmltZyxcbnBpY3R1cmUsXG52aWRlbyxcbmNhbnZhcyxcbnN2ZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4vKlxuICA2LiBSZW1vdmUgYnVpbHQtaW4gZm9ybSB0eXBvZ3JhcGh5IHN0eWxlc1xuKi9cbmlucHV0LFxuYnV0dG9uLFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICAgIGZvbnQ6IGluaGVyaXQ7XG59XG5cbi8qXG4gIDcuIEF2b2lkIHRleHQgb3ZlcmZsb3dzXG4qL1xucCxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbn1cblxuLypcbiAgOC4gQ3JlYXRlIGEgcm9vdCBzdGFja2luZyBjb250ZXh0XG4qL1xuI3Jvb3QsXG4jX19uZXh0IHtcbiAgICBpc29sYXRpb246IGlzb2xhdGU7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIGF1dG8pO1xufVxuXG5oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBncmlkLXJvdzogMTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY2FybGV0KTtcbn1cblxuLmhlYWRlci1uYW1lIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1hcmNoaXZvKTtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG59XG5cbi5oaWRkZW4ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxubWFpbiB7XG4gICAgZ3JpZC1yb3c6IDI7XG5cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NhcmxldCk7XG4gICAgbWFyZ2luLXRvcDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG5cbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4jaGVsbG8td3JhcHBlcixcbiNteS1uYW1lLXdyYXBwZXIge1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIHotaW5kZXg6IDI7XG59XG5cblxuLmhlbGxvIHtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aWx0KTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHBhZGRpbmctbGVmdDogMi44dnc7XG59XG5cblxuXG4ubXktbmFtZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGxpbmUtaGVpZ2h0OiA1dnc7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtYXJjaGl2byk7XG4gICAgZm9udC1zaXplOiA4dnc7XG5cbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggYmxhY2s7XG5cblxuICAgIGNvbG9yOiB2YXIoLS1zY2FybGV0KTtcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5teS1uYW1lOmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5yZWxvY2F0ZWQge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWFyY2hpdm8pO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG59XG5cbi5mbGF0dGVuIHtcbiAgICB0cmFuc2Zvcm06IGFuaW1hdGlvbjtcbiAgICBhbmltYXRpb246IGZsYXR0ZW4gMXMgbGluZWFyIDEgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgZmxhdHRlbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcblxuICAgIH1cbiAgICBcbiAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XG5cbiAgICB9XG59XG5cbiNoZWxsby13cmFwcGVye1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcblxufVxuXG5cbiNmdWxsc3RhY2std3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcblxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbn1cblxuLmZ1bGxzdGFjayB7XG4gICAgZm9udC1zaXplOiAydnc7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbm90byk7XG5cbn1cblxuLnNpZGViYXIge1xuICAgIHotaW5kZXg6IDU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IC0zcmVtO1xufVxuXG4uYWJvdXQtbWUge1xuICAgIGdyaWQtcm93OiAzO1xuXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY2FybGV0KTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogOXJlbTtcbn1cblxuLmFib3V0LW1lPi5jb250YWluZXIge1xuICAgIG1pbi13aWR0aDogMzByZW07XG4gICAgbWF4LXdpZHRoOiA2MHJlbTtcbn1cblxuW2NsYXNzIFxcJD1cInRpdGxlXCJdIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1hcmNoaXZvKTtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taDItZm9udC1zaXplKTtcblxufVxuXG5oMyB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1oMy1mb250LXNpemUpO1xufVxuXG5wIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1ub3RvKTtcbn1cblxuLnByb2plY3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdyaWQtcm93OiA0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjYXJsZXQpO1xuICAgIG1hcmdpbi10b3A6IDVyZW07XG5cbn1cblxuLnByb2plY3RzPi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgICB3aWR0aDogODAlO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcblxufVxuXG4ucHJvamVjdHMtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmRzLXdyYXBwZXIge1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDFyZW07XG5cbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNTBweCwgMWZyKSk7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcblxufVxuXG5cbltjbGFzc149XCJjYXJkLVwiXSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMS41ZnIgMWZyO1xuXG59XG5cbi50aHVtYm5haWwge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5wcm9qZWN0LWluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgZ3JpZC1yb3c6IGF1dG8gMWZyIGF1dG87XG5cbn1cblxuLnByb2plY3QtbmFtZSB7XG4gICAgY29sb3I6IHZhcigtLW1haXplKTtcbn1cblxuLnN1bW1hcnkge1xuICAgIGNvbG9yOiB2YXIoLS1hcXVhbWFyaW5lKTtcbn1cblxuLnByb2plY3QtaW5mbz4ubGlua3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgY29sb3I6IHZhcigtLWFxdWFtYXJpbmUpO1xuICAgIGdhcDogMTBweDtcblxufVxuXG4ubGlua3M+cCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi5jb250YWN0IHtcbiAgICBwYWRkaW5nLXRvcDogMTByZW07XG4gICAgZ3JpZC1yb3c6IDU7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY2FybGV0KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFjdC1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NjBweDtcbiAgICBoZWlnaHQ6IDIwcmVtO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuXG59XG5cblxuLmNvbnRhY3QtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbn1cblxuXG4uY29udGFjdC1jb250YWluZXI+LmxpbmtzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uc29jaWFscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5vdG8pO1xuICAgIGdhcDogMXJlbTtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xufVxuXG4jcmVzdW1lLFxuI2dpdGh1YixcbiNsaW5rZWRpbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4jcmVzdW1lOjphZnRlcixcbiNnaXRodWI6OmFmdGVyLFxuI2xpbmtlZGluOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXNwYWNlLWNhZGV0KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XG5cblxufVxuXG4jcmVzdW1lOmhvdmVyOjphZnRlcixcbiNnaXRodWI6aG92ZXI6OmFmdGVyLFxuI2xpbmtlZGluOmhvdmVyOjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG59XG5cbi5lbWFpbC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4jZW1haWwge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tbWFpemUpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpbHQpO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbiNlbWFpbDpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLXNwYWNlLWNhZGV0KTtcbn1cblxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gICAgbWFyZ2luLXRvcDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG59XG5cbi5zZWxlY3Rpb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsZWZ0OiAxcmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKSByb3RhdGVYKDApO1xuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnNlbGVjdGlvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDhkZWcpIHJvdGF0ZVgoOGRlZyk7XG59XG5cbi5zZWxlY3Rpb246YWN0aXZlIHtcbiAgICB0cmFuc2l0aW9uOiAwcyBub25lO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg2ZGVnKSByb3RhdGVYKDZkZWcpO1xufVxuXG5cblxuLnNpZGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZyb250IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnQXJjaGl2byBCbGFjaycsIHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDUwcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjYXJsZXQpO1xuXG59XG5cbi5sZWZ0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZVkoOTBkZWcpO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NhcmxldCk7XG59XG5cblxuLmJvdHRvbSB7XG4gICAgaGVpZ2h0OiA0MDAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjUuNSUpIHJvdGF0ZVgoOTBkZWcpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG51bCB7XG4gICAgcGFkZGluZzogOHB4O1xufVxuXG5saSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLmFib3V0LW1lPi5jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTAlO1xuICAgIH1cblxuICAgIC5jb250YWN0LWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAuY29udGFjdC10aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgfVxuXG4gICAgI2VtYWlsIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuXG4gICAgfVxuXG4gICAgLmVtYWlsLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuc29jaWFscyB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuXG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmFib3V0LW1lPi5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cblxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQiwyQ0FBMkM7SUFDM0Msd0NBQXdDO0lBQ3hDLGlDQUFpQztJQUNqQyxvQkFBb0I7SUFDcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdDQUFnQztBQUNw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Q2YsVUFBVTtJQUNWLGNBQWM7SUFDZCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsc0NBQXNDO0FBQzFDOzs7O0FBSUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDBDQUEwQztJQUMxQywyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLGdDQUFnQztBQUNwQzs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osNENBQTRDO0lBQzVDLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLFdBQVc7SUFDZjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7O0lBRXBCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLHVCQUF1QjtJQUMzQjs7O0FBR0o7OztBQUdBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7OztBQUdKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFyY2hpdm8rQmxhY2smZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK01vbm8mZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGlsdCtXYXJwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS1zY2FybGV0OiAjZmYyMjBjO1xcbiAgICAtLXNwYWNlLWNhZGV0OiAjMWMxZjMzO1xcbiAgICAtLW1haXplOiAjRkZGNjg5O1xcbiAgICAtLWFxdWFtYXJpbmU6ICMwMEZGQ0Q7XFxuICAgIC0taGVhZGVyLWhlaWdodDogM3JlbTtcXG4gICAgLS1mb250LWFyY2hpdm86ICdBcmNoaXZvIEJsYWNrJywgc2Fucy1zZXJpZjtcXG4gICAgLS1mb250LW5vdG86ICdOb3RvIFNhbnMgTW9ubycsIG1vbm9zcGFjZTtcXG4gICAgLS1mb250LXRpbHQ6ICdUaWx0IFdhcnAnLCBjdXJzaXZlO1xcbiAgICAtLWgyLWZvbnQtc2l6ZTogNHJlbTtcXG4gICAgLS1oMy1mb250LXNpemU6IDJyZW07XFxufVxcblxcbmh0bWwge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NhcmxldCk7XFxufVxcblxcbi8qXFxuICAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsLlxcbiovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKlxcbiAgMi4gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luXFxuKi9cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKlxcbiAgVHlwb2dyYXBoaWMgdHdlYWtzIVxcbiAgMy4gQWRkIGFjY2Vzc2libGUgbGluZS1oZWlnaHRcXG4gIDQuIEltcHJvdmUgdGV4dCByZW5kZXJpbmdcXG4qL1xcblxcbmJvZHkge1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXG59XFxuXFxuLypcXG4gIDUuIEltcHJvdmUgbWVkaWEgZGVmYXVsdHNcXG4qL1xcbmltZyxcXG5waWN0dXJlLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5zdmcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKlxcbiAgNi4gUmVtb3ZlIGJ1aWx0LWluIGZvcm0gdHlwb2dyYXBoeSBzdHlsZXNcXG4qL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcbiAgNy4gQXZvaWQgdGV4dCBvdmVyZmxvd3NcXG4qL1xcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4vKlxcbiAgOC4gQ3JlYXRlIGEgcm9vdCBzdGFja2luZyBjb250ZXh0XFxuKi9cXG4jcm9vdCxcXG4jX19uZXh0IHtcXG4gICAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgYXV0byk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NhcmxldCk7XFxufVxcblxcbi5oZWFkZXItbmFtZSB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWFyY2hpdm8pO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjYXJsZXQpO1xcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG5cXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbiNoZWxsby13cmFwcGVyLFxcbiNteS1uYW1lLXdyYXBwZXIge1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcblxcbi5oZWxsbyB7XFxuICAgIGZvbnQtc2l6ZTogMnZ3O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aWx0KTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyLjh2dztcXG59XFxuXFxuXFxuXFxuLm15LW5hbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBsaW5lLWhlaWdodDogNXZ3O1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWFyY2hpdm8pO1xcbiAgICBmb250LXNpemU6IDh2dztcXG5cXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4IGJsYWNrO1xcblxcblxcbiAgICBjb2xvcjogdmFyKC0tc2NhcmxldCk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5teS1uYW1lOmhvdmVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucmVsb2NhdGVkIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtYXJjaGl2byk7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG4uZmxhdHRlbiB7XFxuICAgIHRyYW5zZm9ybTogYW5pbWF0aW9uO1xcbiAgICBhbmltYXRpb246IGZsYXR0ZW4gMXMgbGluZWFyIDEgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgZmxhdHRlbiB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xcblxcbiAgICB9XFxuICAgIFxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpO1xcblxcbiAgICB9XFxufVxcblxcbiNoZWxsby13cmFwcGVye1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxuXFxufVxcblxcblxcbiNmdWxsc3RhY2std3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcblxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxufVxcblxcbi5mdWxsc3RhY2sge1xcbiAgICBmb250LXNpemU6IDJ2dztcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbm90byk7XFxuXFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgei1pbmRleDogNTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtM3JlbTtcXG59XFxuXFxuLmFib3V0LW1lIHtcXG4gICAgZ3JpZC1yb3c6IDM7XFxuXFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjYXJsZXQpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogOXJlbTtcXG59XFxuXFxuLmFib3V0LW1lPi5jb250YWluZXIge1xcbiAgICBtaW4td2lkdGg6IDMwcmVtO1xcbiAgICBtYXgtd2lkdGg6IDYwcmVtO1xcbn1cXG5cXG5bY2xhc3MgJD1cXFwidGl0bGVcXFwiXSB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWFyY2hpdm8pO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taDItZm9udC1zaXplKTtcXG5cXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IHZhcigtLWgzLWZvbnQtc2l6ZSk7XFxufVxcblxcbnAge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1ub3RvKTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiA0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY2FybGV0KTtcXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcXG5cXG59XFxuXFxuLnByb2plY3RzPi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcblxcbi5wcm9qZWN0cy10aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmRzLXdyYXBwZXIge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuXFxufVxcblxcblxcbltjbGFzc149XFxcImNhcmQtXFxcIl0ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMS41ZnIgMWZyO1xcblxcbn1cXG5cXG4udGh1bWJuYWlsIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLnByb2plY3QtaW5mbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgZ3JpZC1yb3c6IGF1dG8gMWZyIGF1dG87XFxuXFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpemUpO1xcbn1cXG5cXG4uc3VtbWFyeSB7XFxuICAgIGNvbG9yOiB2YXIoLS1hcXVhbWFyaW5lKTtcXG59XFxuXFxuLnByb2plY3QtaW5mbz4ubGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgY29sb3I6IHZhcigtLWFxdWFtYXJpbmUpO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxufVxcblxcbi5saW5rcz5wIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4uY29udGFjdCB7XFxuICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcXG4gICAgZ3JpZC1yb3c6IDU7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjYXJsZXQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDk2MHB4O1xcbiAgICBoZWlnaHQ6IDIwcmVtO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcblxcbn1cXG5cXG5cXG4uY29udGFjdC10aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuXFxuLmNvbnRhY3QtY29udGFpbmVyPi5saW5rcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnNvY2lhbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1ub3RvKTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbn1cXG5cXG4jcmVzdW1lLFxcbiNnaXRodWIsXFxuI2xpbmtlZGluIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuXFxufVxcblxcbiNyZXN1bWU6OmFmdGVyLFxcbiNnaXRodWI6OmFmdGVyLFxcbiNsaW5rZWRpbjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1zcGFjZS1jYWRldCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxuXFxuXFxufVxcblxcbiNyZXN1bWU6aG92ZXI6OmFmdGVyLFxcbiNnaXRodWI6aG92ZXI6OmFmdGVyLFxcbiNsaW5rZWRpbjpob3Zlcjo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG59XFxuXFxuLmVtYWlsLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuI2VtYWlsIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpemUpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aWx0KTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4jZW1haWw6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tc3BhY2UtY2FkZXQpO1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogLThweDtcXG4gICAgbWFyZ2luLXRvcDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxufVxcblxcbi5zZWxlY3Rpb24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGxlZnQ6IDFyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKSByb3RhdGVYKDApO1xcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zZWxlY3Rpb246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOGRlZykgcm90YXRlWCg4ZGVnKTtcXG59XFxuXFxuLnNlbGVjdGlvbjphY3RpdmUge1xcbiAgICB0cmFuc2l0aW9uOiAwcyBub25lO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoNmRlZykgcm90YXRlWCg2ZGVnKTtcXG59XFxuXFxuXFxuXFxuLnNpZGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZnJvbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdBcmNoaXZvIEJsYWNrJywgc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWig1MHB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NhcmxldCk7XFxuXFxufVxcblxcbi5sZWZ0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlWSg5MGRlZyk7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY2FybGV0KTtcXG59XFxuXFxuXFxuLmJvdHRvbSB7XFxuICAgIGhlaWdodDogNDAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNS41JSkgcm90YXRlWCg5MGRlZyk7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG51bCB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgLmFib3V0LW1lPi5jb250YWluZXIge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTAlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAgIC5jb250YWN0LXRpdGxlIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgICB9XFxuXFxuICAgICNlbWFpbCB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcblxcbiAgICB9XFxuXFxuICAgIC5lbWFpbC13cmFwcGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuc29jaWFscyB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcblxcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLmFib3V0LW1lPi5jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgfVxcblxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IHJlbG9jYXRlTmFtZSA9ICgpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcjbXktbmFtZS13cmFwcGVyJyk7XG5cbiAgICBuYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5teS1uYW1lJykuY2xhc3NMaXN0LnRvZ2dsZSgncmVsb2NhdGVkJyk7XG4gICAgICAgIC8vIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLm15LW5hbWUnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuaGVsbG8nKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuZnVsbHN0YWNrJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIC8vIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmhlbGxvJykuY2xhc3NMaXN0LnRvZ2dsZSgnZmxhdHRlbicpO1xuICAgICAgICAvLyBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5mdWxsc3RhY2snKS5jbGFzc0xpc3QudG9nZ2xlKCdmbGF0dGVuJyk7XG4gICAgfSlcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyByZWxvY2F0ZU5hbWUgfSBmcm9tIFwiLi9yZWxvY2F0ZS1uYW1lXCJcbmltcG9ydCBcIi9zcmMvc3R5bGUuY3NzXCJcblxucmVsb2NhdGVOYW1lKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9