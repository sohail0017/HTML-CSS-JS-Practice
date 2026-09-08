// function examples


// function defination
// function greet(){
//     console.log("Welcome to JavaScript");
// }

// // funtion calling 
// greet();
// greet();

// function showmessage(){
//     console.log("learning Java script is a fun");
// }
// showmessage();


// // multiple actions in one funtion 

// function introduction (){
//     console.log("My name is javascript");
//     console.log("i was created in 1995");
//     console.log("i run on browser");
// }
// introduction();


// //  ex 1 personalised greeting

// function greetuser (name){
//     console.log("Hello,"+name+"!");
// }
// greetuser("Ali")
// greetuser("abbas")
// greetuser("sahil")

// //  ex 2 

// function sum ( a, b){
//     let sum = a + b
//     console.log("sum is: " + sum);
// }
// sum(5,5);

// //  ex 3

// function average(a,b,c){
//     let avg =(a + b + c)/3;
//     console.log(avg);
// }
// average(2,4,6);
// average(9,0,0);

// //  ex 4 

// function crtmsg (name,age){
//     console.log("My name is " +name+ " and i am " +age+ " old");
// }
// crtmsg("Reacher",28);
// crtmsg("jack",26);

// //  ex 5
// function calcArea(length,width){
//     let area = length * width
//     console.log("Area is " +area);
// }
// calcArea(12,15)
// calcArea(5,10)
// calcArea(7,3)


// Return 

// ex 1

// function sum (a,b){
//     return a + b ;
// }
// let result = sum (10,5)
// console.log(result);

// let total = sum (9,20)
// console.log(total);

// ex 2

// function mul(a, b){
//     return a * b ;
// }

// let result = mul(2,5)
// console.log(result);

// let total = mul(9,9)
// console.log(total);

// ex 3

// function test(){
//     console.log("this will print");
// return 10;
// console.log("this will never print");
// return 20 ; // ignored
// }
// test()

// ex 4

// function getprice(){
//     return 50;
// }
// let price = getprice();
// let tax = price * 0.1;
// let total = price + tax ;
// console.log(total);

// ex 5

// function getGreeting(name){
//     return " Hello " +name;
// }
// let msg = getGreeting("David")

// console.log(msg);

// console.log(getGreeting("Bob"));

// //  Understanding scope

// // 1 . Global Scope 
// // 2 . function scope
// // 3 . Block scope

// // Ex 1 Function scope 

// function showscore (){
//     let score = 100
//     console.log(score);
// }
// showscore();
// // console.log(score);  it don't work bcz it is out of the function 

// //   Ex 2

// function fun1(){
//     let x = 10;
//     console.log(x);
// }

// function fun2(){
//     let x = 20;
//     console.log(x);
// }

// fun1();
// fun2();


//  block scope 
//  Ex 3
// if (true){
//     let temp = 42;
//     console.log(temp);
// }
// // console.log(temp);

//  ex 4  Blocks scope with loops 
// for (let i = 0; i < 3 ; i++){
//     console.log(i);
// }
// // console.log(i); not works 

// //  ex 5 Block scope with curly braces 

// {
//     let secret = "Hidden "
//     console.log(secret);
// }
// // console.log(secret);

//  lexical scope 

// function outerfn(){
//     let x = 5;
//     function innerfn(){
//         console.log(x);
//     }
//     innerfn()
// }
// outerfn()

// Multiple level of Nestig 

// function level1(){
//     let a = 10;

//     function level2(){
//         let b = 20;

//         function level3(){
//             console.log(a);
//             console.log(b);
//         }
//         level3()
//     }
//     level2()
// }
// level1()


// function outerfn(){
//     function innerfn(){
//         let a = 10;
//     }
//     innerfn();
//     console.log(a);
// }
// // outerfn()  // it dont work 

// function greet(name){
//     function createmsg(){
//         return "Hello " + name;
//     }
//     console.log(createmsg());
// }
// greet("David");


// //  function Expression 
// // Ex 1 

// const multiply = function(a,b){
//     return a * b;
// }
// console.log(multiply(2,4));
// console.log(multiply(7,9));

// const sayhi = function(name){
//     console.log("Hi, "+name+ "!");
// }

// sayhi("brown")
// sayhi("David")

//  Arraw function (Modern syntax)

// const square = (num) => {
//     return num * num
// }
// console.log(square(5));
// console.log(square(9));

// //  storing different function 

// const add = function (a,b){
//     return a + b;
// }

// const sub = function (a,b){
//     return a - b;
// }

// console.log(add(2,4));
// console.log(sub(9,5));

// Higher order function 

// function repeatTask (func,n){
//     for (let i = 0; i < n; i++){
//         func();
//     }
// }
// const alertUser = () => {
//     console.log("Alert");
// };

// repeatTask(alertUser,3);

//  Ex 2 Apply discount to price 

function applydiscount (price,discountfn){
    return discountfn(price);
}
const 