import $ from 'jquery';

class Tabs {
  constructor(el){
    this.el = el;
    this.$el = $(el);
  }
  // static methods
  static init(){
    console.log('Init Tabs');
  }

  // instance methods
  // public methods
  // prototype object methods
  next(){
    console.log('next tab');
  }
  prev(){
    console.log('previous tab');
  }
}

export default Tabs;