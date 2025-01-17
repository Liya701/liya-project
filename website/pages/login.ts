import { send } from "../utilities"

let UsernameInput = document.querySelector("#UsernameInput") as HTMLInputElement;
let PasswordInput = document.querySelector("#PasswordInput") as HTMLInputElement;
let LoginButton = document.querySelector("#LoginButton") as HTMLButtonElement;

    LoginButton.onclick = async function () {
        let [userFound, userId] = await send("login", [UsernameInput.value, PasswordInput.value]) as [boolean, string];
        console.log("User found:" + userFound);

        if (userId!=null) {
            localStorage.setItem("userId", userId);
            location.href = "index.html";
        } 
        }
       