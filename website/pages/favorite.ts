import { send } from "../utilities"

let arts = document.querySelectorAll(".art") as NodeListOf<HTMLDivElement>;
let userId = localStorage.getItem("userId");

let favorite = await send (
"getfavorite"
, userId

) as boolean[];

console.log(favorite)
for(let i =0; i< favorite.length;i++) {
    if (favorite[i]){
        arts[i].style.display = "block";
        
    }
}

