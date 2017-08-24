settingMarkup = () => {

};
settingAnimate = () => {

};
bindEvents = () => {

};

export default class Carousel {
  constructor(el, options) {
    this.el = el;
    this.options = options;
    this.init();
    // return this;
  }
  init(){
    settingMarkup();
    settingAnimate();
    bindEvents();
    this.activeTab(this.options.active);
  }
  activeSlide(){

  }
  activeTab(index){

  }
}