


// 1.工厂模式      用创建对象的函数来构建对象  最终返回对象
function creatPerson(name,age,job){
    // 在函数中创建对象     原料
    var person = new Object();
    //                   加工
    // 对象的属性
    person.name = name;
    person.age = age;
    person.job = job;
    // 对象的方法     ‘方法’ 是一个‘函数类型’的‘属性‘
    person.sayName = function(){
        document.write(this.name + "（工厂模式）" + person.age +  "<br>");
    }
    //                   出厂
    return person
}
    // 创建工厂模式的实例
var person1 = creatPerson("nick",29,"painter");
person1.sayName();
var person2 = creatPerson("halk",30,"halk");
person2.sayName();




// 2.构造函数模式     优点：解决识别问题 缺点：每次都会在实例上创建一次方法 导致不同的作用于链解析  占用内存 并且这两个方法不相等

    //当new去调用一个函数，这个时候函数中的this就是创建出来的对象，而且函数的返回值就是this（隐式返回）
    //new后面的函数叫做构造函数
function Person(name,age,job){
    // 构造函数的属性
    this.name = name;
    this.age = age;
    this.job = job;
    // 构造函数的方法
    this.sayName = function(){
        document.write(this.name + "(构造函数模式)" + "<br>");
    }
};
    // 在实例中调用方法
var person3 = new Person("neal",22,"stu");
person3.sayName();
var person4 = new Person("makrai",22,"shooter");
person4.sayName();




// 3.对象字面量方式创建对象   直接创建对象 内部定义好属性和方法  在对象的结尾要加上分号 ；
var boy = {
    // 对象属性
    name:"林俊杰",
    "age":30,    //属性名可以加双引号  好处是可以包含导致错误的字符 如空格
    sex:"male",
    skill:["sing","dance","handsome"],
    // 对象方法
    sayName: function(){
        document.write(this.name + "<br>");
    }
};
boy.sayName();




//4.原型方式   只要创建一个 ‘新函数’ 就会为‘该函数’ 创建一个 ‘prototype’ 属性 
// 如果在全局定义方法就会浪费空间并且失去对象的 封装性                                        这个‘prototype属性’指向函数的原型对象。所有的原型对象都会自动获得一个construtor（构造函数）属性，  这个’constructor‘属性是一个指向prototype属性所在函数的指针

function People(name){     // 创建对象字面量   对象字面量是包围在一对括号中的零个或读个  '键值对'
    this.name = name;
}//原型要写在对象的下面
People.prototype.name = "原型name";
People.prototype.showName =function (){
    document.write(this.name);
}
// 词典: parameter    .n 参数
var parameter = new People("实例name" + "<br>");
parameter.showName();
var no_parameter = new People();
no_parameter.showName();document.write(" 实例无name属性" + "<br>")
// 原型模式的优缺点：

// 1、优点：可以让所有的对象实例共享它所包含的属性和方法
// 2、缺点：.原型模式最大问题在于共享的本性所导致的,由于共享,因此一个实例修改了引用,另一个也随之修改了引用.因此我们通常不单独使用原型,而是结合原型模式和构造函数模式.


// 5.混合模式
// 构造函数模式 定义 实例属性，而 原型模式用于 ’定义方法和共享‘ 的属性
function anotherPerson(name){   //创建对象 的构造函数
    this.name = name; 
}
anotherPerson.prototype.showName = function(){
    document.write(this.name + "<br>")
}
var a_person = new anotherPerson("Nike");
a_person.showName();


// 对象的访问方式
/*  
    用点表示法访问对象的属性和方法  
    如果对象的该属性不存在：   可以使用默认值
    consol.info(obj.arrtribute || “默认值”)
*/
document.write(a_person.sex || "boy");  // boy

//对象属性的迭代
/*
    用for-in   for（var P  in  obj{
        console.info(typeof exampleObj[p] + "类型" + p)
    }
*/

//删除对象的属性和方法     即使删除一个 不存在的属性或者方法  也不会报错
/*     delete obj.arrtri   
返回    true
*/

                '寄生构造函数'
如果我们想要一个具有特殊方法的数组
我们可以构建一个 函数  返回一个‘Array’数组    在这个函数中 定义’Array‘的方法  并且返回出来  这与在外部定义的数组 没有什么不同
对于具有特殊功能的对象也一样
                '稳妥构造函数'
在函数中   function Person（name ，age）{
            var  o = new Object();
            o,sayNme() = function (){
                alert(name);
            }
}
在这里可以看到  我们传进去的 '参数' 只有在这个内部方法可以访问到  在外部是访问不到的
所以叫稳妥模式   提供变量的安全环境