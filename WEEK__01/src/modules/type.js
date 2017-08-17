/*! type.js @ 2017, yamoo9.net */
let type = (data) => {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
};

// 외부 공개
module.exports = type;