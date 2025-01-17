import { send } from "../utilities"

let UsernameInput = document.querySelector("#UsernameInput") as HTMLInputElement;
let PasswordInput = document.querySelector("#PasswordInput") as HTMLInputElement;
let LoginButton = document.querySelector("#LoginButton") as HTMLButtonElement;

LoginButton.onclick = async function () {
    let userId = await send("login", [UsernameInput.value, PasswordInput.value]) as string | null;

    if (userId != null) {
        localStorage.setItem("userId", userId);
        location.href = "index.html";
    }
}
