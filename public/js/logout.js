// const logout = async function() {
//     const response = await fetch('/api/user/logout', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//         document.location.replace('/');
//     } else {
//         alert('You are still logged in.');
//     }
// };

// document.querySelector('#logout').addEventListener('click', logout);


var groomingBtn = document.getElementById("grooming");
groomingBtn.addEventListener('click', grooming);
function grooming(event) {
    document.location.replace("/services")
}

var daycareBtn = document.getElementById("daycare");
daycareBtn.addEventListener('click', daycare);
function daycare (event) {
    document.location.replace("/services")
}

var boardingBtn = document.getElementById("boarding");
boardingBtn.addEventListener('click', boarding);
function boarding (event) {
    document.location.replace("/services")
}