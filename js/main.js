// USER LOGIN / SIGNUP

//

// HTML VARIABLES
let signInBtn = document.getElementById("sign-in-btn");
let signUpBtn = document.getElementById("sign-up-btn");

// Global Variable
let users = initUsers();

// SIGN UP BTN CLICKED
signUpBtn.addEventListener("click", signUpHandler);

function signUpHandler() {
  // Get user information from input elements
  let name = document.getElementById("UpUser").value;
  let password = document.getElementById("UpPassword").value;
  let conPassword = document.getElementById("confirmPassword").value;

  // Check if username has alread been used
  let found = false;

  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      found = true;
    }
  }

  if (found) {
    console.log("Username already in Use.");
  } else {
    users.push(returnObject(name, password));
  }
}
// SIGN IN BTN CLICKED
signInBtn.addEventListener("click", signInHandler);

function signInHandler() {
  console.log("Sign In Btn Clicked");
}

// helper

// new user
function returnObject(usernameParameter, passwordParameter) {
  return {
    name: usernameParameter,
    password: passwordParameter,
  };
}

function initUsers() {
  let jsonUser = localStorage.getItem("users");
  return JSON.parse(jsonUser) ?? [];
}

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}
