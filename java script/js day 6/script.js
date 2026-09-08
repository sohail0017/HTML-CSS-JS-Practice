// Object literals Examoles
// let student={
//     name:"sohel",
//     Age:20,
//     grade:"A"
// };
// console.log(student.name);
// console.log(student.grade);
// console.log(student["name"]);

// let product = {
//     title:"mac",
//     price : 150000,
//     instock : true
// }
// console.log(product.price);

// console.log("hello")

// let location = {
//   latitude: "28.7041 N",
//   longitude: "77.1025 E",
//   city: "Hyderabad",
// };

// let book = {
//   title: "JS Guide",
//   author: "Jhon deo",
//   pages: 350,
//   published: 2024,
// };

// let post = {
//   username: "coder_sss",
//   content: "Learning JavaScript",
//   likes: 1100,
//   comments: 23,
// };

// Accessing Object properties Examples
//  two ways ---Using dot notation // or brakets

// let student = {
//   name: "sohel",
//   age: 20,
//   city: "Hyderabad",
//   Grade: "A+",
// };
// console.log(student.name); // using dot notation
// console.log(student["name"]); //  using bracket

// let person = {
//   "first name": "jhon",
//   "last name": "cena",
// };
// console.log(person["first name"]); // if spaces in keys use bracket notation

// let key = "age";
// console.log(student[key]);

// let car = {
//   brand: "BMW",
//   model: "M5",
//   year: 2026,
// };
// console.log(car.brand);
// console.log(car["model"]);

// Modifying Object CRUD (create,Read,Update,Delete)

// ex 1 existing properties
// let student = {
//   name: "sohel",
//   age: 20,
//   city: "hyderabad",
//   Grade: "A",
// };
// console.log(student);

// student.age = 21; // updating existing property
// student.Grade = "A+";

// console.log(student);

// student.major = "computer science"; // if property is not available it will be added

// console.log(student);

// delete student.city; // deleting property 
// console.log(student);

// // Multiple Modifications
// let product = {
//     name:"phone",
//     price:40000,
// };
// console.log(product);

// product.price = 50000; // update
// product.brand = "iphone" // add
// delete product.name; // delete

// console.log(product);

// let car = {
//     Brand:"BMW"
// }
// car["model"]="M5";
// car["year"] = 2020;
 
// console.log(car);



// // Nested Objects 
// // Basic Nested Objects

// let userDatabase = {
//     user1:{name:"sohel",grade:"A",city:"Hyderabad"},
//     user2:{name:"khan",grade:"B",city:"hyderabad"},
// };
// console.log(userDatabase.user1.name);
// console.log(userDatabase.user2.name);


// let company = {
//     engineering:{employees:50,manager:"john"},
//     sales:{employees:40,manager:"david"},
//     hr:{employees:10,manager:"miller"}
// }
// console.log(company.engineering.manager);
// console.log(company.sales.employees);
// console.log(company.hr.manager);


// students records with subject 
// let students = {
//     std1:{name:"sam",math:88,phy:87},
//     std2:{name:"tom",math:74,phy:91},
// }
// console.log(students.std1.name);
// console.log(students.std2.math);

// Product inventery by category 

// let inventory = {
//     electronics : {Phones:5,laptops:2},
//     clothing : {tshirts:12,pants:10},
// }
// console.log(inventory.electronics.Phones);
// console.log(inventory.clothing.pants);

//  Accessing and modifying nested values 
// let school = {
//     classA:{students:30,Teacher:"smith"},
//     classB:{students:40,teacher:"john"}
// };

// school.classA.students = 35 ;
// school.classB.teacher = "Brad"

// console.log(school.classA.students);
// console.log(school.classB.teacher);

//  Array of Objects
// Eample 1 : List of students
// let students = [
//     {name:"Alice",age:20,grade:"B"},
//     {name:"Bob",age:21,grade:"c"},
//     {name:"sam",age:21,grade:"A"}
// ]

// console.log(students[0].name);
// console.log(students[1].age);
// console.log(students.length);

// let product = [
//     {id:101,name:"laptop",price:100000},
//     {id:102,name:"Mouse",price:2000},
//     {id:103,name:"keyboard",price:1000}
// ]

// console.log(product[0].name);
// console.log(product[2].keyboard);

// let posts = [
//     {username:"user1",content:"Hello world",likes:149},
//     {username:"user2",content:"JavaScript is fun",likes:180},
//     {username:"user3",content:"coding daily",likes:190}
// ]
// console.log(posts[1].content);
// console.log(posts[0].likes);

// // Modifying Array of Objects 

// let cars = [
//     {brand:"BMW",model:"M5",year:2020},
//     {brand:"Toyota",model:"Fortuner",year:2021},
//     {brand:"Honda",model:"verna",year:2025}
// ];

// console.log(cars[0]);
// console.log(cars[2]);
// cars[0].year = 2026;
// cars[2].model = "city";

// console.log(cars[0]);
// console.log(cars[2]);




