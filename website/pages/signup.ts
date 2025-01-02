import { send } from "../utilities";

let UsernameInput = document.querySelector("#UsernameInput") as HTMLInputElement;
let PasswordInput = document.querySelector("#PasswordInput") as HTMLInputElement;
let SignupButton = document.querySelector("#SignupButton") as HTMLButtonElement;

    SignupButton.onclick = async function () {
        let userId = await send("signup", [UsernameInput.value, PasswordInput.value]) as string;
        localStorage.setItem("userId", userId);
        location.href = "index.html";
    }

