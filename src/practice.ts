// ===== undefined 和 null =====

let und: undefined = undefined
let nll: null = null

// undefined 和 null 都可以作為其他類型的子類型  把 undefined 和 null 賦值給其他類型的變數 如 number類型的變數

// strict: false - tsconfig.json 嚴格模式要拿掉 就可以賦值

//  let num2: number = undefined
//  let num2: number = null

// ===== 數組 =====

// 語法1: let 變數: 類型[] = [value1, value2, value3]

let ary1: number[] = [10, 20, 30]

// 語法2: let 變數: Array<類型> = [value1, value2, value3]

let ary2: Array<number> = [100, 200, 300]

// Readonly Array

let list1: readonly number[] = [1, 2, 3]; // 不能修改 Array 裡的元素
let list2: ReadonlyArray<number> = [1, 2, 3]; // 等同於上面的寫法

// ===== 元組 =====

// 定義數組的時候  類型和數據的個數位置  就已經設定.限定好了

let ary3: [string, number, boolean] = ["king", 20, true]

// ===== 枚舉 enum =====

// 類型的一個補充  常用的數據且個數是固定的0
// enum 裡面的每個數據都可以叫元素 每個元素有自己的編號  編號從0開始 遞增1 (也可以被定義)

// ex-1

enum Color {
  red,
  green,
  blue,
}

let color: Color = Color.red
console.log(color) // 0
console.log(Color.red, Color.green, Color.blue) // 0, 1, 2
console.log(Color[2]) // blue

// 可以是中文的數據元素  但是不建議

enum Gender {
  女,
  男,
}

console.log(Gender.男) // 1

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
// 只要遇到 any 型別，TS 就會跳過檢查系統，不會進行型別檢查

let any1: any = 100
any1 = "test any"

// 當一個數組要儲存多個數據 個數不確定 類型也不確定 就可以使用 any 來定義數組
let ary4: any[] = [100, "str", true]

// 缺點 可以編譯過 但不會有錯誤提示訊息

// ex  number 無法使用 split 方法

// console.log(ary4[0].split(''))

// ===== unkown =====

// any vs unknow

// 最大的差異在於 unkown 只能指派給unknown / any 型別, 這些以外的不行, 也禁止操作屬性或方法

// unknown 和 any 一樣可以接受任何型別賦值

let valUn: unknown;

valUn = true;             // 布林型別，OK
valUn = 18;               // 數字型別，OK
valUn = "Hello World";    // 字串型別，OK
valUn = [];               // 陣列型別，OK
valUn = {};               // 基礎物件型別，OK
valUn = null;             // null型別，OK
valUn = undefined;        // undefined型別，OK
valUn = new TypeError();  // Error物件，OK
valUn = Symbol("type");   // Symbol型別，OK

// unkown 只能指派給unknown / any 型別, 這些以外的不行

let val: unknown;

let val2: unknown = value;   // unknown型別，OK
let val3: any = value;       // any型別，OK
// let val3: boolean = val;   // 布林型別，Error
// let val4: number = val;    // 數字型別，Error
// let val5: string = val;    // 字串型別，Error
// let val6: object = val;    // 物件型別，Error
// let val7: any[] = val;     // 空陣列，Error
// let val8: void = val;      // 空值，Error


// unknown 禁止操作屬性或方法

let val4: unknown;

// val4.length;   // Error
// val4.trim();   // Error
// val4();        // Error
// new val4();    // Error
// val4[0];       // Error

// 實作

const foo1: unknown = 10;

// const bar3: number = foo // error -> unknown 只能指派給 unknown

// Type Guard 型別檢測
// 利用 if 限縮了型別，
// 因此 TS 可以推斷 if 裡面的型別

// foo1.toFixed(1); // error! 即使目前實際型別是數字，仍不能直接對 unknown 操作

if (typeof foo1 === 'number') {
  foo1.toFixed(1); // ok. TypeScript 推斷是 number 型別
}

if (typeof foo1 === 'string') {
  foo1.toUpperCase(); // ok. TypeScript 推斷是 string 型別
}

