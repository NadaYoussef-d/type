// var input:number;
// document.getElementById('ok').addEventListener("click",function(e){
//     input = parseInt(document.querySelector('.input').value);
//     var a = new RomanNum.roman(input);
//     document.querySelector('.label').textContent = res;
//     console.log(res);
// })
// class RomanNum {
//     static roman (num:number){
//         var romanArr:string[] =[];
//         var digits:string[] = num.toString().split("").reverse();
//         var digitLength = digits.length;
//         var romanDigitSet = [
//                     { ones: "I", fives: "V", tens: "X" },
//                     { ones: "X", fives: "L", tens: "C" },
//                     { ones: "C", fives: "D", tens: "M" },
//                     { ones: "M", fives: "", tens: ""}
//                     ];
//                   console.log("digits:",digits)
//                   for (let i = 0; i < digitLength; i++) {
//                       var n = parseInt(digits[i],10);
//                       romanArr.unshift(translator(n , romanDigitSet[i]));
//                   }
//                   return romanArr.join("");
//     }
// }
// function translator(n: number, set:{ones:string,fives:string,tens:string}):string{
//         var ones = set.ones,
//           fives = set.fives,
//           tens = set.tens;
//         if (n == 0) {
//           return "";
//         } else if (n < 4) {
//           return Array(n).fill(ones).join("");
//         } else if (n == 4) {
//           return ones.concat(fives);
//         } else if (n < 9) {
//           return fives.concat(Array(n - 5).fill(ones).join(""));
//         } else if (n == 9) {
//           return ones.concat(tens);
//         }
//         return ""
//       }
//       export default RomanNume
var num;
document.querySelector('#ok').addEventListener('click', function (e) {
    num = document.querySelector('.input').value;
    var roman = convertToRoman(num);
    console.log(roman);
    document.querySelector('.label').textContent = roman;
});
function convertToRoman(num) {
    var roman = {
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    var str = "";
    for (var _i = 0, _a = Object.keys(roman); _i < _a.length; _i++) {
        var i = _a[_i];
        var q = Math.floor(num / roman[i]);
        console.log(q);
        num -= q * roman[i];
        console.log(num);
        str += i.repeat(q);
    }
    return str;
}
