let firstName = "asif";
//Number- your age
let age = 20;
// Bollean-Wheather you"re a Student 
let isstudent= true;
// String - your favorite colour
let favoritecolour= "Black";
//Number of siblings you have
let Numberofsiblings= 2;

//part-2
console.log (typeof firstName);
console.log(typeof age);
console.log(typeof isstudent);
console.log(typeof favoritecolour );
console.log(typeof Numberofsiblings);

//part-3
//a) Variable without a value 
let score;
console.log(score);
console.log(typeof score);
//b) Variable with null value
let Winner = null;
console.log(Winner);
console.log(typeof Winner);

//problem-4
let firstName4 = "syed";
let lastname4 = "Asif";
let fullname4 = firstName4.concat("", lastname4);
console.log(fullname4);

//problem-5
let a = "5";
let b = 3;
let result = a + b;
console.log(result);
console.log(typeof result);

//problem-6
let num1 = 45;
let num2 =12;

let sum = num1 + num2
let difference = num1 - num2
let product =num1 * num2
let quotient = num1/num2
let remainder = num1 % num2

console.log("sum:",sum);
console.log("difference: " ,difference);
console.log("product:" , product);
console.log("quotient:" , quotient);
console.log("remainder:", remainder);

//problem-7
let celsius = 25;
let fahrenheit = (celsius * 9 / 5) + 32;

console.log(`${celsius}°C is equal to ${fahrenheit}°F`);

//problem-8
let radius = 7;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius * radius;

console.log ("Circumference :",circumference.toFixed(2));
console.log("Area:", area.toFixed(2));

//problem-9
let notebooks=3*45;
let pens= 2*15;
let backpack= 850;

let subtotal = notebooks + pens + backpack;
let discount = subtotal * 10 / 100;
let total = subtotal - discount;

console.log("subtotal:", subtotal);
console.log("discount:", discount);
console.log("total:", total);

//problem-10
let number = 17;
if (number % 2 === 0) {
  result = "even";
} else {
  result = "odd";
}

console.log(result);

//problem-13
let result1= ((15+5)*3-10)/4;
console.log(result1);

//problem-14
let balance = 5000;

balance += 15000; 
console.log("Balance after salary:", balance);

balance -= 8000;
console.log("Balance after rent:", balance);

balance += 5000;
console.log("Balance after bonus:", balance);

balance -= 3000;
console.log("Balance after shopping:", balance);

//problem-15
let amount = 10000;
amount *= 1.10;
console.log("year 1:", amount);

amount *= 1.10;
console.log("year 2:", amount);

amount *= 1.10;
console.log("year 3:", amount);

//problem-16
let x= 10;
let y= x++;
console.log("x:", x, "y:", y);

let a1= 10;
let b1= ++a1;
console.log("a1:", a1, "b1:", b1);

//problem-17
let countdown = 10;

console.log(countdown);
countdown--;
console.log(countdown);
countdown--;
console.log(countdown);
countdown--;
console.log(countdown);
countdown--;
console.log(countdown);
countdown--;
console.log(countdown);
countdown--;
console.log(countdown);
countdown--;
console.log(countdown);
countdown--;
console.log(countdown);
countdown--;
console.log(countdown);

//problem-8
let  num = 5;
let newnum = num ++;
newnum=++num;
console.log("num:", num, "newnum:", newnum);
