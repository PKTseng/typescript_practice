"use strict";
//1. 函式沒有回傳值 => 回傳值推論為void，PASS!
function add(x, y) {
    console.log(x + y);
}
//2. 函式回傳undefined => 回傳值推論為undefined，PASS!
function add1(x, y) {
    return undefined;
}
//3. 函式回傳值註記型別為 undefined，回傳 undefined => 回傳值型別為undefined，PASS!
function add2(x, y) {
    return undefined;
}
//4. 函式回傳值註記型別為 undefined，但函式沒有回傳值 => 報錯
function add3(x, y) {
    console.log(x + y);
}
//5. 函式回傳值註記型別為 undefined，但函式內容為空 => 報錯
function add3(x, y) {
}
//6. 函式回傳值註記為 void，但函式回傳 undefined => PASS!
function add4(x, y) {
    return undefined;
}
//7. 函式回傳值註記為 void，但函式沒有回傳值 => PASS!
function add5(x, y) {
    console.log(x + y);
}
