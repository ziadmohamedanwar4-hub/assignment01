// 1
let str = "123";
let result = Number(str) + 7;
console.log(result); 

// 2
let input = 0;
if (!input) {
  console.log("falsy value");
}

// 3
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// 4
let numbersList = [12, 15, 17, 20, 23];
let evens = numbersList.filter(n => n % 2 === 0);
console.log(evens); 

// 5
let first = [1, 2, 3];
let second = [4, 5, 6];
let combined = [...first, ...second];
console.log(combined); 

// 6
let dayNum = 2;
let dayName;
switch (dayNum) {
  case 1: dayName = "Sunday"; break;
  case 2: dayName = "Monday"; break;
  case 3: dayName = "Tuesday"; break;
  case 4: dayName = "Wednesday"; break;
  case 5: dayName = "Thursday"; break;
  case 6: dayName = "Friday"; break;
  case 7: dayName = "Saturday"; break;
  default: dayName = "Invalid Day";
}
console.log(dayName); 

// 7
let myWords = ["a", "ab", "abc"];
let lengths = myWords.map(w => w.length);
console.log(lengths); 

// 8
function checkDivisibility(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "Divisible by both";
  }
}
console.log(checkDivisibility(15)); 

// 9
const getSquare = x => x * x;
console.log(getSquare(5)); 

// 10
const userObj = { name: 'John', age: 25 };
function showInfo({ name, age }) {
  return name + " is " + age + " years old";
}
console.log(showInfo(userObj)); 

// 11
function sumNumbers(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumNumbers(1, 2, 3, 4, 5)); 

// 12
function delayedSuccess() {
  return new Promise((res) => {
    setTimeout(() => {
      res("Success");
    }, 3000);
  });
}
delayedSuccess().then(msg => console.log(msg));

// 13
function getMax(numbers) {
  let top = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > top) {
      top = numbers[i];
    }
  }
  return top;
}
console.log(getMax([1, 3, 7, 2, 4]));

// 14
function getObjectKeys(item) {
  return Object.keys(item);
}
const sample = { name: "ziad", age: 21 };
console.log(getObjectKeys(sample));
//15

function splitWords(sentence) {
  return sentence.split(" ");
}
const text = "The quick brown fox";
console.log(splitWords(text)); 
//...........................
//Q2 essay:
//1
//forEach: دالة للاراي بس، "مبتفهمش" break ولازم تلف على كله؛ مناسبة لو هتعمل حاجة سريعة لكل عنصر.
//for...
// of: حلقة تكرار مرنة للمصفوفات والنصوص، بتقدر توقفها بـ break مناسبة لو محتاج تحكم أكتر أو كود async.

//2
// Hoisting: الكود بيترفع لفوق (var بتبقى undefined، والدوال بتشتغل عادي قبل تعريفها).
// TDZ: المنطقة المحظورة؛ مفعولها بيخلي let و const يرموا Error لو حاولت تستخدمهم قبل سطر تعريفهم.

//3
// == (Loose Equality): بيقارن القيم بس وبيحول الأنواع لو مختلفة (مثلاً: "5" == 5 بتطلع true).
// === (Strict Equality): بيقارن القيمة ونوع البيانات مع بعض ولازم الاتنين يكونوا زي بعض (مثلاً: "5" === 5 بتطلع false).

//4
// try-catch: الـ try بتجرب الكود، ولو حصل أي Errorالcatch بتمسكه وتعالجه بدل ما البرنامج يقع (Crash).
// Importance in async: ضرورية جداً مع الـ await لأن لو ال API وقع أو حصل فشل في الشبكة، هي الطريقة الوحيدة اللي هتمسك الخطأ ده.

//5
// Type Conversion (Explicit): لما تحول النوع بنفسك وبقصد (مثلاً: String(123) بتحول الرقم لنص).
// Type Coercion (Implicit): لما JS هي اللي تحول النوع من نفسها عشان تمشي العملية (مثلاً: "5" + 2 بتطلع "52").