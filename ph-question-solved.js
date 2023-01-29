// ১. জাভাস্ক্রিপ্ট কি জিনিস এইটা কি জানো?

// JavaScript হল একটি স্ক্রিপ্টিং ভাষা যা গতিশীলভাবে আপডেট করার সামগ্রী তৈরি করতে, মাল্টিমিডিয়া নিয়ন্ত্রণ করতে, ছবিগুলিকে অ্যানিমেট করতে এবং আরও অনেক কিছু করতে সক্ষম করে।


// ২. জাভাস্ক্রিপ্ট কিভাবে কাজ করে সেটা কি জানো?

// JS হল একটি একক থ্রেডেড এবং একক সমবর্তী প্রোগ্রামিং ভাষা যার অর্থ এটি একটি সময়ে একটি কাজ পরিচালনা করতে পারে বা অন্য কথায়, একটি সময়ে কোডের একটি অংশ। এটি একটি ব্যাখ্যা করা প্রোগ্রামিং ভাষা, এবং বেশিরভাগ স্ক্রিপ্টিং ভাষার মতো, এটি গতিশীল টাইপিং ব্যবহার করে, যেখানে রানটাইমে টাইপ নিরাপত্তা যাচাই করা হয়।


// ৩. ভেরিয়েবল কি জিনিস?

// একটি জাভাস্ক্রিপ্ট ভেরিয়েবল কেবল স্টোরেজ অবস্থানের একটি নাম। জাভাস্ক্রিপ্টে দুই ধরনের ভেরিয়েবল আছে: লোকাল ভেরিয়েবল এবং গ্লোবাল ভেরিয়েবল। জাভাস্ক্রিপ্ট ভেরিয়েবল ঘোষণা করার সময় কিছু নিয়ম রয়েছে (এটি সনাক্তকারী হিসাবেও পরিচিত)।


// ৪. ভেরিয়েবল কিভাবে ডিক্লেয়ার করে? কখন JavaScript var ব্যবহার করবেন? কখন JavaScript const ব্যবহার করবেন?

// সর্বদা var,let, orconst দিয়ে JavaScript ভেরিয়েবল ঘোষণা করুন। var কীওয়ার্ডটি 1995 থেকে 2015 পর্যন্ত সমস্ত জাভাস্ক্রিপ্ট কোডে ব্যবহৃত হয়েছে। 2015 সালে জাভাস্ক্রিপ্টে let এবং const কীওয়ার্ড যোগ করা হয়েছিল। আপনি যদি পুরানো ব্রাউজারে আপনার কোড চালাতে চান তবে আপনাকে অবশ্যই var ব্যবহার করতে হবে। আপনি যদি একটি সাধারণ নিয়ম চান: সর্বদা const সহ ভেরিয়েবল ঘোষণা করুন। আপনি যদি মনে করেন ভেরিয়েবলের মান পরিবর্তন হতে পারে, let ব্যবহার করুন।


// ৫. ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে।

// Variable Updating:
// += , *= , -= বা /= অপারেটর ব্যবহার করে আমরা আমাদের ভেরিয়েবলগুলিকে সংক্ষিপ্ত উপায়ে আপডেট করতে পারি। এইভাবে, যখন আমরা কিছুতে তাদের বরাদ্দ করি তখন আমাদের পরিবর্তনশীল নামের পুনরাবৃত্তি করতে হবে না। তারপর আমরা i এর মান 2 দ্বারা বৃদ্ধি করি। যদি আমরা শুধুমাত্র 1 দ্বারা বৃদ্ধি বা হ্রাস করি, তাহলে আমরা যথাক্রমে ++ বা -- ব্যবহার করতে পারি।


// ৬. কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি (হিন্টস: Numeric, String, Boolean)

// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object
// The Object Datatype

// The object data type can contain:
// 1. An object
// 2. An array
// 3. A date
// Note
// A JavaScript variable can hold any type of data.
// Note
// When adding a number and a string, JavaScript will treat the number as a string.

// JavaScript Strings
// A string (or a text string) is a series of characters like "John Doe".
// Strings are written with quotes. You can use single or double quotes.
// JavaScript Numbers
// All JavaScript numbers are stored as decimal numbers (floating point).
// Numbers can be written with, or without decimals:

// JavaScript Booleans
// Booleans can only have two values: true or false.

// JavaScript Arrays
// JavaScript arrays are written with square brackets.
// Array items are separated by commas.

// JavaScript Objects
// JavaScript objects are written with curly braces {}.
// Object properties are written as name:value pairs, separated by commas.

