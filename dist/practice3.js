// ===== 泛型類 =====
// 定義一個類  類中屬性值的類型是不確定的  func的參數跟return 值的類型也是不確定的
class GenerNumber {
}
const g1 = new GenerNumber();
g1.value = 100;
g1.add = function (x, y) {
    return x + y;
};
console.log(g1.add(g1.value, 20));
const g2 = new GenerNumber();
g2.value = 'mini';
g2.add = function (x, y) {
    return x + y;
};
console.log(g2.add('nini-', g2.value));
function getLength(x) {
    return x.length;
}
console.log(getLength('let it go'));
// console.log(getLength<number>(104))  // error  number 沒有 length 屬性
// ===== 聲明文件 =====
// 假如我們想使用第三方函式庫 jQuery  在 ts 中，編譯器並不知道 $ 或 jQuery 是什麼東西
// 這時，我們需要使用 declare var 來定義它的型別
// 通常我們會把宣告語句放到一個單獨的檔案（jQuery.d.ts）中
// src/jQuery.d.ts
// declare var jQuery: (selector: string) => any;
jQuery('#foo');
// 或者可以直接下載 聲明文件
// npm install @types/jquery --save-dev
