(function(global, $){
  'use strict';

  if ( $ !== global.jQuery ) {
    throw new Error('jQuery 의존 플러그인입니다. jQuery를 먼저 로드해주세요.');
  }

  // if ( $.type($.fn.radioClass) !== 'function' ) {
  if ( !$.isFunction($.fn.radioClass) ) {
    $.fn.radioClass = function(name){
      // 데이터 검증
      if ( $.type(name) !== 'string' ) {
        throw new Error('전달인자는 문자열을 전달해야 합니다.');
      }

      // 로직 구성
      // this === jQuery Object
      // this(나)에게는 siblings(형제)가 존재
      // this를 제외한 siblings 중 전달된 활성화 클래스 속성 값을 가진
      // sibing에서 해당 클래스 값을 제거
      var activated_sibling = this.siblings('.'+name);
      activated_sibling.removeClass(name);
      // this에게는 활성화 클래스 속성을 부여한다.
      this.addClass(name);
      // 메서드 체이닝
      return this;

      // VS

      // 체이닝을 사용하여 한 줄 코드로 변경한 예시
      // return this.addClass(name).siblings('.'+name).removeClass(name).addBack();
    };
  }

})(window, window.jQuery);