// Undefined
// In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

// Empty Values
// An empty value has nothing to do with undefined.
// An empty string has both a legal value and a type.

// Note
// Most programming languages have many number types:
// Whole numbers (integers):
// byte (8-bit), short (16-bit), int (32-bit), long (64-bit)
// Real numbers (floating-piont):
// float (32-bit), double (64-bit).
// Javascript are always one type:
// double (64-bit floating point).


// ৭. জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো।

// Primitive data types: The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types.
// 1. Number
// 2. String
// 3. Undefined
// 4. Boolean
// 5. Null

// Non-primitive data types: The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types. It is also known as derived data types or reference data types.
// 1. Object
// 2. Array etc.

// ৮. ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো।

// JS Identifiers:
// সমস্ত জাভাস্ক্রিপ্ট ভেরিয়েবলকে অনন্য নাম দিয়ে চিহ্নিত করতে হবে।
// এই unique নামগুলিকে শনাক্তকারী বলা হয়।
// শনাক্তকারী ছোট নাম (যেমন x এবং y) বা আরও বর্ণনামূলক নাম (বয়স, যোগফল, মোট আয়তন) হতে পারে।
// ভেরিয়েবলের (অনন্য শনাক্তকারী) নাম নির্মাণের সাধারণ নিয়ম হল:
//     1. নামের অক্ষর, অঙ্ক, আন্ডারস্কোর এবং ডলার চিহ্ন থাকতে  পারে
//     2. নাম একটি অক্ষর দিয়ে শুরু করা আবশ্যক
//     3. নামগুলি $ এবং _ দিয়েও শুরু হতে পারে
//     4. নামগুলি কেস সংবেদনশীল (y এবং Y বিভিন্ন ভেরিয়েবল)
//     5. সংরক্ষিত শব্দ (যেমন জাভাস্ক্রিপ্ট কীওয়ার্ড) নাম হিসেবে ব্যবহার করা যাবে না
// Note
// JavaScript identifiers are case-sensitive.

// ৯. দুইটা ভেরিয়েবল এর মধ্যে =, -, *, /, % কিভাবে করে?
// It can be used in many ways...
// Like--------
// let a = 20;
// let b = 10;
// let sum = a + b;
// let sub = a - b;
// let mult = a * b;
// let div = a / b;
// let mod = a % b;
// console.log("Sum:",sum);
// console.log("Sub:",sub);
// console.log("Mult:",mult);
// console.log("Div:",div);
// console.log("Mod:",mod);

// ১০. শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে।

// Like:
// let a = 15;
// let sum = (a += 10);
// let sub = (a -= 5);
// let mult = (a *= 2);
// let div = (a /= 3);
// console.log(sum);
// console.log(sub);
// console.log(mult);
// console.log(div.toFixed(2));


// ১১. ++ এবং -- এর কাজ কি ? এইটা কি জানো।

// The increment operator ( ++ ) increments its operand by 1 ; that is, it adds 1 to the existing value. There's a corresponding decrement operator ( -- ) that decrements a variable's value by 1.


// ১২. parseInt, parseFloat, toFixed এইগুলা কি করে?

// স্ট্রিং এর মধ্যে যদি কোনো ইন্টিজার নাম্বার থাকে তাহলে সেই স্ট্রিং কে ইন্টিজারে রুপান্তর করা যায় parseInt এর মাধ্যমে।

// স্ট্রিং এর মধ্যে যদি কোনো দশমিক নাম্বার থাকে তাহলে সেই স্ট্রিং কে শুধু দশমিকে রুপান্তর করা যায় parseFloat এর মাধ্যমে।

// দশমিকের পরে কয় ডিজিত থাকবে সেটা নির্ধারন করে দেওয়া যায় toFixed এর মাধ্যমে।

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ১৩. Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয়?

// Why Use Arrays?
// An array can hold many values under a single name, and you can access the values by referring to an index number.
//Creating an Array
// Syntax:
// const array_name = [item1, item2, ...];


// ১৪. array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে?

// It is a common practice to declare arrays with the const keyword.
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(num.length);


// ১৫. array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়।

// Array এর ইনডেক্স সবসময় ০ থেকে শুরু হয়। ইনডেক্স আমাদেরকে Array এর পসিশন বের করতে সাহায্য করে। Array এর মান ০ থেকে এক এক করে বৃদ্ধি পায়।


// ১৬. কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায়?

