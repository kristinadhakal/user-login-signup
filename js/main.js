// USER LOGIN / SIGNUP

//

// HTML VARIABLES
let userEL = document.getElementsByClassName("input-label");
let signInBtn = document.getElementById("sign-in-btn");
let signUpBtn = document.getElementById("sign-up-btn");

// Global Variable
let user = initUser();

// SIGN UP BTN CLICKED
signUpBtn.addEventListener("click", signUpHandler);

function signUpHandler() {
  user.innerHTML = "";
  returnObject(name, password);

  for (let i = 0; i < user.length; i++) {
    if (user[i].includes(userEl.value)) {
      console.log("Username already in Use.");
    } else {
      userEL.appendChild(user[i], i);
    }
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

function initUser() {
  let jsonUser = localStorage.getItem("user");
  return JSON.parse(jsonUser) ?? [];
}

function saveUser() {
  localStorage.setItem("user", JSON.stringify(user));
}
