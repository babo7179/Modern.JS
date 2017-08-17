/*! main.js @ 2017, yamoo9.net */
(global => {

    let toString = Object.prototype.toString;
    let document = global.document;

    // 네임스페이스 객체
    const yamoo9 = {
        type(data){
            return toString.call(data).toLowerCase().slice(8,-1);
        }
    };

    yamoo9.query = search => document.querySelector(search);


    // 모듈 외부로 공개
    global.y9 = yamoo9;

})(window);

((global, $) => {
    'use strict';

    let change_bg_btn = $.query('button');
    let changeBG = e => {
        let button = e.target;
        let target = $.query('#target');
        let bg_color = button.getAttribute('data-bg-color');
        let fg_color = '#fff';
        target.style.cssText = `
            background-color: ${bg_color};
            color: ${fg_color};
            transition: all 0.45s ease-out;
        `;
    };

    change_bg_btn.setAttribute('data-bg-color', '#20BFBA');
    change_bg_btn.addEventListener('click', changeBG);

})(window, window.y9);