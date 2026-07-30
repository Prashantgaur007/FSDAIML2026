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
// Callback function

function checkNumber(num, clbk) {
    clbk(num);
}
function oddEven(num) {
    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
}
checkNumber(7, oddEven);