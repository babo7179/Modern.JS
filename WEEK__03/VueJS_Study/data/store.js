/*! store.js @ 2017, yamoo9.net */
(function(global, $, storage){
  'use strict';

  var message_list = [
    'Hello Modern JavaScript',
    'Hi! Evenryone.',
    'Oops!! This is BAD Situation.',
    'It\'s so Beautiful!'
  ];

  // 데이터 저장,읽기,쓰기
  // global.store = {
  //   state: [],
  //   getState: function(key){
  //     var string_data = storage.getItem(key);
  //     var data = $.parse(string_data);
  //     this.state = data;
  //     return data;
  //   },
  //   setState: function(key, value){
  //     var string_data = $.stringify(value);
  //     storage.setItem(key, string_data);
  //     this.value = value;
  //   },
  //   clearState: function(key){
  //     storage.removeImte(key);
  //     this.state = [];
  //   }
  // };

  global.store = {
    message: message_list[Math.floor(Math.random() * message_list.length)],
    current_year: new Date().getFullYear()
  };

})(window, window.JSON, window.localStorage);