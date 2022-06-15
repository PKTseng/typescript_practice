// let userName: String
// userName = 'ken'
// let userName: string = 'ken'

// let total: number
// total = 100

// let booleanStatus: boolean
// booleanStatus = true

// function sum(a: number, b: number): number {
//   return a + b
// }

// console.log(sum(10, 20))
// console.log(typeof sum(10, 20))


// let text : 'hello'
// text= 'hello'


// let plural: number | string

// plural = 10
// plural = 'name'


// let a: any

// a = 10
// a = 'name'
// a = true

let u: unknown

// u = 10
// u = 'name'
// u = true

let s: string
s = 'hello'

// 以上沒問題，再加上下面這段就會有問題
// s = u

// if (typeof u === 'string') s = u

s = u as string

s = <string>u

// ====================================


// void
//1. 函式沒有回傳值 => 回傳值推論為void，PASS!
function add(x: number, y: number) {
  console.log(x + y)
}

//2. 函式回傳undefined => 回傳值推論為undefined，PASS!
function add1(x: number, y: number) {
  return undefined
}

//3. 函式回傳值註記型別為 undefined，回傳 undefined => 回傳值型別為undefined，PASS!
function add2(x: number, y: number): undefined {
  return undefined
}

//4. 函式回傳值註記型別為 undefined，但函式沒有回傳值 => 報錯
// function add3(x: number, y: number): undefined {
//   console.log(x + y)
// }

//5. 函式回傳值註記型別為 undefined，但函式內容為空 => 報錯
// function add3(x: number, y: number): undefined {

// }

//6. 函式回傳值註記為 void，但函式回傳 undefined => PASS!
function add4(x: number, y: number): void {
  return undefined
}

//7. 函式回傳值註記為 void，但函式沒有回傳值 => PASS!
function add5(x: number, y: number): void {
  console.log(x + y)
}



// never 
// function neverFn(): never {
//   throw new Error('報錯')
// }