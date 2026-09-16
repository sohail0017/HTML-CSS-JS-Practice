//  converting an JS object into JSON

// let user = { 
//     name:"sohel",
//     course:"Full stack developer"

// }

// console.log(user);

//  const jsonValue = JSON.stringify(user)
//  console.log(jsonValue);


// let jsonstr = '{"username":"Aleem"}';

// const obj = JSON.parse(jsonstr)
// console.log(obj);


// Network calls 

// Promise chaining 

// fetch("https://dummyjson.com/todos")
// .then((resolveMsg)=>{
//     return resolveMsg.text();
// })
// .then((body)=>{
//     let result = JSON.parse(body);
//     console.log(result);
//     console.log(result.todos[1]);
// })
// .catch((rejectMsg)=>{
//     console.log(rejectMsg);
// })

// async await 

// async function getdata() {
//     const response = await fetch("https://dummyjson.com/todos")
//     const body = await response.text();
//     const obj = JSON.parse(body);
//     console.log(obj);  
// }

// getdata();


// let data;

// async function getdata() {
//     const response = await fetch("https://dummyjson.com/todos")
//     data = await response.json();

//     const h1 = document.querySelector("h1")
//     h1.innerText= data.todos[1].todo;
//     console.log(data.todos[3].todo);
    
// }
// getdata();