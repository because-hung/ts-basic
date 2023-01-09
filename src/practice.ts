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

let ary3: [string, number, boolean] = ['king', 20, true]

// ===== 枚舉 enum =====

// 類型的一個補充  常用的數據且個數是固定的0
// enum 裡面的每個數據都可以叫元素 每個元素有自己的編號  編號從0開始 遞增1 (也可以被定義)

// ex-1

enum Color{
    red,
    green,
    blue
}

let color: Color = Color.red 
console.log(color) // 0
console.log(Color.red, Color.green, Color.blue) // 0, 1, 2
console.log(Color[2]) // blue

// 可以是中文的數據元素  但是不建議

enum Gender {
    女,
    男
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
any1 = 'test any'

// 當一個數組要儲存多個數據 個數不確定 類型也不確定 就可以使用 any 來定義數組
let ary4: any[] = [100, 'str', true]

// 缺點 可以編譯過 但不會有錯誤提示訊息 

// ex  number 無法使用 split 方法

// console.log(ary4[0].split(''))

// ===== void =====
// 沒有類型

// func 沒有返回值的時候 返回值類型是 void

function showMsg(): void{  // 小括號後面使用 :void 代表 func 沒有返回任何值
    console.log('void exsample')
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
        name: 'kingsten',
        age: 28
    }
}

// console.log(getObj({name: 'tingten', age: 30}))

//  console.log(getObj('123')) // 錯誤 

//  console.log(getObj(new String('123')))

 
// console.log(getObj(String))