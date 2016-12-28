/**
 * Created by shiios on 16/12/28.
 */

//封装 闭包
(function () {
    var n = "shixiaofan";

    //当做类使用
    function People(name) {
        this._name = name;
    }

    People.prototype.say = function () {
        alert("hello" + this._name);
    }

    window.People = People;

}());


(function () {

    //类似继承
    function Student(name) {
        this._name = name;
    }
    Student.prototype = new People();

    var superSsay = Student.prototype.say;

    Student.prototype.say = function () {
        superSsay.call(this);//调用父类方法
        alert("stu_hello"+this._name);
    }

    window.Student = Student;

}());


var s = new Student("iwen");
s.say();