import { send } from "../utilities";
let passwordInput = document.getElementById("passwordInput") as HTMLInputElement;
let usernameInput = document.getElementById("usernameInput") as HTMLInputElement;
let signupButton = document.getElementById("signupButton") as HTMLButtonElement;
signupButton.onclick = async function(){
        let userId = await send ("signup", [usernameInput.value, passwordInput.value]) as  string;
    localStorage.setItem("userId" ,userId);
    location.href ="index.html";
}
