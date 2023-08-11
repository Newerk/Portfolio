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
    transition: 200ms ease-in-out;
    cursor: default;
}

.my-name:hover {
    color: black;
}

.fullstack {
    text-align: end;
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
    margin-top: 6rem;
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


}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAIA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,gBAAgB;IAChB,qBAAqB;IACrB,qBAAqB;IACrB,2CAA2C;IAC3C,wCAAwC;IACxC,iCAAiC;IACjC,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,uBAAuB;IACvB,gCAAgC;AACpC;;AAEA;;CAEC;AACD;;;IAGI,sBAAsB;AAC1B;;AAEA;;CAEC;AACD;IACI,SAAS;AACb;;AAEA;;;;CAIC;;AAED;IACI,gBAAgB;IAChB,mCAAmC;IACnC,mBAAmB;IACnB,WAAW;IACX,kBAAkB;;AAEtB;;AAEA;;CAEC;AACD;;;;;IAKI,cAAc;IACd,eAAe;AACnB;;AAEA;;CAEC;AACD;;;;IAII,aAAa;AACjB;;AAEA;;CAEC;AACD;;;;;;;IAOI,yBAAyB;AAC7B;;AAEA;;CAEC;AACD;;IAEI,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,gCAAgC;AACpC;;AAEA;IACI,WAAW;;IAEX,YAAY;IACZ,WAAW;IACX,gCAAgC;;AAEpC;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,6BAA6B;IAC7B,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;;IAEhB,kBAAkB;IAClB,gCAAgC;IAChC,cAAc;;IAEd,8BAA8B;;;IAG9B,qBAAqB;IACrB,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,6BAA6B;;AAEjC;;AAEA;IACI,UAAU;IACV,eAAe;IACf,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,WAAW;;IAEX,mBAAmB;IACnB,gCAAgC;;IAEhC,aAAa;IACb,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,8BAA8B;;AAElC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,WAAW;IACX,gCAAgC;IAChC,gBAAgB;;AAEpB;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,UAAU;IACV,qBAAqB;;AAEzB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;IACb,SAAS;;IAET,4DAA4D;IAC5D,mBAAmB;IACnB,iBAAiB;;AAErB;;;AAGA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,0BAA0B;IAC1B,6BAA6B;;AAEjC;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,cAAc;IACd,uBAAuB;;AAE3B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,wBAAwB;IACxB,SAAS;;AAEb;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,kBAAkB;IAClB,WAAW;IACX,mBAAmB;IACnB,gCAAgC;IAChC,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,4BAA4B;;AAEhC;;;AAGA;IACI,eAAe;AACnB;;;AAGA;IACI,aAAa;IACb,4BAA4B;IAC5B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,6BAA6B;IAC7B,SAAS;IACT,mBAAmB;AACvB;;AAEA;;;IAGI,qBAAqB;IACrB,YAAY;;AAEhB;;AAEA;;;IAGI,WAAW;IACX,cAAc;IACd,2CAA2C;IAC3C,oBAAoB;IACpB,uCAAuC;;;AAG3C;;AAEA;;;IAGI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,6BAA6B;IAC7B,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,UAAU;IACV,cAAc;IACd,YAAY;IACZ,4BAA4B;IAC5B,gCAAgC;IAChC,2BAA2B;AAC/B;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,mBAAmB;IACnB,sCAAsC;AAC1C;;;;AAIA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,wCAAwC;IACxC,uBAAuB;IACvB,2BAA2B;IAC3B,gCAAgC;;AAEpC;;AAEA;IACI,YAAY;IACZ,0CAA0C;IAC1C,2BAA2B;IAC3B,8BAA8B;IAC9B,gCAAgC;AACpC;;;AAGA;IACI,YAAY;IACZ,4CAA4C;IAC5C,6BAA6B;AACjC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI;QACI,iBAAiB;QACjB,kBAAkB;IACtB;;IAEA;QACI,iBAAiB;QACjB,kBAAkB;QAClB,WAAW;IACf;;AAEJ;;AAEA;IACI;QACI,kBAAkB;QAClB,iBAAiB;QACjB;;IAEJ;QACI,eAAe;QACf,gBAAgB;;IAEpB;;IAEA;QACI,aAAa;QACb,uBAAuB;IAC3B;;IAEA;QACI,uBAAuB;IAC3B;;;AAGJ;;;AAGA;IACI;QACI,UAAU;IACd;;;AAGJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap');\n\n:root {\n    --scarlet: #ff220c;\n    --space-cadet: #1c1f33;\n    --maize: #FFF689;\n    --aquamarine: #00FFCD;\n    --header-height: 3rem;\n    --font-archivo: 'Archivo Black', sans-serif;\n    --font-noto: 'Noto Sans Mono', monospace;\n    --font-tilt: 'Tilt Warp', cursive;\n    --h2-font-size: 4rem;\n    --h3-font-size: 2rem;\n}\n\nhtml {\n    scroll-behavior: smooth;\n    background-color: var(--scarlet);\n}\n\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n/*\n  2. Remove default margin\n*/\n* {\n    margin: 0;\n}\n\n/*\n  Typographic tweaks!\n  3. Add accessible line-height\n  4. Improve text rendering\n*/\n\nbody {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    height: fit-content;\n    width: 100%;\n    overflow-x: hidden;\n\n}\n\n/*\n  5. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n    display: block;\n    max-width: 100%;\n}\n\n/*\n  6. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\n/*\n  7. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    overflow-wrap: break-word;\n}\n\n/*\n  8. Create a root stacking context\n*/\n#root,\n#__next {\n    isolation: isolate;\n}\n\na {\n    text-decoration: none;\n    color: black;\n}\n\n.content {\n    display: grid;\n    grid-template-rows: repeat(5, auto);\n}\n\nheader {\n    grid-row: 1;\n    width: 100vw;\n    height: var(--header-height);\n    background-color: var(--scarlet);\n}\n\nmain {\n    grid-row: 2;\n\n    height: 100%;\n    width: 100%;\n    background-color: var(--scarlet);\n\n}\n\n.test-container {\n    display: grid;\n    grid-template-rows: auto auto auto;\n    height: fit-content;\n    width: fit-content;\n    margin: auto;\n}\n\n.hello {\n    font-size: 2vw;\n    font-family: var(--font-tilt);\n    height: fit-content;\n    padding-left: 2.8vw;\n}\n\n.my-name {\n    display: flex;\n    flex-direction: column;\n    line-height: 5vw;\n\n    text-align: center;\n    font-family: var(--font-archivo);\n    font-size: 8vw;\n\n    -webkit-text-stroke: 2px black;\n\n\n    color: var(--scarlet);\n    transition: 200ms ease-in-out;\n    cursor: default;\n}\n\n.my-name:hover {\n    color: black;\n}\n\n.fullstack {\n    text-align: end;\n    font-size: 2vw;\n    font-family: var(--font-noto);\n\n}\n\n.sidebar {\n    z-index: 5;\n    position: fixed;\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    margin-top: -3rem;\n}\n\n.about-me {\n    grid-row: 3;\n\n    height: max-content;\n    background-color: var(--scarlet);\n\n    display: flex;\n    justify-content: center;\n    margin-top: 6rem;\n}\n\n.about-me>.container {\n    min-width: 30rem;\n    max-width: 60rem;\n}\n\n[class $=\"title\"] {\n    font-family: var(--font-archivo);\n}\n\nh2 {\n    font-size: var(--h2-font-size);\n\n}\n\nh3 {\n    font-size: var(--h3-font-size);\n}\n\np {\n    font-family: var(--font-noto);\n}\n\n.projects {\n    display: flex;\n    justify-content: center;\n    grid-row: 4;\n    background-color: var(--scarlet);\n    margin-top: 5rem;\n\n}\n\n.projects>.container {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    width: 80%;\n    place-content: center;\n\n}\n\n.projects-title {\n    text-align: center;\n}\n\n.cards-wrapper {\n\n    display: grid;\n    gap: 1rem;\n\n    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n    grid-auto-flow: row;\n    padding-top: 1rem;\n\n}\n\n\n[class^=\"card-\"] {\n    border: 2px solid black;\n    height: min-content;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1.5fr 1fr;\n\n}\n\n.thumbnail {\n    height: 100%;\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.project-info {\n    background-color: black;\n    display: grid;\n    padding: .5rem;\n    grid-row: auto 1fr auto;\n\n}\n\n.project-name {\n    color: var(--maize);\n}\n\n.summary {\n    color: var(--aquamarine);\n}\n\n.project-info>.links {\n    display: flex;\n    justify-content: end;\n    color: var(--aquamarine);\n    gap: 10px;\n\n}\n\n.links>p {\n    cursor: pointer;\n}\n\n\n.contact {\n    padding-top: 10rem;\n    grid-row: 5;\n    height: max-content;\n    background-color: var(--scarlet);\n    display: flex;\n    justify-content: center;\n}\n\n.contact-container {\n    width: 960px;\n    height: 20rem;\n\n    display: grid;\n    grid-template-rows: auto 1fr;\n\n}\n\n\n.contact-title {\n    text-align: end;\n}\n\n\n.contact-container>.links {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 1rem;\n}\n\n.socials {\n    display: flex;\n    justify-content: flex-end;\n    font-family: var(--font-noto);\n    gap: 1rem;\n    height: max-content;\n}\n\n#resume,\n#github,\n#linkedin {\n    display: inline-block;\n    color: black;\n\n}\n\n#resume::after,\n#github::after,\n#linkedin::after {\n    content: '';\n    display: block;\n    border-bottom: 2px solid var(--space-cadet);\n    transform: scaleX(0);\n    transition: transform 100ms ease-in-out;\n\n\n}\n\n#resume:hover::after,\n#github:hover::after,\n#linkedin:hover::after {\n    transform: scaleX(1);\n}\n\n.email-wrapper {\n    display: flex;\n    justify-content: end;\n}\n\n#email {\n    text-decoration: none;\n    color: var(--maize);\n    font-family: var(--font-tilt);\n    font-size: 3rem;\n    transition: 200ms;\n    width: max-content;\n}\n\n#email:hover {\n    color: var(--space-cadet);\n}\n\nnav {\n    display: flex;\n    flex-direction: column;\n    margin-left: -8px;\n    margin-top: var(--header-height);\n}\n\n.selection {\n    cursor: pointer;\n    left: 1rem;\n    height: 1.5rem;\n    width: 100px;\n    transform-style: preserve-3d;\n    transform: rotateY(0) rotateX(0);\n    transition: .3s ease-in-out;\n}\n\n.selection:hover {\n    transform: rotateY(8deg) rotateX(8deg);\n}\n\n.selection:active {\n    transition: 0s none;\n    transform: rotateY(6deg) rotateX(6deg);\n}\n\n\n\n.side {\n    position: absolute;\n    width: 100%;\n}\n\n.front {\n    height: 100%;\n    text-align: center;\n    font-family: 'Archivo Black', sans-serif;\n    border: 1px solid black;\n    transform: translateZ(50px);\n    background-color: var(--scarlet);\n\n}\n\n.left {\n    height: 100%;\n    transform: translateX(-50%) rotateY(90deg);\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    background-color: var(--scarlet);\n}\n\n\n.bottom {\n    height: 400%;\n    transform: translateY(-25.5%) rotateX(90deg);\n    border-right: 1px solid black;\n}\n\nul {\n    padding: 8px;\n}\n\nli {\n    list-style-type: none;\n}\n\n@media (max-width: 1200px) {\n    .about-me>.container {\n        padding-left: 10%;\n        padding-right: 10%;\n    }\n\n    .contact-container {\n        padding-left: 10%;\n        padding-right: 10%;\n        width: 100%;\n    }\n\n}\n\n@media (max-width: 700px) {\n    .contact-title {\n        text-align: center;\n        line-height: 3rem;\n        }\n\n    #email {\n        font-size: 2rem;\n        margin-top: 2rem;\n\n    }\n\n    .email-wrapper {\n        display: flex;\n        justify-content: center;\n    }\n\n    .socials {\n        justify-content: center;\n    }\n\n\n}\n\n\n@media (max-width: 600px) {\n    .about-me>.container {\n        width: 80%;\n    }\n\n\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwySEFBMkg7QUFDM0gsNEhBQTRIO0FBQzVILHVIQUF1SDtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLEtBQUssT0FBTyxZQUFZLE9BQU8sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsYUFBYSxPQUFPLE1BQU0sS0FBSyxTQUFTLFVBQVUsVUFBVSxPQUFPLE1BQU0sS0FBSyxRQUFRLFVBQVUsT0FBTyxNQUFNLEtBQUssV0FBVyxZQUFZLE9BQU8sTUFBTSxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLFlBQVksY0FBYyxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxXQUFXLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsV0FBVyxZQUFZLGFBQWEsY0FBYyxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLFVBQVUsYUFBYSxRQUFRLEtBQUssVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE9BQU8sWUFBWSxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLGVBQWUsT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxTQUFTLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZ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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7O0FDQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFyY2hpdm8rQmxhY2smZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK01vbm8mZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGlsdCtXYXJwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tc2NhcmxldDogI2ZmMjIwYztcbiAgICAtLXNwYWNlLWNhZGV0OiAjMWMxZjMzO1xuICAgIC0tbWFpemU6ICNGRkY2ODk7XG4gICAgLS1hcXVhbWFyaW5lOiAjMDBGRkNEO1xuICAgIC0taGVhZGVyLWhlaWdodDogM3JlbTtcbiAgICAtLWZvbnQtYXJjaGl2bzogJ0FyY2hpdm8gQmxhY2snLCBzYW5zLXNlcmlmO1xuICAgIC0tZm9udC1ub3RvOiAnTm90byBTYW5zIE1vbm8nLCBtb25vc3BhY2U7XG4gICAgLS1mb250LXRpbHQ6ICdUaWx0IFdhcnAnLCBjdXJzaXZlO1xuICAgIC0taDItZm9udC1zaXplOiA0cmVtO1xuICAgIC0taDMtZm9udC1zaXplOiAycmVtO1xufVxuXG5odG1sIHtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY2FybGV0KTtcbn1cblxuLypcbiAgMS4gVXNlIGEgbW9yZS1pbnR1aXRpdmUgYm94LXNpemluZyBtb2RlbC5cbiovXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qXG4gIDIuIFJlbW92ZSBkZWZhdWx0IG1hcmdpblxuKi9cbioge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLypcbiAgVHlwb2dyYXBoaWMgdHdlYWtzIVxuICAzLiBBZGQgYWNjZXNzaWJsZSBsaW5lLWhlaWdodFxuICA0LiBJbXByb3ZlIHRleHQgcmVuZGVyaW5nXG4qL1xuXG5ib2R5IHtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuXG59XG5cbi8qXG4gIDUuIEltcHJvdmUgbWVkaWEgZGVmYXVsdHNcbiovXG5pbWcsXG5waWN0dXJlLFxudmlkZW8sXG5jYW52YXMsXG5zdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cblxuLypcbiAgNi4gUmVtb3ZlIGJ1aWx0LWluIGZvcm0gdHlwb2dyYXBoeSBzdHlsZXNcbiovXG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgICBmb250OiBpbmhlcml0O1xufVxuXG4vKlxuICA3LiBBdm9pZCB0ZXh0IG92ZXJmbG93c1xuKi9cbnAsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi8qXG4gIDguIENyZWF0ZSBhIHJvb3Qgc3RhY2tpbmcgY29udGV4dFxuKi9cbiNyb290LFxuI19fbmV4dCB7XG4gICAgaXNvbGF0aW9uOiBpc29sYXRlO1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCBhdXRvKTtcbn1cblxuaGVhZGVyIHtcbiAgICBncmlkLXJvdzogMTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY2FybGV0KTtcbn1cblxubWFpbiB7XG4gICAgZ3JpZC1yb3c6IDI7XG5cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NhcmxldCk7XG5cbn1cblxuLnRlc3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaGVsbG8ge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpbHQpO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjh2dztcbn1cblxuLm15LW5hbWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBsaW5lLWhlaWdodDogNXZ3O1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWFyY2hpdm8pO1xuICAgIGZvbnQtc2l6ZTogOHZ3O1xuXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4IGJsYWNrO1xuXG5cbiAgICBjb2xvcjogdmFyKC0tc2NhcmxldCk7XG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubXktbmFtZTpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uZnVsbHN0YWNrIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgZm9udC1zaXplOiAydnc7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbm90byk7XG5cbn1cblxuLnNpZGViYXIge1xuICAgIHotaW5kZXg6IDU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IC0zcmVtO1xufVxuXG4uYWJvdXQtbWUge1xuICAgIGdyaWQtcm93OiAzO1xuXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY2FybGV0KTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLmFib3V0LW1lPi5jb250YWluZXIge1xuICAgIG1pbi13aWR0aDogMzByZW07XG4gICAgbWF4LXdpZHRoOiA2MHJlbTtcbn1cblxuW2NsYXNzIFxcJD1cInRpdGxlXCJdIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1hcmNoaXZvKTtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taDItZm9udC1zaXplKTtcblxufVxuXG5oMyB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1oMy1mb250LXNpemUpO1xufVxuXG5wIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1ub3RvKTtcbn1cblxuLnByb2plY3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdyaWQtcm93OiA0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjYXJsZXQpO1xuICAgIG1hcmdpbi10b3A6IDVyZW07XG5cbn1cblxuLnByb2plY3RzPi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgICB3aWR0aDogODAlO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcblxufVxuXG4ucHJvamVjdHMtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmRzLXdyYXBwZXIge1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDFyZW07XG5cbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNTBweCwgMWZyKSk7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcblxufVxuXG5cbltjbGFzc149XCJjYXJkLVwiXSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMS41ZnIgMWZyO1xuXG59XG5cbi50aHVtYm5haWwge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5wcm9qZWN0LWluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgZ3JpZC1yb3c6IGF1dG8gMWZyIGF1dG87XG5cbn1cblxuLnByb2plY3QtbmFtZSB7XG4gICAgY29sb3I6IHZhcigtLW1haXplKTtcbn1cblxuLnN1bW1hcnkge1xuICAgIGNvbG9yOiB2YXIoLS1hcXVhbWFyaW5lKTtcbn1cblxuLnByb2plY3QtaW5mbz4ubGlua3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgY29sb3I6IHZhcigtLWFxdWFtYXJpbmUpO1xuICAgIGdhcDogMTBweDtcblxufVxuXG4ubGlua3M+cCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi5jb250YWN0IHtcbiAgICBwYWRkaW5nLXRvcDogMTByZW07XG4gICAgZ3JpZC1yb3c6IDU7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY2FybGV0KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFjdC1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NjBweDtcbiAgICBoZWlnaHQ6IDIwcmVtO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuXG59XG5cblxuLmNvbnRhY3QtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbn1cblxuXG4uY29udGFjdC1jb250YWluZXI+LmxpbmtzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uc29jaWFscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5vdG8pO1xuICAgIGdhcDogMXJlbTtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xufVxuXG4jcmVzdW1lLFxuI2dpdGh1YixcbiNsaW5rZWRpbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4jcmVzdW1lOjphZnRlcixcbiNnaXRodWI6OmFmdGVyLFxuI2xpbmtlZGluOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXNwYWNlLWNhZGV0KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XG5cblxufVxuXG4jcmVzdW1lOmhvdmVyOjphZnRlcixcbiNnaXRodWI6aG92ZXI6OmFmdGVyLFxuI2xpbmtlZGluOmhvdmVyOjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG59XG5cbi5lbWFpbC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4jZW1haWwge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tbWFpemUpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpbHQpO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbiNlbWFpbDpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLXNwYWNlLWNhZGV0KTtcbn1cblxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gICAgbWFyZ2luLXRvcDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG59XG5cbi5zZWxlY3Rpb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsZWZ0OiAxcmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKSByb3RhdGVYKDApO1xuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnNlbGVjdGlvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDhkZWcpIHJvdGF0ZVgoOGRlZyk7XG59XG5cbi5zZWxlY3Rpb246YWN0aXZlIHtcbiAgICB0cmFuc2l0aW9uOiAwcyBub25lO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg2ZGVnKSByb3RhdGVYKDZkZWcpO1xufVxuXG5cblxuLnNpZGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZyb250IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnQXJjaGl2byBCbGFjaycsIHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDUwcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjYXJsZXQpO1xuXG59XG5cbi5sZWZ0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZVkoOTBkZWcpO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NhcmxldCk7XG59XG5cblxuLmJvdHRvbSB7XG4gICAgaGVpZ2h0OiA0MDAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjUuNSUpIHJvdGF0ZVgoOTBkZWcpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG51bCB7XG4gICAgcGFkZGluZzogOHB4O1xufVxuXG5saSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLmFib3V0LW1lPi5jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTAlO1xuICAgIH1cblxuICAgIC5jb250YWN0LWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAuY29udGFjdC10aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgICAgIH1cblxuICAgICNlbWFpbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcblxuICAgIH1cblxuICAgIC5lbWFpbC13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnNvY2lhbHMge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cblxufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5hYm91dC1tZT4uY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG5cblxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsMkNB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LDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0FBQ3BDOzs7QUFHQTtJQUNJLFlBQVk7SUFDWiw0Q0FBNEM7SUFDNUMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsV0FBVztJQUNmOztBQUVKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCOztJQUVKO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjs7SUFFcEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCOzs7QUFHSjs7O0FBR0E7SUFDSTtRQUNJLFVBQVU7SUFDZDs7O0FBR0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QXJjaGl2bytCbGFjayZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrTW9ubyZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UaWx0K1dhcnAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLXNjYXJsZXQ6ICNmZjIyMGM7XFxuICAgIC0tc3BhY2UtY2FkZXQ6ICMxYzFmMzM7XFxuICAgIC0tbWFpemU6ICNGRkY2ODk7XFxuICAgIC0tYXF1YW1hcmluZTogIzAwRkZDRDtcXG4gICAgLS1oZWFkZXItaGVpZ2h0OiAzcmVtO1xcbiAgICAtLWZvbnQtYXJjaGl2bzogJ0FyY2hpdm8gQmxhY2snLCBzYW5zLXNlcmlmO1xcbiAgICAtLWZvbnQtbm90bzogJ05vdG8gU2FucyBNb25vJywgbW9ub3NwYWNlO1xcbiAgICAtLWZvbnQtdGlsdDogJ1RpbHQgV2FycCcsIGN1cnNpdmU7XFxuICAgIC0taDItZm9udC1zaXplOiA0cmVtO1xcbiAgICAtLWgzLWZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY2FybGV0KTtcXG59XFxuXFxuLypcXG4gIDEuIFVzZSBhIG1vcmUtaW50dWl0aXZlIGJveC1zaXppbmcgbW9kZWwuXFxuKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qXFxuICAyLiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5cXG4qL1xcbioge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qXFxuICBUeXBvZ3JhcGhpYyB0d2Vha3MhXFxuICAzLiBBZGQgYWNjZXNzaWJsZSBsaW5lLWhlaWdodFxcbiAgNC4gSW1wcm92ZSB0ZXh0IHJlbmRlcmluZ1xcbiovXFxuXFxuYm9keSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcblxcbn1cXG5cXG4vKlxcbiAgNS4gSW1wcm92ZSBtZWRpYSBkZWZhdWx0c1xcbiovXFxuaW1nLFxcbnBpY3R1cmUsXFxudmlkZW8sXFxuY2FudmFzLFxcbnN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qXFxuICA2LiBSZW1vdmUgYnVpbHQtaW4gZm9ybSB0eXBvZ3JhcGh5IHN0eWxlc1xcbiovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuICA3LiBBdm9pZCB0ZXh0IG92ZXJmbG93c1xcbiovXFxucCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi8qXFxuICA4LiBDcmVhdGUgYSByb290IHN0YWNraW5nIGNvbnRleHRcXG4qL1xcbiNyb290LFxcbiNfX25leHQge1xcbiAgICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCBhdXRvKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NhcmxldCk7XFxufVxcblxcbm1haW4ge1xcbiAgICBncmlkLXJvdzogMjtcXG5cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NhcmxldCk7XFxuXFxufVxcblxcbi50ZXN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uaGVsbG8ge1xcbiAgICBmb250LXNpemU6IDJ2dztcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGlsdCk7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMi44dnc7XFxufVxcblxcbi5teS1uYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbGluZS1oZWlnaHQ6IDV2dztcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1hcmNoaXZvKTtcXG4gICAgZm9udC1zaXplOiA4dnc7XFxuXFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCBibGFjaztcXG5cXG5cXG4gICAgY29sb3I6IHZhcigtLXNjYXJsZXQpO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4ubXktbmFtZTpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmZ1bGxzdGFjayB7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgZm9udC1zaXplOiAydnc7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5vdG8pO1xcblxcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIHotaW5kZXg6IDU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogLTNyZW07XFxufVxcblxcbi5hYm91dC1tZSB7XFxuICAgIGdyaWQtcm93OiAzO1xcblxcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY2FybGV0KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDZyZW07XFxufVxcblxcbi5hYm91dC1tZT4uY29udGFpbmVyIHtcXG4gICAgbWluLXdpZHRoOiAzMHJlbTtcXG4gICAgbWF4LXdpZHRoOiA2MHJlbTtcXG59XFxuXFxuW2NsYXNzICQ9XFxcInRpdGxlXFxcIl0ge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1hcmNoaXZvKTtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IHZhcigtLWgyLWZvbnQtc2l6ZSk7XFxuXFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1oMy1mb250LXNpemUpO1xcbn1cXG5cXG5wIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbm90byk7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXJvdzogNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NhcmxldCk7XFxuICAgIG1hcmdpbi10b3A6IDVyZW07XFxuXFxufVxcblxcbi5wcm9qZWN0cz4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcblxcbn1cXG5cXG4ucHJvamVjdHMtdGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkcy13cmFwcGVyIHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNTBweCwgMWZyKSk7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcblxcbn1cXG5cXG5cXG5bY2xhc3NePVxcXCJjYXJkLVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuNWZyIDFmcjtcXG5cXG59XFxuXFxuLnRodW1ibmFpbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5wcm9qZWN0LWluZm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGdyaWQtcm93OiBhdXRvIDFmciBhdXRvO1xcblxcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gICAgY29sb3I6IHZhcigtLW1haXplKTtcXG59XFxuXFxuLnN1bW1hcnkge1xcbiAgICBjb2xvcjogdmFyKC0tYXF1YW1hcmluZSk7XFxufVxcblxcbi5wcm9qZWN0LWluZm8+LmxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGNvbG9yOiB2YXIoLS1hcXVhbWFyaW5lKTtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbn1cXG5cXG4ubGlua3M+cCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLmNvbnRhY3Qge1xcbiAgICBwYWRkaW5nLXRvcDogMTByZW07XFxuICAgIGdyaWQtcm93OiA1O1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY2FybGV0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA5NjBweDtcXG4gICAgaGVpZ2h0OiAyMHJlbTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG5cXG59XFxuXFxuXFxuLmNvbnRhY3QtdGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcblxcbi5jb250YWN0LWNvbnRhaW5lcj4ubGlua3Mge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5zb2NpYWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbm90byk7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG59XFxuXFxuI3Jlc3VtZSxcXG4jZ2l0aHViLFxcbiNsaW5rZWRpbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbn1cXG5cXG4jcmVzdW1lOjphZnRlcixcXG4jZ2l0aHViOjphZnRlcixcXG4jbGlua2VkaW46OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tc3BhY2UtY2FkZXQpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcblxcblxcbn1cXG5cXG4jcmVzdW1lOmhvdmVyOjphZnRlcixcXG4jZ2l0aHViOmhvdmVyOjphZnRlcixcXG4jbGlua2VkaW46aG92ZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcblxcbi5lbWFpbC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbiNlbWFpbCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLW1haXplKTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGlsdCk7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXM7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuI2VtYWlsOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXNwYWNlLWNhZGV0KTtcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XFxuICAgIG1hcmdpbi10b3A6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBsZWZ0OiAxcmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCkgcm90YXRlWCgwKTtcXG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2VsZWN0aW9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDhkZWcpIHJvdGF0ZVgoOGRlZyk7XFxufVxcblxcbi5zZWxlY3Rpb246YWN0aXZlIHtcXG4gICAgdHJhbnNpdGlvbjogMHMgbm9uZTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDZkZWcpIHJvdGF0ZVgoNmRlZyk7XFxufVxcblxcblxcblxcbi5zaWRlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZyb250IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnQXJjaGl2byBCbGFjaycsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooNTBweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjYXJsZXQpO1xcblxcbn1cXG5cXG4ubGVmdCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZVkoOTBkZWcpO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NhcmxldCk7XFxufVxcblxcblxcbi5ib3R0b20ge1xcbiAgICBoZWlnaHQ6IDQwMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjUuNSUpIHJvdGF0ZVgoOTBkZWcpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxudWwge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAgIC5hYm91dC1tZT4uY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTAlO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWN0LWNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgICAuY29udGFjdC10aXRsZSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgI2VtYWlsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxuXFxuICAgIH1cXG5cXG4gICAgLmVtYWlsLXdyYXBwZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5zb2NpYWxzIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuXFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuYWJvdXQtbWU+LmNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICB9XFxuXFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9