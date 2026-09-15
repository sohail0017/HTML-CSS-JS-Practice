// let body = document.querySelector("body")
// let h1 = document.createElement("h1");
// h1.innerText= "I'm Chameleon"
// body.insertAdjacentElement("afterbegin",h1)


// function changeColor (color,delay,callback){
//     setTimeout( ()=> {

//     h1.style.color = color
//     callback()
// } , delay )

// }

// changeColor ("red",2000,()=>{
//     changeColor("blue",2000,()=>{
//         changeColor("green",2000,()=>{
//             changeColor("purple",1000,()=>{
//                 console.log("It's done bro");
//             })
//         })
//     })
// })




// function restaurent (string,delay,callback){

//     setTimeout(() => {
//         console.log(string);
//         callback()
//     }, delay);

// }
// restaurent("Order Recieved",1000,()=>{
//     restaurent("Order Prepared",3000,()=>{
//         restaurent("Order Deliverd",3000,()=>{
//             restaurent("Order Finished",1000,()=>{})
//         })
//     })
// });


function fetchStudentdata (studentid,callback){

console.log("Fetching data for student id: ");

setTimeout(()=>{

    let studentdata = {

        id : studentid,
        name:"sohel",
        course:"Full stack development"
    }
    console.log("Data fetched successfully!");
 callback(studentdata)

},2000)
}


function displaystudentdata(){
    console.log("Display student :");
    console.log("Name:",Data.name);
    console.log("course:",);
}

fetchStudentdata(101)

