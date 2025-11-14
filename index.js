import { displayGames } from "./display-games.js";

// click Open category options
const displayCategory = document.querySelector(".hamburger") ;

displayCategory.addEventListener("click" , ()=>{
    let category = document.querySelector("ul")
    category.classList.toggle("display-non")
})

let categories = document.querySelectorAll(".gamecategory")
for(let cat of categories){
    cat.addEventListener("click" , function(){
        displayGames(this.textContent.trim())
    })
}


displayGames("mmorpg");





