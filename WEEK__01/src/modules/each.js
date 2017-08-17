/*! each.js @ 2017, yamoo9.net */

// CommonJS 방식
// 외부에 존재하는 개발 의존 모듈을 로드
let type = require('./type');

// 모듈 로직
function each(data, callback=function(){}){
  let data_type = type(data);
  // data 유형이 배열이거나, 객체여야만 작동
  if ( data_type === 'array' || data_type === 'object' ) {
    // 배열이라면
    data_type === 'array' && data.forEach(callback);
    // 객체라면
    // data_type === 'object' && data
  } else {
    throw new Error('배열 또는 객체 유형만 each() 함수에 사용이 가능합니다.');
  }
}

// 모듈 외부 공개
module.exports = each;