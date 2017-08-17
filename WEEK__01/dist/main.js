'use strict';

/*! main.js @ 2017, yamoo9.net */
(function (global) {

    var toString = Object.prototype.toString;
    var document = global.document;

    // 네임스페이스 객체
    var yamoo9 = {
        type: function type(data) {
            return toString.call(data).toLowerCase().slice(8, -1);
        }
    };

    yamoo9.query = function (search) {
        return document.querySelector(search);
    };

    // 모듈 외부로 공개
    global.y9 = yamoo9;
})(window);

(function (global, $) {
    'use strict';

    var change_bg_btn = $.query('button');
    var changeBG = function changeBG(e) {
        var button = e.target;
        var target = $.query('#target');
        var bg_color = button.getAttribute('data-bg-color');
        var fg_color = '#fff';
        target.style.cssText = '\n            background-color: ' + bg_color + ';\n            color: ' + fg_color + ';\n            transition: all 0.45s ease-out;\n        ';
    };

    change_bg_btn.setAttribute('data-bg-color', '#20BFBA');
    change_bg_btn.addEventListener('click', changeBG);
})(window, window.y9);
