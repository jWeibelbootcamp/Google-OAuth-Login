const cancelBtn = document.getElementById("cancelButton");
cancelBtn.addEventListener('click', cancelFunction);
function cancelFunction (event) {
    document.location.replace("/home");
};

// needs an advent listener but doesnt work anyways 
const loginBtnFunction = async function(event) {
    event.preventDefault();
  
    // might cause an error cause same id name as register form?
    const usernameEl = document.querySelector('username');
    const passwordEl = document.querySelector('psw');

  
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log("username" + usernameEl);
  
    // if (response.ok) {
    //   document.location.replace('/dashboard');
    // } else {
    //   alert('Failed to login');
    // }
  };


