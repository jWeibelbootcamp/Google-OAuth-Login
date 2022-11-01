const cancelBtn = document.getElementById("cancelButton");
cancelBtn.addEventListener('click', cancelFunction);
function cancelFunction (event) {
    document.location.replace("/home");
};

const signupButton = document.getElementById("signupButton");
signupButton.addEventListener('click', signupFunction);

const signupFunction = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#username');
    const passwordEl = document.querySelector('#psw');
    const emailEl = document.querySelector('#email');

    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
        email: emailEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('Failed to sign up');
    }
  };
  