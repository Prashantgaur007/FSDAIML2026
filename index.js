// function sum(a, b) {
//   return a + b;
// }
// function sumWithMsg(clbk,msg){
//    const result=clbk(20,40);
//    console.log(msg+":" + result);
// }
// sumWithMsg(sum,"Hey calculation with js");


// function login(msg,error){
//     if(error){
//         console.log("Error: "+error);
//     }
//     else{
//         console.log("Success: "+msg);
//     }

// }

// function loginVerification(username,password,clbk){
//     if(username==="0325" && password==="0325"){
//         clbk("Login successful",null);
//     }
//     else{
//         clbk(null,"Invalid username or password");
//     }
// }
// loginVerification("0325","0325",login)
// Callback functions

// function checkNumber(num, clbk) {
//     clbk(num);
// }
// function oddEven(num) {
//     if (num % 2 === 0) {
//         console.log(num + " is Even");
//     } else {
//         console.log(num + " is Odd");
//     }
// }
// checkNumber(7, oddEven);
// console.log("1st");
// setTimeout(() => {
//     console.log("2nd");
// }, 1000);
// for (let i = 0; i < 100; i++) {
//     console.log("second");
// }
// console.log("3rd");
// console.log("4th");


// setTimeout(() => {console.log("1st");
//     setTimeout(() => {console.log("2nd");
//         setTimeout(() => {console.log("3rd");
//             setTimeout(() => {console.log("4th");   
//                 setTimeout(() => {console.log("5th");
//                     setTimeout(() => {console.log("6th");
//                          setTimeout(() => {console.log("7th");
//                             setTimeout(() => {console.log("8th");
//                                 setTimeout(() => {console.log("9th");
//                                     setTimeout(() => {console.log("10th");
//                                         setTimeout(() => {console.log("11th");
//                                         }, 1000);
//                                     }, 1000);
//                                 }, 1000);
//                             }, 1000);
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//      }, 1000);
// }, 1000);

// callback hell
// setTimeout(() => {}, 1000);
// promises

const myPromise = new Promise((resolve, reject) => {
    username = "prashant";
    password = "0325";
    if (username === "prashant" && password == "0325") {
        resolve("Login successful");
    } else {
        reject("Invalid username or password");
    }})
    // myPromise.then((msg) => {
    //     console.log("Success: " + msg);
    // }).catch((error) => {
    //     console.log("Error: " + error);
    //     }).finally(() => {
    //         console.log("Login process completed"); 
    // });

    async function handlelogin(){
        try{
            await myPromise.then((msg) => {
                console.log("Success: " + msg);
            })
        }catch(error){
            console.log("Error: "+error);
        }
        finally{
            console.log("Login process completed");
        }
    }
    handlelogin();
