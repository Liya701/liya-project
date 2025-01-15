import { send } from "../utilities"
let  favcheckbox = document.querySelectorAll(".fav-container") as NodeListOf<HTMLDivElement>;
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