const foo2 = foo1 as string; // 強制轉型
foo2.toUpperCase(); // ok. 因為 foo2 現在被轉型成 string 型別

// 註記 / 斷言

// ex 1

const myPokémonJsonString =`[
  {
    "name": "皮卡丘",
    "level": 5,
    "isNormal": true
  },
  {
    "name": "閃電鳥",
    "level": 99,
    "isNormal": false
  },
  {
    "name": "大蔥鴨",
    "level": 26,
    "isNormal": true
  },
]`;

function safelyParseJson(jsonString: string): unknown {
  return JSON.parse(jsonString);
}

const getMyPokémon2 = safelyParseJson(myPokémonJsonString);

interface IPokémon {
  name: string;
  level: number;
  isNormal: boolean;
}

(getMyPokémon2 as IPokémon[]).forEach((item) => {
  console.log(item);
})

// ex 2

const value5: unknown = "Hello World";
const someString: string = value5 as string;
const otherString = someString.toUpperCase();  // "HELLO WORLD"

// 要注意的是：TS 不會執行任何特殊檢查來確保型別斷言是有效的。
// 如果斷言錯誤的型別，雖然編譯器不會報錯，但執行時仍然會有錯誤

// 特性

//寫型別註解時，因為 unknown 本身可以包含任何型別，
// 所以當 type A = string & unknown; 時，
//就像是 type A = string & (string | number | void | ....);
// 因此 A 的型別註記結果會是 string 。

//當 type B = string | unknown; 時，
// 就像是 type B = string | (string | number | void | boolean ...);
//因此 B 的型別註記結果會是 unknown。

// 跟 never 的型別註解結果剛好是顛倒過來的，
// 因為 never 是任何型別的子型別，
// 而除了any 、 unknown 之外的任何型別則像是 unknown 的子型別。



// ===== void =====

// 沒有類型

// func 沒有返回值的時候 返回值類型是 void

function showMsg(): void {
  // 小括號後面使用 :void 代表 func 沒有返回任何值
  console.log("void exsample")
  // return
  // return undefined  // 成功 - undefined
  // return null // 成功 - null
}
showMsg()
console.log(showMsg())

// 定義 void 類型變數 可以賦予 undefined 的值 但意義不大

let vd: void = undefined
console.log(vd) // undefined

// ===== Object =====

// 定義一個函數 參數是 object 返回值也是 object

