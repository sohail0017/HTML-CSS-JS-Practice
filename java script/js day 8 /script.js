// Modern JavaScript features 
// this. Example 1

const student = { 
    name : "Jhon",
    math:95,
    phy:80,
    eng:86,

    getAvg(){
        let avg = (this.math+this.phy+this.math)/3;
        console.log(`${this.name} got average marks: ${avg}`);
    }
}
student.getAvg();

// Bank account Example 2

const account = {
    holderName: "Jhon",
    balance: 1000,
    
    deposit(amount){
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}`);
    }
}
account.deposit(500);

// Example 3 shopping cart

const cart = {
    items : ["apple", "banana", "orange"],
    total: 3,

    addItem(item){ 
        this.items.push(item);
        this.total = this.items.length;
        console.log(`Added ${item}. Total items in cart: ${this.total}`);
    }
}
cart.addItem("grapes");


// try and catch 
// Example 1 Handling Missing Property
console.log("programs starts");

try{}