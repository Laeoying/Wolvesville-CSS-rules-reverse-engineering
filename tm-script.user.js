// ==UserScript==
// @name         Wolvesville CSS rules reverse engineering
// @namespace    http://laeoying.com/wcrre
// @version      2024-11-08
// @description  Get elements CSS classes on each reload based on their rules.
// @author       sundance
// @match        https://www.wolvesville.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wolvesville.com
// @grant        none
// ==/UserScript==

let lib = {
    popup: {
        cssRules: [
            "{ align-items: stretch; background-color: rgba(0, 0, 0, 0); border: 0px solid black; box-sizing: border-box; display: flex; flex-basis: auto; flex-direction: column; flex-shrink: 0; list-style: none; margin: 0px; min-height: 0px; min-width: 0px; padding: 0px; position: relative; text-decoration: none; z-index: 0; }",
            "{ border-radius: 3px; }",
            "{ max-height: 80%; }",
            "{ overflow: hidden; }",
            "{ width: 90%; }",
            "{ z-index: 6; }"
        ]
    }
}

function init() {
    for (const e of document.styleSheets[0].rules) {
        const str = e.cssText.slice(e.cssText.indexOf(' ') + 1);
        for (const r in lib) {
            const obj = lib[r];
            if (obj.cssRules.includes(str)) {
                if (!obj.selector) {
                    obj.selector = e.selectorText;
                } else {
                    obj.selector += ' ' + e.selectorText.slice(1);
                }
            }
        }
    }
    for (const r in lib) {
        lib[r] = lib[r].selector.slice(1);
    }
}

(function() {
    'use strict';

    init();

    // lib is initialized from here, type your code below
    // you can use it like "document.getElementsByClassName(lib.popup);"
    // careful : the string made may work with querySelector but NOT necessarily, consider using classes

    console.log(lib);
})();