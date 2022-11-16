"use strict";
// --- 基本類型 ---
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Live2_name;
let str = 'Barry';
let str1;
str1 = "Barry2";
let num = 1000;
let boo = true;
let n = null;
let un = undefined;
let test = true;
// --- 陣列 ---
let arr = ['a', 'b'];
let arr2 = [['aa', 'bb']];
// 元組
let tuple = [1, 'a', true];
let tuple2 = [['aa', 'bb']];
// --- Enum 枚舉 ---  對變數做分類
// 舉例 開直播 api -> 抓取直播狀態
// 成功 失敗 直播中
// 0 -1 1
var LiveStatus;
(function (LiveStatus) {
    LiveStatus[LiveStatus["SUCCESS"] = 0] = "SUCCESS";
    LiveStatus[LiveStatus["FAIL"] = -1] = "FAIL";
    LiveStatus[LiveStatus["LIVE"] = 1] = "LIVE";
})(LiveStatus || (LiveStatus = {}));
const statusNow = LiveStatus.SUCCESS;
// --- Union --- 
let aaa;
aaa = 1000;
aaa = 'str';
let a1;
a1 = 999;
a1 = 'str';
let b1;
b1 = true;
const obj = {
    name: 'Barry',
    desc: 'dddd',
    age: 25
};
// --- function --- 
function hello(a, b) {
    return a + b;
}
function hello2(a, b) {
    console.log(a, b);
    return 999;
}
function hello3(a, b, c) {
    return 100;
}
// undefined
function test2(a) {
    console.log(a);
}
function hello4(name, age) {
    if (age === undefined)
        return -1;
    test2(age);
    return;
}
// arrow function 
const func = () => { }; // ts 自動推倒成 void
const func2 = () => {
    return 111;
};
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = yield res.json();
    });
}
// 我們知道後端資料來的型態長甚麼樣子  但是TS的檔案並不知道也無法推倒結果的型別
// 所以我們必須要透過人工的方式  讓TS的檔案知道結果的型別長什麼樣子
// unknown
const data1 = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
};
// 假設 data1 是動態的
const beta = data1; // 先把 beta 的定義拿掉  再重新定義他的型別
// --- class --- 
// private 私有
// public 公開
// protected 受保護
class Live {
    constructor(roomName1, id1, name1) {
        console.log('建立直播中....');
        this.roomName = roomName1;
        this.id = id1;
        this.name = name1;
    }
}
class CarLive extends Live {
    constructor(roomName1, id1, name1) {
        super(roomName1, id1, name1);
    }
    start() {
        super.roomName;
        super.name;
    }
}
// 外部
const live = new Live('1號', '0001', 'Barry'); // private 跟 protected 的變數 外部訪問不到
const carLive = new CarLive('2號', '0002', 'Barry2');
// js 私有變數 寫法
class Live2 {
    constructor(name) {
        _Live2_name.set(this, void 0);
        __classPrivateFieldSet(this, _Live2_name, name, "f");
    }
}
_Live2_name = new WeakMap();
const live2 = new Live2('live2');
// console.log(live2.#name)  // error
// ts 所定義的 private ts會提醒你他是私有變數  盡量不要去操作他  但是最後打包完  log 還是看的到
// 如果要完全隱藏私有變數不被訪問  就必須使用 js #私有變數的方式  log 看不到
// --- interface 透過 class 去實作 ---
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsSUFBSSxHQUFHLEdBQVcsT0FBTyxDQUFBO0FBQ3pCLElBQUksSUFBWSxDQUFDO0FBQ2pCLElBQUksR0FBRyxRQUFRLENBQUE7QUFFZixJQUFJLEdBQUcsR0FBVyxJQUFJLENBQUE7QUFDdEIsSUFBSSxHQUFHLEdBQVksSUFBSSxDQUFBO0FBQ3ZCLElBQUksQ0FBQyxHQUFTLElBQUksQ0FBQTtBQUNsQixJQUFJLEVBQUUsR0FBYyxTQUFTLENBQUE7QUFFN0IsSUFBSSxJQUFJLEdBQVEsSUFBSSxDQUFBO0FBRXBCLGFBQWE7QUFDYixJQUFJLEdBQUcsR0FBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUM5QixJQUFJLElBQUksR0FBZSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUE7QUFFckMsS0FBSztBQUNMLElBQUksS0FBSyxHQUE4QixDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDckQsSUFBSSxNQUFNLEdBQXVCLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUUvQywwQkFBMEI7QUFFMUIsdUJBQXVCO0FBQ3ZCLFlBQVk7QUFDWixTQUFTO0FBRVQsSUFBSyxVQUlKO0FBSkQsV0FBSyxVQUFVO0lBQ2IsaURBQVcsQ0FBQTtJQUNYLDRDQUFTLENBQUE7SUFDVCwyQ0FBUSxDQUFBO0FBQ1YsQ0FBQyxFQUpJLFVBQVUsS0FBVixVQUFVLFFBSWQ7QUFFRCxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFBO0FBRXBDLGlCQUFpQjtBQUVqQixJQUFJLEdBQW9CLENBQUM7QUFDekIsR0FBRyxHQUFHLElBQUksQ0FBQTtBQUNWLEdBQUcsR0FBRyxLQUFLLENBQUE7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