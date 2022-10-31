const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener('click', loginFunction);
function loginFunction (event) {
    res.render("login")
};

const registerBtn = document.getElementById("register-btn");
registerBtn.addEventListener('click', registerFunction);
function registerFunction (event) {
    res.render("register")
};