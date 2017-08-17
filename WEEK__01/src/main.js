/*! main.js @ 2017, yamoo9.net */
(global => {

    // 스코프 변수 정의
    let toString = Object.prototype.toString;
    let document = global.document;

    // ——————————————————————————————————————
    // ES5, Singleton Object
    // ——————————————————————————————————————
    // 네임스페이스 객체 정의
    const yamoo9 = {
        type(data){
            return toString.call(data).toLowerCase().slice(8,-1);
        }
    };
    // 네임스페이스 객체 확장
    yamoo9.queryAll = search => document.querySelectorAll(search);
    yamoo9.query = search => document.querySelector(search);

    // ——————————————————————————————————————
    // ES6, Class
    // ——————————————————————————————————————
    class Y9 {
        // constructor(){}
        // class(static) methods
        static type(data) {
            return toString.call(data).toLowerCase().slice(8,-1)
        }
        static queryAll(s) {
            return document.querySelectorAll(s);
        }
        static query(s) {
            return document.querySelector(s);
        }
        // instance methods
        // 공통 메서드
        showMeTheMoney(){
            return 'money';
        }
    }

    // 네임스페이스 객체 모듈 외부로 공개
    global.y9 = yamoo9;
    global.Y9 = Y9;

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

((global, $) => {
    'use strict';

    let change_bg_btn = null;
    let target = null;

    // App 초기화
    function init(){
        change_bg_btn = $.query('button');
        target = $.query('#target');
        change_bg_btn.setAttribute('data-bg-color', '#20BFBA');
        bind();
    }

    // App 이벤트 바인딩
    function bind(){
        change_bg_btn.addEventListener('click', changeBG);
    }
    // App 함수들
    function changeBG() {
        let button = e.target;
        let bg_color = button.getAttribute('data-bg-color');
        let fg_color = '#fff';
        target.style.cssText = `
            background-color: ${bg_color};
            color: ${fg_color};
            transition: all 0.45s ease-out;
        `;
    };

    // App 실행
    init();

})(window, window.y9);