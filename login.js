
const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');



signUpButton.addEventListener('click', function(event) {
    event.preventDefault();
   

    console.log('signUpButton');
    let user = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email1').value,
        password: document.getElementById('password1').value,
    };
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
alert('Sign up  succefully !')
    document.getElementById('form').reset();
});

