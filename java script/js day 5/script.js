// js day 5 


// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }

// for ( let i= 1 ; i <+ 15; i+=2){
//     console.log(i)
// }

// for (let i = 2; i <= 10 ; i += 2){
//     console.log(i)
// }

// for (let i = 1 ; i <= 10 ; i++){
//     console.log('5 * ${i}=${5*i}');
// }


// for (let i = 10 ; i >= 1; i--){
//     console.log(i)
// }

// let count = 0;
// while (count <= 5){
//     console.log(count);
//     count++;
// }


//   for (let i = 1; i <= 3; i++) {
//     console.log(i);
//     for (let j = 1; j <= 3; j++){
//         console.log(j)
//     }
//   }

// for (let i = 1 ; i <= 5 ; i++){
//     let row = " ";
//     for(let j=1; j <= 5 ; j++){
//         row += (i*j)+"\t";
//     }
//     console.log(row);
// }
  


// for (let i = 1 ; i <= 5; i++){
//     let pattern = " ";
//     for(let j=1;j<=i;j++){
//         pattern += "*";
//     }
//     console.log(pattern);
// }

// for (let row = 1 ; row <= 4 ; row++){
//     let line = " ";
//     for (col =1 ; col <= 4; col++){
//         line += `(${row},${col})`;
//     }
//     console.log(line);
// }
    
// for (let i=5; i >= 1; i-- ){
//     let pattern = " ";
//     for (let j = 1; j <= i ; j++){
//         pattern += "*";
//     }
//     console.log(pattern);
// }


//  While loop 
// let i = 1;
// while( i <= 5){
//     console.log(i);
//     i++;
// }

// let sum = 0;
// let num = 1;

// while (sum < 50){
//     sum += num;
//     console.log(`Added ${num},sum is now ${sum}`);
//     num++;
// }
// console.log(`Final sum : ${sum}`);


// let passsword = "";
// let attempts = 0;

// while (passsword !== "secret123" && attempts < 3){
//     password = prompt ("Enter your password")
//     attempts++;

//     if(password ==="secret123"){
//         console.log("Access granted!");
// } else if (attempts <3){
//     console.log(`wrong password. ${3 - attempts}attempts remaining.`);
// }else{
//     console.log("Access denied. Too many attempts.");
// }
// }

// let num = 1000;

// while (num>1){
//     num = num/2;
//     console.log(num);
// }

//  target = 1000;
// let power = 1;
// let exponent = 0;

// while (power <= target) {
//     exponletent++;
//     power = 2 ** exponent;
// }
// console.log(`2^${exponent}=${power}is the first power of 2 greater than${target}`);

// let choice;

// do{
//     console.log("Menu");
//     console.log("1.Play");
//     console.log("2.Settings");
//     console.log("3.Exit");
//     choice = prompt("enter your choice:");

//     if (choice === "1") {
//         console.log("Starting game...");
//     } else if (choice === "2"){
//         console.log("Opening settings...");
//     }
// } while(choice !== "3");
// console.log("Goodbye!");

// let roll;
// let attempts = 0;
// do{
//     roll = Math.floor(Math.random()*6)+1;
//     attempts++;
//     console.log(`Roll ${attempts}:${roll}`);
// }while(roll !==6);

// console.log(`Got a 6 after${attempts}attempts!`);

// let balance = 1000;
// let continueTransaction;

// do{
//     let amount = Number(prompt(`Balance:$${balance}.Enter withdrawal amount:`));

//     if (amount > 0 && amount <= balance){
//         balance -= amount;
//         console.log("`withdrew:$${amount}.New balance:$${balance}");
//     }else{
//         console.log("invalid amount.");
//     }
//     continueTransation === prompt("Another transation ?(yes/no)");
// }while(continueTransaction === "yes" && balance > 0);
// console.log(`Final balance:$${balance}`);


// for (let i = 1; i <= 100;i++){
//     if(i % 7 === 0){
//         console.log(`First number divisible by 7 : ${i}`);
//         break;
//     }
// }


// search in Array

// let fruits = ["apple","banana","orange","grape","mango"];
// let searchFor = "orange";
// let fond = false;

// for(let i = 0;i <fruits.length;i++){
//     if(fruits[i] === searchFor){
//         console.log(`Found ${searchFor} at index ${i}`);
//         found=true;  
//     }
// }

// if(!found){
//     console.log(`${searchFor} not found`);
// }

// Passwords attempts limit 

// let correctPassword = "secret123";
// let maxAttempts = 3;

// for (let attempt = 1;attempt <= maxAttempts; attempts++){
//     let password = prompt (`Attempt ${attempt} : Enter password`);

//     if (password === correctPassword){
//         console.log("Access granted!");
//         break;
//     } else if (attempt === maxAttempts){
//         console.log("Access denied. No more attempts.");
//     } else {
//         console.log("Wrong password . Try again.");
//     }
// }

