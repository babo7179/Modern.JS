'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*! main.js @ 2017, yamoo9.net */
(function (global) {

    // 스코프 변수 정의
    var toString = Object.prototype.toString;
    var document = global.document;

    // ——————————————————————————————————————
    // ES5, Singleton Object
    // ——————————————————————————————————————
    // 네임스페이스 객체 정의
    var yamoo9 = {
        type: function type(data) {
            return toString.call(data).toLowerCase().slice(8, -1);
        }
    };
    // 네임스페이스 객체 확장
    yamoo9.queryAll = function (search) {
        return document.querySelectorAll(search);
    };
    yamoo9.query = function (search) {
        return document.querySelector(search);
    };

    // ——————————————————————————————————————
    // ES6, Class
    // ——————————————————————————————————————

    var Y9 = function () {
        function Y9() {
            _classCallCheck(this, Y9);
        }

        _createClass(Y9, [{
            key: 'showMeTheMoney',

            // instance methods
            // 공통 메서드
            value: function showMeTheMoney() {
                return 'money';
            }
        }], [{
            key: 'type',

            // constructor(){}
            // class(static) methods
            value: function type(data) {
                return toString.call(data).toLowerCase().slice(8, -1);
            }
        }, {
            key: 'queryAll',
            value: function queryAll(s) {
                return document.querySelectorAll(s);
            }
        }, {
            key: 'query',
            value: function query(s) {
                return document.querySelector(s);
            }
        }]);

        return Y9;
    }();

    // 네임스페이스 객체 모듈 외부로 공개


    global.y9 = yamoo9;
    global.Y9 = Y9;
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

(function (global, $) {
    'use strict';

    var change_bg_btn = null;
    var target = null;

    // App 초기화
    function init() {
        change_bg_btn = $.query('button');
        target = $.query('#target');
        change_bg_btn.setAttribute('data-bg-color', '#20BFBA');
        bind();
    }

    // App 이벤트 바인딩
    function bind() {
        change_bg_btn.addEventListener('click', changeBG);
    }
    // App 함수들
    function changeBG() {
        var button = e.target;
        var bg_color = button.getAttribute('data-bg-color');
        var fg_color = '#fff';
        target.style.cssText = '\n            background-color: ' + bg_color + ';\n            color: ' + fg_color + ';\n            transition: all 0.45s ease-out;\n        ';
    };

    // App 실행
    init();
})(window, window.y9);
