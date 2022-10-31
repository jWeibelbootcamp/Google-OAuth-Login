const cancelBtn = document.getElementById("cancelButton");
cancelBtn.addEventListener('click', cancelFunction);
function cancelFunction (event) {
    document.location.replace("/home");
};

const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener('click', loginFunction);
function loginFunction (event) {
    document.location.replace("/dashboard");
};