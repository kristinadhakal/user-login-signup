// USER LOGIN / SIGNUP

// HTML VARIABLES
let userEL = document.getElementsByClassName("input-label");
let signInBtn = document.getElementById("sign-in-btn");
let signUpBtn = document.getElementById("sign-up-btn");

// Global Variable
let user = [];

// SIGN UP BTN CLICKED
signUpBtn.addEventListener("click", signUpHandler);

function signUpHandler() {
  user.innerHTML = "";

for (let i = 0; i < user.length; i++) {
  if (user[i].includes(userEl.value))
  console.log("Username already in Use.")
} 
else { 
  userEL.appendCHild(user[i], i);

}
} 


// SIGN IN BTN CLICKED
signInBtn.addEventListener("click", signInHandler);

function signInHandler() {
  console.log("Sign In Btn Clicked");
}
