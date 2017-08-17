/*! main.js @ 2017, yamoo9.net */

// ES6 Code
// Fat Arrow Function
(global => {

    // `let` variable keyword
    let document    = global.document;
    let brand       = document.querySelector('.brand');
    brand.innerHTML = 'Hi, ES6 :-)';

  })(window);