"use strict";
(function () {
    // 如果要讓 User 實現 interface 的話要用 implements。（概念像是繼承）
    // 實現的意思就是讓 class 滿足 interface 定義的規則
    class User {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('Hello World');
        }
    }
    const user = new User('ken');
    console.log(user);
    user.sayHello();
}());
