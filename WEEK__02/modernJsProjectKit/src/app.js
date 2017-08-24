// ——————————————————————————————————————
// 공통 스타일 파일 로드
// ——————————————————————————————————————
import 'sass/app.scss';

// ——————————————————————————————————————
// 공통 스크립트 작성
// ——————————————————————————————————————
import type from './es6/utils/type';
import Tabs from './es6/components/Tabs';

let document = global.document;
let category_tabs = new Tabs( document.querySelector('h1') );

console.log('category_tabs:', category_tabs);

// 전역에 클래스 모듈을 공개
global.Tabs = Tabs;
