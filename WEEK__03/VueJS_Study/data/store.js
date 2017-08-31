/*! store.js @ 2017, yamoo9.net */
(function(global){
  'use strict';

  var message_list = [
    'Hello Modern JavaScript',
    'Hi! Evenryone.',
    'Oops!! This is BAD Situation.',
    'It\'s so Beautiful!'
  ];

  global.store = {
    message: message_list[Math.floor(Math.random() * message_list.length)],
    current_year: new Date().getFullYear()
  };

})(window);