"use strict";
let a = 'ken';
console.log(a);
let b = 102;
console.log(b);
// function fn() {
//   console.log(this);
// }
// "strictNullChecks": true
let box = document.getElementById('box');
// 兩種寫法
if (box !== null) {
    box.addEventListener('click', function () {
        alert('hello');
    });
}
box === null || box === void 0 ? void 0 : box.addEventListener('click', function () {
    alert('hello');
});
