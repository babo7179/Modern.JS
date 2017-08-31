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



})(window, window.store);