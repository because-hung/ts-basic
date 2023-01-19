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



