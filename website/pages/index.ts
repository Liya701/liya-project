import { send } from "../utilities"
let  favcheckbox = document.querySelectorAll(".fav-container input[type='checkbox']") as NodeListOf<HTMLInputElement>;
let userId = localStorage.getItem("userId");
for(let i= 0;i< favcheckbox.length;i++) {
    favcheckbox[i].onchange = function(){
        if ( favcheckbox[i].checked){
            send("addtofavorite", [i,userId])
        }
        else{
            send("removefromfavorite", [i,userId])
        }
    }
}