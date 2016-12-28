/**
 * Created by shiios on 16/12/28.
 */

// var person = {
//     name:"iwen",
//     age:30,
//
//     eat:function () {
//         alert("吃");
//     }
// }
//
// person.height = 100;
//
//
// alert(person.name);

//函数构造器

function Person() {

}

Person.prototype = {
    name:"iwen",
    age:30,

    eat:function () {
        alert("我在吃");
    }
}

var p = new Person();

//深入js面向对象