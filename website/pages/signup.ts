import { send } from "../utilities";
let passwordInput = document.getElementById("passwordInput") as HTMLInputElement;
let usernameInput = document.getElementById("usernameInput") as HTMLInputElement;
let signupButton = document.getElementById("signupButton") as HTMLInputElement;
signupButton.onclick = async function(){
        let [userfound, userId] = await send ("login", [usernameInput.value, passwordInput.value]) as [boolean, string]
    send ("signup",[usernameInput.value, passwordInput.value]);
    if(userfound){
    localStorage.setItem("userId" ,userId);
    location.href ="index.html";
}
}