// এটার মানে আমরা যে উপাদানকে খোজার চেষ্টা করছি ওইটা ঐ Array এর মধ্যে নেই।
// const num = [1, 2, 3, 4, 5];
// console.log(num.indexOf(0));


// ১৮. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে?

// const num = [1, 2, 3, 4, 5];
// num[0] = 10;
// console.log(num);


// ১৯. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?

// const num = [1, 2, 3, 4, 5];
// console.log(num.indexOf(1));


// ২০. ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে? (একটু গুগলে সার্চ দাও। আমরা কোর্স এ এইটা আলোচনা করিনি। তারপরেও চেষ্টা করে দেখো)

// const num = [];
// console.log(num.pop());


// ২১. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে?

// To add at last, we will use push
// To remove last element, we will use pop
// ----------------------------------------
// push
// ----------------------------------------
// const num = [1, 2, 3, 4];
// let lastDigitPush = num.push(5);
// console.log(num);
// --------------------------------------------
//  pop
// --------------------------------------------
// const num = [1, 2, 3, 4, 5];
// let lastDigitPop = num.pop;
// console.log(num);


// ২২. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে?

// To add at first, we will use unshift
// To remove first element, we will use shift

// ----------------------------------------
// unshift
// ----------------------------------------
// const num = [1, 2, 3, 4, 5];
// let firstDigitUnshift = num.unshift(0);
// console.log(num);

// ----------------------------------------
// unshift
// ----------------------------------------
// const num = [1, 2, 3, 4, 5];
// let firstDigitShift = num.shift();
// console.log(num);


// ২৩. তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, ।।?

// Greater than > something small
// Less than < something big
// something == something(Both Same)
// something != something(Not Same)
// something less than or equal <= with something
// something greater than or equal >= with something
// The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result.
// Example:
// console.log(1 === 1);
// console.log(1 !== 1);
// && means "and"
// || means "or"


// ২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।

// let myMoney = 55000;

// if(myMoney > 80000){
//     console.log("Ami Mac kinbo.");
// }
// else if(myMoney > 60000){
//     console.log("Gaming Laptop Kinbo.");
// }
// else if(myMoney > 40000){
//     console.log("Lenovo Yoga Kinbo");
// }
// else if(myMoney > 20000){
//     console.log("Purono Laptop Kinbo.");
// }
// else{
//     console.log("Mobile Diye Kaj Chalabo.");
// }

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ২৫. আসকে আমার মন ভালো নেই এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 

// let i = 0;
// while (i < 39) {
//     console.log("Aske amar mon valo nei.");
//     i++;
// }


// ২৬. while লুপ কিভাবে কাজ করে?

// Upar to dekho


// ২৭. for লুপ কিভাবে কাজ করে?

// for (let i = 0; i < 20; i++) {
//     console.log("I Will Be A Web Developer.");
// }


// ২৮. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়?

// Loop ajibon cholte thakbe tahole.
// let i = 0;
// while(i<39){
//     console.log("Aske amar mon valo nei.");
// }


// ২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও। 

// for (let i = 58; i <= 98; i++){
//     console.log(i);
// }


// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও।

// for (let i = 412; i <= 456; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও।

// for (let i = 581; i <= 623; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }

// ৩২.while আর for loop এর মধ্যে পার্থক্য কি?

// A for loop is a single-line command that will be executed repeatedly. While loops can be single-lined or contain multiple commands for a single condition. Both the for loop and the while loop are important in computer languages for obtaining results. The condition is met if the command syntax is correct.


// ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।

// const learning = ["Html", "Vanilla CSS", "BootStrap", "Tailwind", "JavaScript Basic"];
// for (let i = 0; i < learning.length; i++) {
//     console.log(learning[i]);
// }


// ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও। 

// let mobileUsed = ["Nokia", "Symphony", "Samsung", "Itel", "Huawei Y5", "Huawei Y7 Pro", "Huawei Y8", "IPhone", "Realme 8 pro"];
// let i = 0;
// while (i < mobileUsed.length) {
//     console.log(mobileUsed[i]);
//     i++;
// }


// ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও।

// for(let i = 30; i<=86;i++){
//     if(i==44){
//         break;
//     }
//     console.log(i);
// }


// ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।

// const bookPrice = [30, 50, 90, 120, 150, 180, 190, 200, 250, 300, 400, 500];
// let i = 0;
// while(i<bookPrice.length){
//     if(bookPrice[i]>200){
//         continue;
//     }
//     else{
//         console.log(bookPrice[i]);
//     }
//     i++;
// }