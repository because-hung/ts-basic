// ===== class 修飾符 =====
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
// 修飾符 -> class 裡的成員(屬性, 構造函數, 方法) 的可訪問性
// 預設默認的修飾符為 public
// public 公共的 任何位置都可以訪問 class
// private 私有的 外部是無法訪問這個數據, 只有在 class 中才可以, 子類也無法訪問數據的
// protected 受保護的 外部是無法訪問這個數據, 只有在 class 跟 子類 中才可以
var Person6 = /** @class */ (function () {
    // 定義建構式  用來創造對象  對屬性的值做初始化
    function Person6(name) {
        // 更新對象中屬性的值
        this.name = name;
    }
    // 定義方法 (行為)
    Person6.prototype.eat = function () {
        console.log("吃東西", this.name);
    };
    return Person6;
}());
var Student2 = /** @class */ (function (_super) {
    __extends(Student2, _super);
    function Student2(name) {
        return _super.call(this, name) || this;
    }
    Student2.prototype.play = function () {
        console.log('play', this.name);
    };
    return Student2;
}(Person6));
var per = new Person6('Machel');
// console.log(per.name)  // private error
per.eat();
var stu2 = new Student2('macky');
stu2.play();
// console.log(stu2.name)  // protected error
// ===== readonly =====
// 加上修飾符後 就不能在外部被隨意的被修改
var Person7 = /** @class */ (function () {
    function Person7(name) {
        // 在建構函數中是 可以對readonly屬性的元素 修改的
        this.name = name;
        this.name = 'TTK';
    }
    Person7.prototype.eat = function () {
        console.log("吃東西", this.name);
        // 在 class 中的 method 也是無法修改 readonly屬性的元素
        // this.name = "play king" 
    };
    return Person7;
}());
var per2 = new Person7('Tom');
console.log(per2);
console.log(per2.name);
// per2.name = "Kim"
// console.log(per2.name)
