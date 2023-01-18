// ===== undefined 和 null =====
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var und = undefined;
var nll = null;
// undefined 和 null 都可以作為其他類型的子類型  把 undefined 和 null 賦值給其他類型的變數 如 number類型的變數
// strict: false - tsconfig.json 嚴格模式要拿掉 就可以賦值
//  let num2: number = undefined
//  let num2: number = null
// ===== 數組 =====
// 語法1: let 變數: 類型[] = [value1, value2, value3]
var ary1 = [10, 20, 30];
// 語法2: let 變數: Array<類型> = [value1, value2, value3]
var ary2 = [100, 200, 300];
// ===== 元組 =====
// 定義數組的時候  類型和數據的個數位置  就已經設定.限定好了
var ary3 = ["king", 20, true];
// ===== 枚舉 enum =====
// 類型的一個補充  常用的數據且個數是固定的0
// enum 裡面的每個數據都可以叫元素 每個元素有自己的編號  編號從0開始 遞增1 (也可以被定義)
// ex-1
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var color = Color.red;
console.log(color); // 0
console.log(Color.red, Color.green, Color.blue); // 0, 1, 2
console.log(Color[2]); // blue
// 可以是中文的數據元素  但是不建議
var Gender;
(function (Gender) {
    Gender[Gender["\u5973"] = 0] = "\u5973";
    Gender[Gender["\u7537"] = 1] = "\u7537";
})(Gender || (Gender = {}));
console.log(Gender.男); // 1
// // ex-2
// enum Color{
//     red = 10,
//     green,
//     blue
// }
// let color: Color = Color.red
// console.log(color) // 10
// console.log(Color.red, Color.green, Color.blue) // 10, 11, 12
// // ex-3
// enum Color{
//     red = 10,
//     green = 100,
//     blue = 1000
// }
// let color: Color = Color.red
// console.log(color) // 10
// console.log(Color.red, Color.green, Color.blue) // 10, 100, 1000
// ===== any =====
// 任意類型
// 還不清楚類型  可能來自動態 輸入 第三方套件  可以存入各種類型
var any1 = 100;
any1 = "test any";
// 當一個數組要儲存多個數據 個數不確定 類型也不確定 就可以使用 any 來定義數組
var ary4 = [100, "str", true];
// 缺點 可以編譯過 但不會有錯誤提示訊息
// ex  number 無法使用 split 方法
// console.log(ary4[0].split(''))
// ===== void =====
// 沒有類型
// func 沒有返回值的時候 返回值類型是 void
function showMsg() {
    // 小括號後面使用 :void 代表 func 沒有返回任何值
    console.log("void exsample");
    // return
    // return undefined  // 成功 - undefined
    // return null // 成功 - null
}
showMsg();
console.log(showMsg());
// 定義 void 類型變數 可以賦予 undefined 的值 但意義不大
var vd = undefined;
console.log(vd); // undefined
// ===== Object =====
// 定義一個函數 參數是 object 返回值也是 object
function getObj(obj) {
    console.log(obj);
    return {
        name: "kingsten",
        age: 28
    };
}
// console.log(getObj({name: 'tingten', age: 30}))
//  console.log(getObj('123')) // 錯誤
//  console.log(getObj(new String('123')))
// console.log(getObj(String))
// ===== Union 聯合 =====
// 取值的類型 可以為多種類型的其中一種  擁有多個選擇
// // ex-1 定義一個函數輸入一個 number 或 string 的值
// function getString(str: number | string): string{
//     return str.toString()
// }
// console.log(getString('123'))
// ===== 斷言 =====
// 我們必須要透過人工的方式  讓TS的檔案(編譯器)知道結果的型別長什麼樣子
// ex-1 定義一個函數 得到一個數字或string 值的長度
// 語法1: <類型>值
// 語法2: 值 as 類型
function getString(str) {
    // return str.toString().length
    // 斷定你當前 str 的變數是 string 類型
    if (str.length) {
        // return (<string>str).length
        return str.length;
    }
    else {
        return str.toString().length;
    }
}
// ===== 類型推斷 =====
// TS 會在沒有明確的指定類型的時候  推測出一個類型
// ex-1 變數賦值了  依照賦值的類型 去推斷對應的類型
var num2 = 50; // number 類型
// num2 = 'test' // 錯誤
console.log(num2);
// ex-2 變數沒有賦值的話  會被推斷為 any 類型
var txt; // any 類型
txt = 100;
txt = "txt";
console.log(txt);
var person = {
    id: 1,
    name: "fist",
    age: 28,
    sex: "女"
};
var searchString = function (source, subString) {
    return source.search(subString) > -1;
};
// const searchString: ISearchFunc = function(source: string, subString: string): boolean {
//     return source.search(subString) > -1
// }
console.log("我好帥", "帥");
var Person = /** @class */ (function () {
    function Person() {
    }
    // implements
    Person.prototype.fly = function () {
        console.log("interface class");
    };
    return Person;
}());
var person1 = new Person();
person1.fly();
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.prototype.fly = function () {
        console.log("I can fly");
    };
    Person2.prototype.swim = function () {
        console.log("I can swim");
    };
    return Person2;
}());
var person2 = new Person2();
person2.fly();
person2.swim();
var Person3 = /** @class */ (function () {
    function Person3() {
    }
    Person3.prototype.fly = function () {
        console.log("I can fly 3");
    };
    Person3.prototype.swim = function () {
        console.log("I can swim 3");
    };
    return Person3;
}());
var person3 = new Person3();
person3.fly();
person3.swim();
// 總結: interface 和 interface 之間叫繼承 (extends)  class 和 interface 之間叫實現 (implements)
// ===== class - 2 =====
// class 可以理解為 模板 (模具), 通過模板去創造 實現對象
var Person4 = /** @class */ (function () {
    // 定義建構式  用來創造對象  對屬性的值做初始化
    function Person4(name, age, gender) {
        if (name === void 0) { name = 'jkr'; }
        if (age === void 0) { age = 20; }
        if (gender === void 0) { gender = '女'; }
        // 更新對象中屬性的值
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    // 定義方法 (行為)
    Person4.prototype.sayHi = function () {
        console.log("hello my name is ".concat(this.name));
    };
    return Person4;
}());
// 建構創造對象 進行初始化操作
var person4 = new Person4('heyna', 20, '男');
person4.sayHi();
// ===== 繼承  =====
// class 與 class 之間的關係
// 繼承後 class 與 class 之間的叫法  
// A繼承B  A為子類  B為父類
var Person5 = /** @class */ (function () {
    // 定義建構式  用來創造對象  對屬性的值做初始化
    function Person5(name, age, gender) {
        // 更新對象中屬性的值
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    // 定義方法 (行為)
    Person5.prototype.sayHi = function () {
        console.log("hello my name is ".concat(this.name));
    };
    return Person5;
}());
// extend 
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, gender, desc) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.desc = desc;
        return _this;
    }
    Student.prototype.show = function () {
        console.log("hello my desc is ".concat(this.desc));
    };
    return Student;
}(Person5));
var person6 = new Person5("kT", 84, "boy");
person6.sayHi();
var stu = new Student('TT', 85, 'Girl', 'pretty');
stu.sayHi();
stu.show();
// ===== 多態 =====
// 父類型引用子類型的對象, 不同類型的對象針對相同的方法, 產生不同的行為
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function (meter) {
        if (meter === void 0) { meter = 0; }
        console.log("\u8DD1\u4E86".concat(meter, "\u7C73"), this.name);
    };
    return Animal;
}());
// 子類
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this; // 調用父類構造函數  初始化子類屬性
    }
    Dog.prototype.run = function (meter) {
        if (meter === void 0) { meter = 5; }
        console.log("\u8DD1\u4E86".concat(meter, "\u7C73"), this.name);
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.run = function (meter) {
        if (meter === void 0) { meter = 10; }
        console.log("\u8DD1\u4E86".concat(meter, "\u7C73"), this.name);
    };
    return Cat;
}(Animal));
// 實例化
var ani = new Animal('動物');
ani.run();
var dog = new Dog('來福');
dog.run();
var cat = new Cat('咪咪');
cat.run();
console.log('=============');
// 多態  --  type 類型 -> 父類  調用方法 -> 子類
var dog1 = new Dog('來福1');
dog.run();
var cat1 = new Cat('咪咪1');
cat.run();
console.log('=============');
function showRun(ani) {
    ani.run();
}
showRun(dog1);
showRun(cat1);
