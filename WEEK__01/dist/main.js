'use strict';

/*! main.js @ 2017, yamoo9.net */

// ES6 Code
// Fat Arrow Function
(function (global) {

    // `let` variable keyword
    var document = global.document;
    var brand = document.querySelector('.brand');
    brand.innerHTML = 'Hi, ES6 :-)';
})(window);
