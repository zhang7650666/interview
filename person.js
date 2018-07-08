// es5定义一个类
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.say = function(){
    consoel.log(name,age)
}
var person = new Person('小明',30)
console.log(person.name)
consoel.log(person.say())
// es6定义一个类

class Parent {
    constructor(obj){
        this._config = obj
        console.log(obj.name,obj.age)
    }
    setValue(key,value){
        this._config[key] = value
    }
    getValue(key){
        console.log(this._config[key])
    }
}
var example = new model({name,age}) //tom年龄20
example.setValue("sex","man")
example.getValue("sex") //man
// es6类的继承

class child extends Parent{
    constructor(obj){
        super(obj) //继承父类的东西
    }
    //写自己的属性方法
    say(){

    }
}