import { send } from "../utilities";
let passwordInput = document.getElementById("passwordInput") as HTMLInputElement;
let usernameInput = document.getElementById("usernameInput") as HTMLInputElement;
let loginButton = document.getElementById("loginButton") as HTMLButtonElement;
loginButton.onclick = async function () {
    let [userfound, userId] = await send ("login", [usernameInput.value, passwordInput.value]) as [boolean, string]
    console.log("user found:" + userfound)
    if (userfound){
        localStorage.setItem("userId" ,userId);
        location.href ="index.html";
    }
}

