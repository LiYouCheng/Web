/**
 * Created by shiios on 16/12/28.
 */

(function () {
    var n = "ime";


    function Person(name) {
        var _this = {};

        _this._name = name;

        _this.sayHello = function () {
            alert("Hello" + _this._name + n);
        }
        return _this;
    }

    window.Person = Person;
}());


(function () {
    var n = "my";


    function Teacher(name) {
        var _this = Person(name);

        //访问父类中的方法
        var surperSay = _this.sayHello;

        _this.sayHello = function () {

            surperSay.call(_this);

            alert("say_Hello"+_this._name + n);
        }

        return _this;
    }

    window.Teacher = Teacher;
}());





var t = Teacher("shixaiofan");
t.sayHello();
