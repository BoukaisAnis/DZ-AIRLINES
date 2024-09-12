const signUpButton=document.getElementById('sigUp')
const signInButton=document.getElementById('sigIn')
const signINform=document.getElementById('signIn')
const signUpform=document.getElementById('signUp')


signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signInForm.style.display="block";
})
signInButton.addEventListener('click',function(){
signInForm.style.display="block";
signUpForm.style.display="none";

let user ={
    name : name.value,
    email: email.value,
    password: password.value,
}
localStorage.setItem('user', JSON.stringify(user));
console.log(user);
form.reset();
})