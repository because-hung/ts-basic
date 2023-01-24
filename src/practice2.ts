// ===== class 修飾符 =====

// 修飾符 -> class 裡的成員(屬性, 構造函數, 方法) 的可訪問性
// 預設默認的修飾符為 public
// public 公共的 任何位置都可以訪問 class
// private 私有的 外部是無法訪問這個數據, 只有在 class 中才可以, 子類也無法訪問數據的
// protected 受保護的 外部是無法訪問這個數據, 只有在 class 跟 子類 中才可以

class Person6 {
  // 定義屬性
  protected name: string

  // 定義建構式  用來創造對象  對屬性的值做初始化
  public constructor(name: string) {
    // 更新對象中屬性的值
    this.name = name
  }

  // 定義方法 (行為)
  public eat() {
    console.log("吃東西", this.name)
  }
}

class Student2 extends Person6{
  constructor(name: string){
    super(name)
  }
  play(){
    console.log('play', this.name)
  }
}

const per = new Person6('Machel')
// console.log(per.name)  // private error
per.eat()
const stu2 = new Student2('macky')
stu2.play()
// console.log(stu2.name)  // protected error

// ===== readonly =====
// 加上修飾符後 就不能在外部被隨意的被修改

class Person7 {
  readonly name: string

  constructor(name: string) {
      // 在建構函數中是 可以對readonly屬性的元素 修改的
    this.name = name
    // this.name = 'TTK'  // 成功 是可以修改的  沒有多大意義
  }

  eat() {
    console.log("吃東西", this.name)
    // 在 class 中的 method 也是無法修改 readonly屬性的元素
    // this.name = "play king" 
  }
}

const per2 = new Person7('Tom')  // 可以在實例化對象 進行修改值 -> 構造函數初始化值
console.log(per2)
console.log(per2.name)
// per2.name = "Kim"
// console.log(per2.name)

 class Person8 {
  // 構造函數 用了 readonly 修飾後 參數(name)屬性 就存在在 class 中
  // 但外部還是無法進行修改的動作
  // 用了 public 後就可以進行修改
  // constructor(public name: string = 'Berry M'){
  constructor(readonly name: string = 'Berry M'){
  //  this.name = name  // 加上 readonly 後 這行就不用了
  }
 }

 // ===== 存取器 =====
 
 // 讓我們可以有效控制 對象中成員的訪問 透過 getters 和 setters 進行操作
 // get 可讀  set 可寫  兩個都有  可讀可寫
 
 class Person9 {
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string){
    this.firstName = firstName
    this.lastName = lastName
  }
  get fullName(){
    console.log('get...')
    return this.firstName + '+_+' + this.lastName
  }
  set fullName(val){
    console.log('set...')
    let names = val.split('')
    // console.log(names)
    // 重新賦值 給 firstName lastName
    this.firstName = names[0] 
    this.lastName = names[1]
  }
 }

 const per9 = new Person9('小熊', 'vivi')
 console.log(per9)
 console.log(per9.fullName)
  // set 完  呼叫 fullName 後 在跑getter return 
  // '小雞_BB'  -> (set) -- firstName:小  lastName:雞  ->  (get) -- fullName  小+_+雞
 per9.fullName = '小雞_BB'
 console.log(per9, 'set')
 console.log(per9.fullName, 'get... after')

 // ===== 靜態屬性 =====

 // 透過 static 修飾的屬性或方法 稱為 靜態成員(靜態屬性  靜態方法 )
 // 在使用的時候透過類名.語法呼叫
 // 可以不用實例化對象  就呼叫他
 // 1.靜態方法不能調用this
 // 2.不能在實例化對象使用

 class Person10 {
 static name1: string = '鳴人'

 // 構造函數  不能加  static
  constructor() {
    // this 是 實例對象  name1 是靜態屬性  不能透過實例對象直接呼叫靜態屬性來使用
  }

 static eat() {
    console.log("吃東西")
  }
}

// 實例化對象
// const per10 = new Person10('vanessa')
//  console.log(per10)
//  per10.eat()

// static
// 在使用的時候透過類名.語法呼叫

console.log(Person10.name1)
// static 可以修改
Person10.name1 = '佐助'
console.log(Person10.name1)
Person10.eat()

