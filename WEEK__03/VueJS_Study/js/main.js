(function(global, store, Vue){
  'use strict';

  return;

  // ——————————————————————————————————————
  // Bootstrap(준비) 과정 검수
  // ——————————————————————————————————————
  console.groupCollapsed('Project Bootstrap');

  // Store 데이터 검증
  console.log('store:', store);

  // Vue를 사용할 수 있나 검증
  // console.log('Vue를 사용할 수 있나?:', Boolean(Vue));
  console.log('Vue를 사용할 수 있나?:', !!Vue);

  // Vue Class(생성자, Constructor Function) 확인
  console.dir(Vue);
  // class methods: Vue.method()
  // instance methods: new Vue().$method()

  console.groupEnd('Project Bootstrap');

})(window, window.store, window.Vue);

// 바닐라 스크립트 예시
(function(global, store){
  'use strict';

  // 지역 변수
  var document = global.document;
  var user_input, binding;
  var msg = store.message;

  // 로드 시점 ------------------------------------------------
  // 스토어(저장소)에서 메시지를 가져와 뷰(View)를 업데이트 한다.
  // DOM 문서 객체 모델에 접근하여 대상을 탐색하여 변수에 참조(할당)
  function init(){
    // 문서 객체 수집(탐색)
    user_input = document.querySelector('.user-input');
    binding = document.querySelector('.data-binding');
    // 데이터 바인딩 (user_input, binding)
    user_input.setAttribute('value', msg);
    binding.textContent = msg;
    // 이벤트 바인딩
    bind();
  }

  // 인터랙션 시점
  // 사용자가 인풋 컴포넌트에 메시지를 입력한다.
  // 입력 이벤트를 감지하여 2가지를 업데이트 한다.
  function bind(){
    user_input.addEventListener('keyup', function(e){
      update();
    });
    // user_input.addEventListener('change', function(e){
    // });
  }

  // 업데이트 항목 ---------------------------------------------
  // 1. 사용자가 보는 화면을 업데이트
  // 2. 스토어 데이터를 업데이트
  function update(){
    console.log('Update Content');
  }

  // 애플리케이션 실행 ------------------------------------------
  init();

})(window, window.store);