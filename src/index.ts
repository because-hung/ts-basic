// --- 基本類型 ---

let str: string = 'Barry'
let str1: string;
str1 = "Barry2"

let num: number = 1000
let boo: boolean = true
let n: null = null
let un: undefined = undefined

let test: any = true

// --- 陣列 ---
let arr: string[] = ['a', 'b']
let arr2: string[][] = [['aa', 'bb']]

// 元組
let tuple: [number, string, boolean] = [1, 'a', true]
let tuple2: [string, string][] = [['aa', 'bb']]

// --- Enum 枚舉 ---  對變數做分類

// 舉例 開直播 api -> 抓取直播狀態
// 成功 失敗 直播中
// 0 -1 1

enum LiveStatus {
  SUCCESS = 0,
  FAIL = -1,
  LIVE = 1
}

const statusNow = LiveStatus.SUCCESS

// --- Union --- 

let aaa: number | string;
aaa = 1000
aaa = 'str'

// --- type --- 自定義類型 

type A = number | string
type B = boolean | string

let a1: A
a1 = 999
a1 = 'str'

let b1: B
b1 = true

// --- interface --- 

interface User {
  name: string;
  age: number;
}

// 物件


type Card = {  // type 不可擴充
  name: string
  desc: string
}

// type Card = {  // type 不可擴充 會變成重複宣告
//   age: number
// }


interface Card2 {  // interface 可以擴充
  name: string
  desc: string
}

interface Card2 {  // 2個 interface 會融合
  age?: number  // ? 是可選  可以選擇要不要填入  不填入不會報錯 ex: number | undefined , 問號拿掉就是必選  必須填入  不然會報錯
}

const obj: Card2 = {
  name: 'Barry',
  desc: 'dddd',
  age: 25
}

// --- function --- 


function hello (a: string, b: string) {
  return a + b
}

function hello2 (a: string, b: string): number {
  console.log(a , b)
  return 999
}

function hello3 (a: number, b: string, c: boolean) {
  return 100
}

// undefined

function test2 (a: number) {
  console.log(a)
}

function hello4 (name: string, age?: number) {  // 可選必須放在必選後面  不然會報錯
  if(age === undefined) return -1
  test2(age)
  return 
}


// arrow function 

const func = () => {} // ts 自動推倒成 void

const func2 = () => { // ts 自動推倒成 number
  return 111
}

// --- 斷言 / 註記 as unknown --- 

type Data = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await res.json() as Data
  
}

// 我們知道後端資料來的型態長甚麼樣子  但是TS的檔案並不知道也無法推倒結果的型別
// 所以我們必須要透過人工的方式  讓TS的檔案知道結果的型別長什麼樣子

// unknown

const data1: Data = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}

type Beta = {
    name: string
}

// 假設 data1 是動態的
const beta = data1 as unknown as Beta  // 先把 beta 的定義拿掉  再重新定義他的型別

// --- class --- 

// private 私有
// public 公開
// protected 受保護

class Live {
  roomName: string
  private id: string
  protected name: string  // protected 跟 private 的不同是 protect 可以在繼承後 在內部使用super 訪問到 , private 則不行

  constructor (roomName1: string, id1: string, name1: string) {
   console.log('建立直播中....')
   this.roomName = roomName1
   this.id = id1
   this.name = name1
  }

}

class CarLive extends Live {
  constructor (roomName1: string, id1: string, name1: string) {
    super(roomName1, id1, name1)
  }

  start() {
    super.roomName
    super.name
  }
}

// 外部
const live = new Live('1號', '0001', 'Barry')  // private 跟 protected 的變數 外部訪問不到
const carLive = new CarLive('2號', '0002', 'Barry2')

// js 私有變數 寫法

class Live2 {
  #name
  constructor (name: string) {
    this.#name = name
  }
}

const live2 = new Live2('live2')
// console.log(live2.#name)  // error

// ts 所定義的 private ts會提醒你他是私有變數  盡量不要去操作他  但是最後打包完  log 還是看的到
// 如果要完全隱藏私有變數不被訪問  就必須使用 js #私有變數的方式  log 看不到


// --- interface 透過 class 去實作 ---

interface CarProps {  // 可以 export
  name: string
  age: number
  start: () => void
}

class Car implements CarProps {
  name: string
  age: number

  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }

  start() {}
}

// --- 泛型 ---  // 我去調用這個 function 的時候  才去定義他是甚麼類型

  // func

function print<T> (data: T) {  // T 可以自己取名
  console.log('data', data)
}

print<number>(999)
print<string>('Barry')
print<boolean>(true)

  // class

class Print<T> {
  data: T
  constructor(d: T) {
    this.data = d
  }
}

const p = new Print<number>(999)
const p1 = new Print<string>('bruce')
console.log('p', p)
console.log('p1', p1)

// --- utility ---  有 Ts 寫好的工具 可以去引用

// record

// 定義兩個type 帶入物件

interface CatInfo {
  age: number;
  breed: string;
}
 
type CatName = "miffy" | "boris" | "mordred";

// key - CatName
// value - CatInfo
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

console.log(cats)

//  不指定的方向

const obj1: Record<string, boolean> = {
  name: true,
  //age: 123  - number - error
}

//  pick

  // interface 裡面有東西可以重複共用  在新增 type 的時候 pick 出來 加入
  // 可以從現有的 interface 去建立一個全新的  type

// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
// }
   
// type TodoPreview = Pick<Todo, "title" | "completed">;
   
// const todo: TodoPreview = {
//     title: "Clean room",
//     completed: false,
// };
   
// todo;

// omit

  // 跟 pick 相反  去省略掉不要的元素

interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}
   
type TodoPreview = Omit<Todo, "description">;
   
const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
};
   
todo;  