// ===== 抽象類 class =====
// 抽象 abstract
// 抽象類的作用是為子類服務的
// 抽象方法裡不能有具體的行為實現, 可以包含一般正常的實例方法, 抽象變數屬性也是一樣
// 抽象類不能被實例化, 是為了子類進行實例化及實現父類的抽象方法

// 舉例來說  定義一個 class Animal 和 method eat()  動物都會吃飯  但吃飯的方式不一樣(坐著吃 趴著吃)
// 吃飯總行為(大方向行為)由父類抽象方法定義  吃飯的方式不一樣(細節)由子類方法定義

abstract class Animal2 {
  abstract name:string  // 抽象變數屬性
  // 抽象方法
  abstract eat()
  // 抽象方法 不能有具體的行為實現
  //  abstract eat(){
  //   console.log('eat meat')  // error
  // }
 run(){
  console.log('run')
 }

}

// 不能實例化 抽象類的對象
// const ani = new Animal2()  // error

class Dog2 extends Animal2 {
  // 重新實現父類的抽象方法  這也是當前子類的實例方法
  name: string = 'lucky'
  eat() {
    console.log('sit to eat')
  }
}

const dog2 = new Dog2()
dog2.eat()
// 呼叫的是父類裡的實例方法
dog2.run()
console.log('name for dog2', dog2.name)


// ===== 函數 =====

// 冒號後面是 函數 return 回傳值的類型
function add(x: string, y: string): string {
  return x + y
}

const result1 = add('10','20')
console.log(result1)

const add2 = function(x: number, y: number): number {
  return x + y
}

console.log(add2(1, 5))

// 函數完整的寫法
// add3 -> 變數名
// (x: number, y: number) => number -> 函數的類型
// function(x: number, y: number): number { return x + y } 符合函數類型的值

const add3: (x: number, y: number) => number  = function(x: number, y: number): number {
  return x + y
}

console.log(add3(10, 50))

// ===== 可選參數 和 預設參數 =====

// 使用 ? 參數就會變可選參數  不一定是必填  可填可不填

// 定義一個函數
// 需求: 如果不傳入參數  那return 預設的姓氏
// 需求: 如果只傳入姓氏 return 姓氏
// 需求: 如果傳入姓和名 可以得到名字

const getFullName = function (firstName: string='NT', lastName?: string): string {
  if (lastName) {
    return firstName + '_' + lastName
  } else {
    return firstName
  }
}

console.log(getFullName())
console.log(getFullName('30'))
console.log(getFullName('30', 'money'))


// ===== 剩餘參數 =====

// ...args: string[] 為 剩餘參數, 是一個 array
// 剩餘參數 必須為參數位置中的 最後一個參數

function showMsg(str: string, ...args: string[]) {
  console.log(str) // a
  console.log(...args) // b c d e
  console.log(args) // ['b', 'c', 'd', 'e']
}

showMsg('a', 'b', 'c', 'd', 'e')


// ===== 函數重載 =====

// 需求: 有一個 add 的函數  可以接收2個 string 類型的參數進行拼接  也可以接收兩個 number 類型的參數進行相加

// 為了能夠精確地表達，輸入是數字時，輸出也應該是數字; 而輸入是字串時，輸出也應該是字串，這時候就可以使用重載定義多個 add 函式

// TS 會從由上往下逐一進行匹配，直到找到一個完全匹配的函式，否則報錯
// 官方推薦的做法是將更精確定義的重載放在上面，不具體的放下面。

// 定義重載
function add4(x: string , y: string ): string
function add4(x: number , y: number ): number

// 定義
function add4(x: string | number, y: string | number): any {
  if (typeof x === 'string' && typeof y === 'string') {
    return x + y  // 字串拼接
  } else if (typeof x === 'number' && typeof y === 'number') {
    return x + y  // 數字相加
  }
}

console.log(add4('little', 'cat'))
console.log(add4(10, 20))

// // 用重載的話  如果 x 和 y 輸入不一樣  ts 會報錯  就可以避免 bug
// // 沒用重載的話  ts 不會報錯  輸出為 undefined 會產生 bug
// console.log(add4('dog', 40))  // error
// console.log(add4(30, 'milk')) // error





