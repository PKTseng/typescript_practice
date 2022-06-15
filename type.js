// let a: object;
// a = {}
// a = function () {
//   return 123
// }
// {} 用來指定物件中可以包含哪些屬性
// 語法：{ key : value, key : value}
// 在 key 值上面加上？，代表選擇性指定型別
// let b: { name: string, age?: number }
// b = { name: 'ken', age: 12 }
// [propName: string]: any  任意型別的屬性
var c;
c = { name: 'ken', a: 18, b: 'boy', gender: '男' };
var fn;
fn = function (q1, q2) {
    return q1 + q2;
};
console.log(fn(1, 3));
