// EX : 1 using console.log()method 1

// console.log("Hello world");

// // ex : 2 Using alert() method

// alert("Welcome to javascript");

// ex 3

// let text = "javaScript";
// text.toUpperCase();

// ex 4
// let message ="   hello   " 
// let cleaned = message.trim();
// console.log(cleaned);

// ex 5
// let word = "Mountain";
// let result = word.slice(0, 5);
// console.log(result);

//  .trim examples 2

// let username = "   sohel.lifts   "
// let cleanusername = username.trim();
// console.log(cleanusername);

// let email = "   mdsohail@gmail.com     ";
// let cleanemail = email.trim();
// console.log(cleanemail);

// let text = "   Hello World   ";
// console.log(text.trim());

// let original = "   JavaScript is fun!   ";
// let trimmed = original.trim();
// console.log(original);
// console.log(trimmed);

// let input = "        ";
// console.log(input.trim()); // Output: "" (empty string)


// .toUpperCase() examples
// .tolowerCase() examples 3


// let greeting = "hello world";
// greeting.toUpperCase();
// console.log(greeting); // Output: "hello world" (original string remains unchanged)

// let message = "JavaScript is awesome!";
// let upper = message.toUpperCase();
// console.log(upper); // Output: "JAVASCRIPT IS AWESOME!"
// console.log(message); // Output: "JavaScript is awesome!" (original string remains unchanged)

// let text = "HELLO WORLD";
// let result = text.trim().toLowerCase();
// console.log(result); // Output: "hello world"
// console.log(text); // Output: "HELLO WORLD" (original string remains unchanged)

// let first = "Hello ";
// let second = "World";
// let combined = first + second;
// console.log(first); // Output: "Hello ";
// console.log(combined); // Output: "HelloWorld"

// case conversion examples 4


// let message = "JavaScript is fun!";
// console.log(message.toUpperCase()); // Output: "JAVASCRIPT IS FUN!"

// let shout = "STOP YELLING!";
// console.log(shout.toLowerCase()); // Output: "stop yelling!"

// let userinput = "YeS";
// if(userinput.toLowerCase() === "yes"){
//     console.log("user agreed!");
// }

// let mixedcase = "HeLLo WoRLd";
// console.log(mixedcase.toLowerCase()); // Output: "hello world"
// console.log(mixedcase.toUpperCase()); // Output: "HELLO WORLD"

// let email = "MDSOHAIL@GMAIL.COM";
// console.log(email.toLowerCase()); // Output: "mdsohail@gmail.com"


// .indexOf() examples 5

// let word = "Mohammed Sohail";
// console.log (word.indexOf("S")); // Output: 9
// console.log (word.indexOf("M")); // Output: 0
// console.log (word.indexOf("j")); // Output: -1 (not found)

// let sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.indexOf("fox")); // Output: 16
// console.log(sentence.indexOf("cat")); // Output: -1 (not found)

// let text = "hello world";
// console.log(text.indexOf("z")); // Output: -1 (not found)

// let message = "JavaScript is fun!";
// console.log(message.indexOf("java")); // Output: -1 (not found)

// let msg = "I love programming";
// if (msg.indexOf("love") !== -1) {
//     console.log("The word 'love' is present in the message.");
// }



// methods chaining examples 6

// let msg = "hello";
// let result = msg.trim().toUpperCase();
// console.log(result); // Output: "HELLO"

// let input = "   JAVASCRIPT   ";
// let output = input.trim().toLowerCase().slice(0,4);
// console.log(output); // Output: "java"

// let username = "   Sohel.lifts   ";
// let user = username.trim().toLowerCase();
// console.log(user); // Output: "sohel.lifts"

// let text = " Hello World";
// let out = text.trim().toUpperCase().replace("HELLO", "HI");
// console.log(out); // Output: "HI WORLD"

// let word = "javascript";
// console.log(word.slice(0,4).toUpperCase());
// console.log(word.toUpperCase().slice(0,4));  // same result


// slicing string 7

// let word = "Mountains";
// console.log(word.slice(0,4));
// console.log(word.slice(5));

// let text = "JavaScript";
// console.log(text.slice(4,10));

// let message = "Hello World";
// console.log(message.slice(6));

// let lang = "JavaScript";
// console.log(lang.slice(0,-6));
// console.log(lang.slice(-6));

// let name = "Alexandar";
// console.log(name.slice(0,1));
// console.log(name.slice(-1));


// Replacing substrings ex 8


// let fruit = "I Love Apple pie";
// console.log(fruit.replace("Apple","cherry"));

// let text = "I love apple pie and apple juice";
// console.log(text.replace("apple","orange")); // only first one replaces

// let message = "HELLO Hello hello";
// console.log(message.replace("Hello","Hi"))

// let txt = "Hello World";
// console.log(txt.replace(" ","-")); // space replace

// let str = "   Javascript   ";
// let input = str.trim().replace("Java","Type");
// console.log(input);

// inroduction to arrays ex 9


// let colors = ["red","green","yellow","black"];
// console.log((colors));

// let fruits = ["apple","banana","mango"]
// console.log(fruits[0]);
// console.log(fruits[2]);

// let mix = ["hello","34","true","0.98"];
// console.log(mix[1]);
// console.log(mix[3]);

// let num = ["10","20","30","40","50"];
// console.log(num.length);

// let item = ["1","2","3","4","5"];
// let input = item.length-1;
// console.log(item[input])


// Arrays and mutable ex 10 
// changing an element

// let fruits = ["Apple","banana","Mango"]
// fruits[0]="watermelon"
// console.log(fruits);

// let num =["1","2","3","4","5"];
// num[1]="6";
// num[4]="8";
// console.log(num);

// let colors = ["red","black","grey","yellow"];
// colors[colors.length-1]="green";
// console.log(colors);

// let arr = ["a","b","c"];
// arr[0]="z";
// console.log(arr); // changed 

// let str = ["abc"];
// str[0]="z"
// console.log(str); // unchanged 

// let scores = [85,90,75,88]
// if(scores[2]<80){
//     scores[2]=80;
// }
// console.log(scores);

// basic Array methods 






