const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signInForm');
signInButton.addEventListener('click', function(event) {
    event.preventDefault();
   
    let user = {
        email: document.getElementById('email2').value,
        password: document.getElementById('password2').value,
    };

    console.log(user);
    
    localStorage.setItem('user', JSON.stringify(user));
    console.log(user);

    document.getElementById('form2').reset();
   
    alert('Log in succefuly!')
     console.log(user);
});