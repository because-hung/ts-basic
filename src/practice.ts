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

let any1: any = 100
any1 = "test any"

// 當一個數組要儲存多個數據 個數不確定 類型也不確定 就可以使用 any 來定義數組
let ary4: any[] = [100, "str", true]

// 缺點 可以編譯過 但不會有錯誤提示訊息

// ex  number 無法使用 split 方法

// console.log(ary4[0].split(''))

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

// ex-1 定義一個函數 得到一個數字或string 值的長度
// 語法1: <類型>值
// 語法2: 值 as 類型

function getString(str: number | string): number {
  // return str.toString().length

  // 斷定你當前 str 的變數是 string 類型

  if ((<string>str).length) {
    // return (<string>str).length
    return (str as string).length
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


