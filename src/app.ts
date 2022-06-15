

let a: string = 'ken'
console.log(a);


let b: number = 102
console.log(b);



// function fn() {
//   console.log(this);
// }


// "strictNullChecks": true
let box = document.getElementById('box')

// 兩種寫法

if (box !== null) {
  box.addEventListener('click', function () {
    alert('hello')
  })
}

box?.addEventListener('click', function () {
  alert('hello')
})
