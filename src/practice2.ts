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

// 需求: 有一個 add 的函數  可以接收 2個 string 類型的參數進行拼接  也可以接收 2個 number 類型的參數進行相加

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


// ===== 泛型 =====

// 在定義 函數 接口 class 的時候  不能預先確定要使用的數據類型  而是在使用的時候  才能確定

// T 可以自定義名字 -> 大寫
function getArr<T>(val: T, count: number): T[] {

  // const arrT: T[] = []
  const arr: Array<T> = []
  for (let i = 0; i < count; i++) {
    arr.push(val)
  }
  return arr
}

// 要使用 number 類型  傳入 number
const arrNum = getArr<number>(200, 3)

// 要使用 string 類型  傳入 string
const arrStr = getArr<string>('abc', 5)

console.log(arrNum)
console.log(arrStr)

console.log(arrNum[0].toFixed(3))
console.log(arrStr[0].split(''))


// ===== 多個泛型參數 =====

function getMsg<K, V>(val1: K, val2: V): [K, V] {
  return [val1, val2]
}
 
const arr1 = getMsg<string, number>('jack', 100.234)

console.log(arr1[0].split(''))
console.log(arr1[1].toFixed(1))


// ===== 泛型 interface =====

// 定義 interface 時  為 interface 中的屬性或方法定義 泛型類型, 在使用的時候 在指定具體的類型

interface Ibase<T> {
 data: Array<T>
 add: (t: T) => T
 getUserId: (id: number) => T | undefined
}

class User {
  name: string
  age: number
  id?: number
  constructor(name: string, age: number, id?: number){
    this.name = name
    this.age = age
    this.id = id
  }
}

class UserCrud implements Ibase<User> {
  data: Array<User> = []
  add(user: User): User {
    user.id = Date.now() + Math.random()
    this.data.push(user)
    return user
  }
  getUserId(id: number): User | undefined {
    return this.data.find(user => user.id === id)
  }
}

const userCrud: UserCrud = new UserCrud()

userCrud.add(new User('jack', 20))
userCrud.add(new User('Amy', 18))
userCrud.add(new User('XXL', 25))

console.log(userCrud.data)
const { id } = userCrud.add(new User('lucy', 25))
const user = userCrud.getUserId(id)
console.log(user)

//  ===== 預設值 =====

// 沒有給 T 的話，T 預設的型別會是 string

interface WrappedValue<T = string> {
  value: T;
}


//  ===== 可以使用 extends 去限制型別  =====

// 把 extend 視為 == 比較好理解

interface WrappedValue<T extends string> {
  value: T;
}

// ⭕️ T 滿足 string 的型別
const val1: WrappedValue<'Aaron' | 'PJ'> = {
  value: 'Aaron',
};

// // ❌ T 不滿足 string 時會噴錯
// // Type 'number' does not satisfy the constraint 'string'.
// const val2: WrappedValue<number> = {
//   value: 30,
// };

// // ❌ 因為沒有給 T 預設值，所以不能留空
// // Generic type 'WrappedValue<T>' requires 1 type argument(s).
// const val3: WrappedValue = {
//   value: 30,
// };


// T7 = string
type T7 = "hank" extends "hank" ? string : number;
 
//T8、T9 = number
type T8 = "h" extends "hank" ? string : number;
type T9 = "hank" extends "h" ? string : number;
 
//T11 = string
type T10<T> = T extends "hank" ? string : number;
let T11: T10<"hank">;
 
//T13 = 'h'
type T12<T> = T extends "hank" ? string : T;
let T13: T12<"h">;

//  當我們要使用陣列的時候，我們必須要讓TS知道我們將會使用陣列，不然他會報錯

// 其實a也沒寫錯，只是他在屬性檢查的時候，會認為他是沒有屬性的狀態，也不確定接下來是不是會傳陣列當泛型，所以會提前報錯

//使用陣列屬性會報錯
// function a<T>(a: T) {
//   console.log(a.length);
// }
//可以正常使用陣列屬性
function b<T extends Array<T>>(b: T) {
  console.log(b.length);
}

// ===== infer =====

// TT1不是陣列，直接取後面never
// TT2泛型是陣列，所以宣告P是1，TT2就是1
// TT3泛型是陣列，所以宣告P是1 | “”，TT3就是union值為1 | “”

type TT<T> = T extends Array<infer P> ? P : never;
//TT1 = never
let TT1: TT<"1">;
//TT2 = 1
let TT2: TT<[1]>;
//TT3 = 1 | "" (union)
let TT3: TT<[1, ""]>;

// ===== keyof =====

// K 一定要滿足是 T 的 property
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// 直接讓 compiler 推斷型別
const value2 = getProperty({ foo: 'bar' }, 'foo');

// 或者將型別明確給入
interface IPayload {
  foo: string;
}
const value = getProperty<IPayload, 'foo'>({ foo: 'bar' }, 'foo');


// ===== Generics Constraint  =====

//  在我們使用泛型時，它會被視為「任何（any）」和「所有型別（all types）」。此時。若我們這樣寫會報錯，因為編譯器沒辦法確定 T 是否有對應的 .length 方法：
// 為了要確保 T 一定帶有 .length 這個方法，我們可以透過定義 interface 搭配 T extends Interface來的方式來限制 T 能夠使用的方法：


interface ILengthwise {
  length: number;
}

// T 一定要滿足 ILengthwise interface
function identity<T extends ILengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// // 錯誤：Argument of type 'number' is not assignable to parameter of type 'ILengthwise'
// // 因為 number 不能滿足有 length 這個 property
// const id = identity(2);

// 正確：由於有滿足 ILengthwise interface 所以可以
const result = identity({ length: 30 });

// ===== Unions and Intersection Types =====

// 聯集（Unions）：能夠符合其中一種型別即可
// 交集（Intersection）則是要能夠同時符合兩種型別
// primitive type 通常用 & 會變成 never，因為不可能同時滿足兩個 primitive type
// object 的話，該物件需要同時有 A type 中的屬性和 B type 中的屬性（少一個都不行）


/** 對於 primitive type 來說 */
type UnionPrimitive = string | number; // string | number
type IntersectionPrimitive = string & number; // never

/** 對於 object type 來說 */
type Circle = {
  color: string;
  radius: number;
};

type Rectangle = {
  color: string;
  width: number;
  height: number;
};

// 只需符合 Circle 的屬性或 Rectangle 的屬性即可
const foo: Circle | Rectangle = {
  color: 'red',
  radius: 15,
  height: 20,
};

// 需要同時帶有 Circle 和 Rectangle 中的屬性（缺一不可）
const bar: Circle & Rectangle = {
  color: 'red',
  radius: 15,
  width: 30,
  height: 20,
};

// Union Types

// 使用 Union 來定義伺服器回應的狀態

type NetworkLoadingState = {
  state: 'loading';
};

type NetworkFailedState = {
  state: 'failed';
  code: number;
};

type NetworkSuccessState = {
  state: 'success';
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

// Create a type which represents only one of the above types
// but you aren't sure which it is yet.
type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState;

// Intersection Types

// 使用 Intersection Types 為每一個 response 加上 Error Handling：

interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

interface ArtistsData {
  artists: { name: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