function getObj(obj: object): object {
  console.log(obj)
  return {
    name: "kingsten",
    age: 28,
  }
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

// 事實上，開發者比 TS 更了解編寫的程式碼。因此，TS 允許開發者覆蓋它的推論，這樣的機制稱為「型別斷言」。
// 編譯器會接受開發者手動寫下的斷言，並且不會再送出警告錯誤。

// ex-1 定義一個函數 得到一個數字或string 值的長度
// 語法1: <類型>值
// 語法2: 值 as 類型

function getString(str: number | string): number {
  // return str.toString().length

  // 斷定你當前 str 的變數是 string 類型

  if ((<string>str).length) {
    // return (<string>str).length
    return (str as string).length
    // return (<string>str).length
  } else {
    return str.toString().length
  }
}

// ===== 類型推斷 =====

// TS 會在沒有明確的指定類型的時候  推測出一個類型

// ex-1 變數賦值了  依照賦值的類型 去推斷對應的類型

let num2 = 50 // number 類型
// num2 = 'test' // 錯誤
console.log(num2)

// ex-2 變數沒有賦值的話  會被推斷為 any 類型

let txt // any 類型
txt = 100
txt = "txt"
console.log(txt)

// ===== never =====

// 表示那些永遠不存在的值的型別，更具體來說像是：

// 應該要回傳，但卻沒有回傳值的函式（例如：如果函式內有無窮迴圈，沒有任何結束的執行點）
// 總是會拋出錯誤的函式

// 變數也可以註記為 never 型別
let nev: never

// 不能賦值

// let nev1: never = 123 // error

// never vs void

// 回傳 void 的函式不會終止函式，也就是說雖然沒有回傳值，但函式會繼續執行
// 回傳 never 型別的函式則是應該會回傳，但由於函式中斷執行或者是無限迴圈，因而永遠不會回傳或回傳錯誤的函式
  //  他的功能就如同字面上的意思 【從來沒有】，所以當一個 function 回傳 never 型別時，
  // 代表裡面已經進入了一個無窮迴圈或是例外的中斷結果，所以才會回傳 never。
// never 是所有型別的子型別，且可以賦值給所有型別
// 所有型別中都包含 never。由於 never 通常用在代表函式或方法的回傳值上，想成「任何函式或方法都可能有錯誤」就更好理解了。

// 「never 是所有型別的子型別」這句話，也就是說，任何型別都涵蓋 never ，因此，never 在聯合型別中總是會被省略
 
type example = boolean | never // 等於 type example = boolean


//  never 型別推論發生在以下情況：
  // 函式沒有回傳值或return 表達式回傳的值之型別為 never
    // 若一個函式他 100% 不會被執行完畢（或是一定會中斷），那型別推論就會是 never。
  // 函式必須不會有任何結束的執行點
    // 一個函式不能被執行到結束才可以被註解成 never 型別，
    // 只要該函式不是 100% 的幾率不能被執行結束就不能是 never

// 明確註記為 never 型別：函式必須不會有任何結束的執行點
function error(message: string): never {
  throw new Error(message);
}

// TS 推論回傳值為 Never 
function fail() {
  return error("Something failed");
}

// 明確註記為 never 型別：函式不會有任何結束的執行點
function infiniteLoop(): never {
  while (true) {
  }
}

// // 若randow < 0.5 函式有終點，報錯
// function randomFail(): never{
//   let random = Math.random()
//   if(random >0.5){
//       throw new  Error('error')////Error: A function returning 'never' cannot have a reachable end point.
//   }
// }


// ===== interface =====

// interface 是 object 的狀態(屬性)和行為(方法)的描述
// interface 是一種類型 一種規範 一種規則 一種約束 或者想像是一種能力

// ex-1 創建 "人" 的 object

// id - number - 必須的 - 唯讀
// name - string - 必須的
// age - number - 必須的
// sex - string - 可以沒有的

// 定義一個 object, 該 object 的類型就是我定義的 interface, 限定或約束 object 的屬性數據

interface IPerson {
  readonly id: number // readonly 唯讀的
  name: string
  age: number
  sex?: string // ? 可選的 可有可無的  // 好處  1.可以對可能存在的屬性 進行預先定義
}

const person: IPerson = {
  id: 1,
  name: "fist",
  age: 28,
  sex: "女",
}

// ===== function 類型 =====

// 用 interface 做 func 的類型使用

interface ISearchFunc {
  (source: string, subString: string): boolean
}

const searchString: ISearchFunc = function (source, subString) {
  return source.search(subString) > -1
}

// const searchString: ISearchFunc = function(source: string, subString: string): boolean {
//     return source.search(subString) > -1
// }

console.log("我好帥", "帥")

// let mySearch: ISearchFunc;
// mySearch = function(source: string, subString: string){
//   let result = source.search(subString);
//   return result > -1;
// }

// 在宣告 Function 的時候 parameter 的名字不一定要一樣

// interface SearchFunc{
//   (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;
// mySearch = function(src: string, sub: string): boolean{
//   let result = src.search(sub);
//   return result > -1;
// }

// 宣告也可以只宣告一次

// 之後依據同類型宣告的 Function 也會依照之前宣告的 interface 做檢查，不避在重複定義。

// interface SearchFunc{
//   (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;
// mySearch = function(src, sub) {
//     let result = src.search(sub);
//     return result > -1;
// }

// ===== class =====

// class 透過 interface 去實現

// 定義一個 class, class 的類型 就是 上述定義的 interface  (Ifly interface 約束了 當前的 person class)

interface IFly {
  fly()
}

class Person implements IFly {
  // implements
  fly() {
    console.log("interface class")
  }
}

const person1 = new Person()
person1.fly()

// 可以實現多個 interface, 同使也被多個 interface 約束

interface ISwim {
  swim()
}

class Person2 implements IFly, ISwim {
  fly() {
    console.log("I can fly")
  }
  swim() {
    console.log("I can swim")
  }
}

const person2 = new Person2()
person2.fly()
person2.swim()

// 總結: class 可以藉由 interface 去定義 class 的類型
// class 可以實現一個或多個 interface, 但要注意 interface 裡的內容都要實現


// interface 可以 繼承多個 interface

interface FlyAndSwim extends IFly, ISwim { }

class Person3 implements FlyAndSwim {
  fly() {
    console.log("I can fly 3")
  }
  swim() {
    console.log("I can swim 3")
  }
}

const person3 = new Person3()
person3.fly()
person3.swim()

// 總結: interface 和 interface 之間叫繼承 (extends)  class 和 interface 之間叫實現 (implements)


// ===== class - 2 =====

// class 可以理解為 模板 (模具), 通過模板去創造 實現對象

class Person4 {
  // 定義屬性
  name: string
  age: number
  gender: string
  
  // 定義建構式  用來創造對象  對屬性的值做初始化
  constructor(name: string = 'jkr', age: number = 20, gender: string = '女') {
    // 更新對象中屬性的值
    this.name = name
    this.age = age
    this.gender = gender
  }
  
  // 定義方法 (行為)
  sayHi(){
    console.log(`hello my name is ${this.name}`)
  }
}

// 建構創造對象 進行初始化操作
const person4 = new Person4('heyna', 20, '男')
person4.sayHi()

// ===== 繼承  =====

// class 與 class 之間的關係
// 繼承後 class 與 class 之間的叫法  
// A繼承B  A為子類  B為父類

class Person5 {
  // 定義屬性
  name: string
  age: number
  gender: string
  
  // 定義建構式  用來創造對象  對屬性的值做初始化
  constructor(name: string, age: number, gender: string) {
    // 更新對象中屬性的值
    this.name = name
    this.age = age
    this.gender = gender
  }
  
  // 定義方法 (行為)
  sayHi(){
    console.log(`hello my name is ${this.name}`)
  }
}

// extend 

class Student extends Person5 {
  desc: string;  // 新增  需要加上這個屬性  不然會有 error

  constructor(name: string, age: number, gender: string, desc: string) {
    super(name, age, gender)
    this.desc = desc
  }
show(){
  console.log(`hello my desc is ${this.desc}`)
}
// sayHi() {  // 不用 super 也行
//   super.sayHi()
// }  

}

const person6 = new Person5("kT", 84, "boy")
person6.sayHi()
const stu = new Student('TT', 85, 'Girl', 'pretty')
stu.sayHi()
stu.show()

// ===== 多態 =====

// 父類型引用子類型的對象, 不同類型的對象針對相同的方法, 產生不同的行為

class Animal { // 父類
name: string

constructor(name: string) {
  this.name = name
}

run(meter: number = 0){
  console.log(`跑了${meter}米`, this.name)
}
}

// 子類

class Dog extends Animal {
  constructor(name: string) {
    super(name) // 調用父類構造函數  初始化子類屬性
  }
  run(meter: number = 5){
    console.log(`跑了${meter}米`, this.name)
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }
  run(meter: number = 10){
    console.log(`跑了${meter}米`, this.name)
  }
}

// 實例化

const ani: Animal = new Animal('動物')
ani.run()

const dog: Dog = new Dog('來福')
dog.run()

const cat: Cat = new Cat('咪咪')
cat.run()

console.log('=============')

// 多態  --  type 類型 -> 父類  調用方法 -> 子類

const dog1: Animal = new Dog('來福1')
dog.run()

const cat1: Animal  = new Cat('咪咪1')
cat.run()

console.log('=============')

function showRun(ani: Animal){
  ani.run()
}

showRun(dog1)
showRun(cat1)


