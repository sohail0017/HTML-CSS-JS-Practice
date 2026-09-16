// function saveMsg1 (){
//     return new Promise ((resolve,reject)=>{
//         let delay = Math.floor(Math.random() * 4 )
//         let isAvailableDB = Math.random() > 0.4;

//         setTimeout(()=>{

//             if (isAvailableDB) {
//                 resolve("Train 1 is Reached")    
//             } else {
//                 reject("Train 1 is crashed")
//             }
//         }, delay * 1000)

//     })
// }


// function saveMsg2(){

//     return new Promise((resolve,reject)=>{
//         let delay = Math.floor(Math.random() * 4 )
//         let isAvailableDB = Math.random() > 0.4;

//         setTimeout(()=>{

//             if (isAvailableDB) {
//                 resolve("Train 2 is Reached")    
//             } else {
//                 reject("Train 2 is crashed")
//             }
//         }, delay * 1000)

//     })
// }


// function saveMsg3 (){
//     return new Promise((resolve,reject)=>{
//         let delay = Math.floor(Math.random()*4)
//         let isAvailableDB = Math.random() > 0.4;

//         setTimeout(()=>{
//             if (isAvailableDB) {
//                 resolve("Train 3 is reached")
   
//             } else {
//               reject("Train 3 is crashed")  
//             }
//         },delay * 1000)
//     })
// }

// async function callmsgs() {
// try {
//     let msg1 = await saveMsg1();
//    console.log(msg1);

//    let msg2 = await saveMsg2();
//    console.log(msg2);

//    let msg3 = await saveMsg3();
//    console.log(msg3);

//    console.log("All trains reached successfully");
  
    
// } catch (rejectMsg) {
//     console.log(rejectMsg);
    
// }
   
// }

// callmsgs();



// async function Registar (){
//     return new Promise((resolve,reject)=>{
//         let delay = Math.floor(Math.random() * 4)
//         let isPass = Math.random() > 0.4;

//         setTimeout(()=>{
//             if (isPass) {
//                resolve("Register form submitted")
                
//             } else {
//                 reject("Register form  didn't submitted")
//             }
//         },delay)
//         } )

// }

// function sendVerificationEmail (){
//     return new Promise((resolve,reject)=>{
//         let delay = Math.floor(Math.random() * 4)
//         let isPass = Math.random() > 0.4;

//         setTimeout(()=>{
//             if (isPass) {
//                resolve("Verified by user")
                
//             } else {
//                 reject("User didn't verify")
//             }
//         },delay)
//         } )
    
// }

// function savetoDB(){
//     return new Promise((resolve,reject)=>{
//         let delay = Math.floor(Math.random() * 4)
//         let isPass = Math.random() > 0.4;

//         setTimeout(()=>{
//             if (isPass) {
//                resolve("User save to DB")
                
//             } else {
//                 reject("User not save to DB")
//             }
//         },delay)
//         } )

// }

// function welcomeSMS(){
//     return new Promise((resolve,reject)=>{
//         let delay = Math.floor(Math.random() * 4)
//         let isPass = Math.random() > 0.4;

//         setTimeout(()=>{
//             if (isPass) {
//                resolve("Welcome SMS send")
                
//             } else {
//                 reject("Welcome SMS unable to send")
//             }
//         },delay)
//         } )

// }

// async function newUserRegistration(){
//     try {
//         let response1 = await Registar()
//     console.log(response1);

//     let response2 = await sendVerificationEmail()
//     console.log(response2);
    
//     let response3 = await savetoDB()
//     console.log(response3);

//     let response4 = await welcomeSMS()
//     console.log(response4);

//     console.log("User successfully Registered and all steps completed ");

        
//     } catch (rejectMsg) {
//         console.log(rejectMsg);
//     }
    
// }

// newUserRegistration();


function checkNumber(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (num>10) {
                resolve(`success!${num} is greater than 10`)
            } else {
                reject(`success!${num} is less than 10`)
            }
        },1000);
    })

}

checkNumber().then((result)=>{

})





