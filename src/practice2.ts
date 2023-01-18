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
    // this.name = 'TTK'  // 成功 是可以修改的
  }

  eat() {
    console.log("吃東西", this.name)
    // 在 class 中的 method 也是無法修改 readonly屬性的元素
    // this.name = "play king" 
  }
}

const per2: Person7 = new Person7('Tom')
console.log(per2)
console.log(per2.name)
// per2.name = "Kim"
// console.log(per2.name)
