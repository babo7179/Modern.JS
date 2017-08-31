(function(global, store, Vue){
  'use strict';

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
    user_input.addEventListener('keyup', update);
    user_input.addEventListener('change', update);
  }

  // 업데이트 항목 ---------------------------------------------
  // 1. 사용자가 보는 화면을 업데이트
  // 2. 스토어 데이터를 업데이트
  function update(e){
    switch ( e.type ) {
      case 'keyup':
      case 'change':
        // 업데이트 콘텐츠
        var content = e.target.value;
        // store, View 업데이트
        updateStoreData('message', content);
        updateView(binding, content);
    }
  }
  function updateStoreData(category, data){
    if (!store) { throw new Error('store 데이터가 존재하지 않습니다.') }
    store[category] = data;
    console.log('store.' + category, store[category]);
  }
  function updateView(el, data){
    if ( el.nodeType !== 1 ) { throw new Error('화면 뷰를 업데이트 할 요소 노드가 존재하지 않습니다.') }
    el.textContent = data;
  }

  // 애플리케이션 실행 ------------------------------------------
  // init();

})(window, window.store);

// jQuery 스크립트 예시
// DOM Script 원할하게 작성 도와주는 라이브러리 일 뿐.
(function(global, $, store){
  'use strict';

  var $app, $user_input, $binding;

  function init(){
    // 요소 수집 후, jQuery 인스턴스 화.
    $app = $('.app');
    $user_input = $app.find('.user-input');
    $binding = $app.find('.data-binding');
    // 데이터 바인딩
    var data = store.message;
    $user_input.val(data);
    $binding.text(data);
    // 이벤트 바인딩
    bind();
  }
  function bind(){
    $user_input.on('keyup', update);
  }
  function update(e){
    var input = e.target;
    var value = input.value;
    updateStoreData('message', value);
    updateView($binding, value);
  }
  function updateStoreData(type, data){
    store[type] = data;
    console.log('store.' + type, store[type]);
  }
  function updateView($el, data){
    $el.text(data);
  }

  // init();

})(window, window.jQuery, window.store);


// VueJS 스크립트 예시
(function(global, Vue, store){
  'use strict';

  // 사용자 정의 디렉티브
  Vue.directive('hilight', {
    bind: function(el, binding){
      console.log(el);
      console.log(binding);
    }
  });

  // 사용자 정의 필터
  Vue.filter('uppercase', function(data){
    return data.toUpperCase();
  });

  // Vue 객체(인스턴스) 생성
  new Vue({
    // 마운트 할 요소의 선택자를 설정
    el: '.app',
    // 관리할 데이터 연결(binding)
    // 값 참조(reference): 참조형 데이터 | [], {}, function(){}
    data: {
      message: 'Today is Complex.',
      count: 0,
      memoList: [
        '기상',
        '오전 운동',
        '출근',
        '퇴근'
      ]
    },
    // 컴포넌트가 사용할 메서드 등록
    methods: {
      updateCount: function(value){
        this.count += value;
      },
      addMemo: function(e){
        this.memoList.unshift(e.target.value);
        e.target.value = '';
      }
    }
  });

})(window, window.Vue, window.store);