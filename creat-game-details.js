
export function creatDetailsToTheGame(title , category , platform , statas , description , imgeLink , GameLink){
    
    document.querySelector(".game-details").classList.remove("doNone");
    
    document.querySelector(".game-details .details-content img").src = imgeLink ;
    document.querySelector(".game-details .details-content .content #details-title").textContent = title ;
    document.querySelector(".game-details .details-content .content #details-category").textContent = category ;
    document.querySelector(".game-details .details-content .content #details-platform").textContent = platform ;
    document.querySelector(".game-details .details-content .content #details-status").textContent = statas ;
    document.querySelector(".game-details .details-content .content #details-description").textContent = description ;
    document.querySelector(".game-details .details-content .content a").href = GameLink ;

    document.querySelector(".game-details .details-header i").addEventListener("click" , ()=>{
        document.querySelector(".game-details").classList.add("doNone");
        document.querySelector("body").classList.remove("no-scroll") ;
    })  

    
    document.querySelector("body").classList.add("no-scroll") ;

}
