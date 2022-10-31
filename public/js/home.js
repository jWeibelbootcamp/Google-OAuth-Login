// const loginBtn = document.getElementById("login-btn");
// loginBtn.addEventListener('submit', loginFunction);
// const loginFunction = function(event) {
//     // event.preventDefault();
//     // const response = await fetch("/login", {method:"GET"});
//     // if(response.ok) {
//     //     // document.location.replace();
//     //     console.log("okay");
//     // }
//     // document.location.replace('/login');
//     window.open("/login");
// }
// // function loginFunction (event) {
// //     // fetch.request("login")
// //     const response = 
// // };

// const registerBtn = document.getElementById("register-btn");
// registerBtn.addEventListener('click', registerFunction);
// function registerFunction (event) {
//     fetch.request("register")
// };

const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener('click', loginFunction);
function loginFunction (event) {
    document.location.replace("/login");
};