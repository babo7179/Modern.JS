/*! jquery.utils.js @ 2017, yamoo9.net */
(function(global, $){
  'use strict';

  // 유틸리티 메서드
  // 인스턴스를 생성하지 않고 메서드를 사용할 수 있게 만드는 것.
  $.isNumber = $.isNumeric;
  $.isString = function(data){
    return $.type(data) === 'string';
  };
  $.isElementNode = function(node){
    // return node.nodeType === global.document.ELEMENT_NODE;
    return node.nodeType === 1;
  };
  $.isTextNode = function(node){
    // return node.nodeType === global.document.TEXT_NODE;
    return node.nodeType === 3;
  };
  $.isNodeList = function(list){
    return Object.prototype.toString.call(list) === '[object NodeList]';
  };

  // ——————————————————————————————————————————
  // jQuery 인스턴스 객체를 캐시하는 유틸리티 메서드
  // ——————————————————————————————————————————

  // dom_el를 토대로 jQuery 객체를 캐시
  $.$ = $.cache = function(dom_el){
    // 데이터 검증 확인
    if ( !$.isElementNode(dom_el) ) { throw new Error('DOM 객체를 첫번째 인자로 전달해야 합니다.') }

    // 조건 처리에 도움을 줄 jQuery API => $.data()
    // http://api.jquery.com/jQuery.data/
    var cached_jQuery_obj = null;
    // 조건 1. 사전에 캐시된 jQuery 객체가 없을 경우,
    if ( !$.data(dom_el, '$el') ) {
      cached_jQuery_obj = $.data(dom_el, '$el', $(dom_el));
    }
    // 조건 2. 사전에 캐시된 jQuery 객체가 있을 경우,
    else {
      cached_jQuery_obj = $.data(dom_el, '$el');
    }
    return cached_jQuery_obj;

  };

})(window, window.jQuery);