import {creatDetailsToTheGame} from "./creat-game-details.js"

export class CreatGame {
    constructor(platform ,  title , imgeLink , shortDescrepshan , category , gameLink , status , longDescrepshan , price){
        this.title = title ;
        this.imgeLink = imgeLink ;
        this.shortDescrepshan = shortDescrepshan ;
        this.category = category ;
        this.gameLink = gameLink ; 
        this.status = status ;
        this.longDescrepshan = longDescrepshan ;
        this.price = price ;
        this.platform = platform ;
    }
    getGame () {
        let theGame = document.createElement("div") ;
        theGame.classList.add("game") ;

        // create imge "imageContainer"
        let imageContainer = document.createElement("div")
        imageContainer.classList.add("image-container") ;
        let image = document.createElement("img")
        image.src = this.imgeLink ;
        imageContainer.appendChild(image) ;

        // create title and price "titleAndPrice"
        let titleAndPrice = document.createElement("div")
        titleAndPrice.classList.add("title-price") ;

        let title = document.createElement("p")
        title.appendChild(document.createTextNode(this.title))
        title.classList.add("font-subheading")
        title.classList.add("game-title")


        let price = document.createElement("p") ;
        price.appendChild(document.createTextNode(this.price)) ;
        price.classList.add("font-subheading") ;
        price.classList.add("price") ; 

        let pricediv = document.createElement("div") ;
        pricediv.appendChild(price) ;

        titleAndPrice.appendChild(title) ;
        titleAndPrice.appendChild(pricediv) ;

        // create description "description"

        let description = document.createElement("p") ;
        description.appendChild(document.createTextNode(this.shortDescrepshan) ) ;
        description.classList.add("font-highlight") ;
        description.classList.add("description") ;


        // create Category and platform "CategoryAndPlatform"
        let CategoryAndPlatform = document.createElement("div")
        CategoryAndPlatform.classList.add("Category-platform") ;

        let Category = document.createElement("p") ;
        Category.appendChild(document.createTextNode(this.category)) ;
        Category.classList.add("font-subheading") ;
        Category.classList.add("Category") ; 

        let Categorydiv = document.createElement("div") ;
        Categorydiv.appendChild(Category) ;

        let platform = document.createElement("p") ;
        platform.appendChild(document.createTextNode(this.platform)) ;
        platform.classList.add("font-subheading") ;
        platform.classList.add("platform") ; 

        let platformdiv = document.createElement("div") ;
        platformdiv.appendChild(platform) ;       

        CategoryAndPlatform.appendChild(Categorydiv) ;
        CategoryAndPlatform.appendChild(platformdiv)


        // append all the items to the game
        theGame.appendChild(imageContainer) ;
        theGame.appendChild(titleAndPrice) ;
        theGame.appendChild(description) ;
        theGame.appendChild(CategoryAndPlatform) ;


        // add evnt to the game on clich open details tape 
        // title , category , platform , statas , description , imgeLink , GameLink
        
        theGame.addEventListener("click" , ()=>{
            
            creatDetailsToTheGame(this.title , 
                this.category , this.platform ,
                this.status , this.longDescrepshan ,
                this.imgeLink , this.gameLink 

            )
        })
        return theGame ;

    }
}
