// type vs interface 的不同

// 相同處

// 1. 都可以定義物件（object, function, array,
//    都可使用 readonly / 可選屬性 / 新增任意屬性 / function overload
// 2. 都可以 extend , 只是用法不同  也可互相 extend , type -> interface  interface -> type
// 3. 都可以被 class implement (( 如果是 union type 是無法的

// 不同處

// *** 介面會創建新名稱，且任何地方都可以使用, 而型別別名不會創建新名稱。舉例來說：

type Alias = { num: number }

interface Interface {
    num: number
}

declare function aliased(arg: Alias): Alias
declare function interfaced(arg: Interface): Interface

// 上面的程式碼由於型別別名不會創建新名稱，因此，interfaced 會回傳Interface(新名稱)，而 aliased 函式會回傳 { num: number }，而非 Alias

// *** 就程式碼的延展性來說，最好使用 Interface 勝於 type，但官網並沒有詳細解釋原因。

// *** 有些狀況無法使用 Interface，必須使用 union 或 tuple 型別，則使用 type。
// interface 只能表示物件格式，無法表現原始型別、列舉、元組和複合型別; Type可以表現任何型別 

// *** interface 名稱可以重複定義並合併(可擴充) ， type 不行

// interface:

interface paper {
  title: string
}

interface paper {
  id: number
}

// type:

// type paperT = {
//   title: string
// }

// type paperT = {
//   id: number
// }  // Error: Duplicate identifier 'Window'.

// *** type 可以描述 primitive type(基本型態)、tuple、union type 等, interface 無法

//primitive type
type Name = string

interface Dog {
  arfarf()
}
interface Cat {
  meow()
}

//union type
type Pet = Dog | Cat

//tuple
type PetList = [Dog, Pet]


// *** 結論

// 1.單純想表示靜態格式資料概念時使用type，希望資料被重複多方利用時使用 interface
// 2.若是原始資料型別、列舉(Enum)和元組(Tuple)型別和複合型別，通常只能使用 type 進行宣告
// 3.若是物件格式 Interface 和 Type 都可以進行宣告，但建議使用 Interface 比較彈性
// 4.Interface 和 Type 可以混用擴展，但使用 extends 和 union 或 intersection 擴展代表的含義不同：
    // 不希望再被擴充或靜態的型別格式就應該用 type 宣告 type，藉由 union 或 intersection 達成擴展
    // 希望之後被擴充或多方利用，則應該宣告成 interface，藉由 extends 去達成擴展
