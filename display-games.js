import {request} from "./request.js" 

export async function displayGames (category){
    
    clearContainer () ;
    selectedcategory(category) ;

    let gamesContainer =  document.querySelector(".games-container") ;

    let games = await request(category) ;
    for(let game of games){
        gamesContainer.appendChild(game)
    }

}

function clearContainer (){
    let gamesContainer =  document.querySelector(".games-container") ;
    gamesContainer.innerHTML = "" ;

}

function selectedcategory(category){
    let cat = ["mmorpg" , "shooter" , "sailing" , "permadeath" , "superhero" , "pixel"]
    for(let c of cat){
        if(c == category){
            document.querySelector("."+c).classList.add("slectedCat") ;
        }else{
            document.querySelector("."+c).classList.remove("slectedCat") ;
        }
    }
}


