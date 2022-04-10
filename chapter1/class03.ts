// 直接使用值當作型別宣告

let a: 10;
a = 10

//多型別
let b: 'male' | 'female'
b = 'male'
b = 'female'

let c: boolean | string
c = true
c = 'hello'

// any 為任意型別，等同於是將關閉 ts 的型別
let d: any
d = 10
d = 'hello'
d = true