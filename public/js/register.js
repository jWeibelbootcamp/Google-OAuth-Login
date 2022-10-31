const cancelBtn = document.getElementById("cancelButton");
cancelBtn.addEventListener('click', cancelFunction);
function cancelFunction (event) {
    document.location.replace("/home");
};