import {CreatGame} from "./creat-game.js"

export async function request (category){
    
	document.getElementById("loader").classList.remove("doNone");
	
	const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
	    method: 'GET',
	    headers: {
		    'x-rapidapi-key': '4430ba99b3mshb6d542d2d4a75dap105a9djsn1bd924e91fbf',
		    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	    }
    };

    try{
        const response = await fetch(url, options);
        const result = await response.json();

        let games = await Promise.all(result.map(async (item) => {
    	let rezaltOfRequestById = await requestById(item.id);
    	let game = new CreatGame(
        	item.platform,
        	item.title,
        	item.thumbnail,
        	item.short_description,
        	item.genre,
        	item.game_url,
        	rezaltOfRequestById.status,
        	rezaltOfRequestById.longDescription,
        	item.price ? item.price : "Free"
    	);
    	return game.getGame();
}));

return games;


    }catch (error) {
	    console.error(error);
    }finally {
        
        setTimeout(()=>{
			document.getElementById("loader").classList.add("doNone");
		} , 100)
		
    }

    
    

}


async function requestById (id){
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
	    method: 'GET',
	    headers: {
		    'x-rapidapi-key': '4430ba99b3mshb6d542d2d4a75dap105a9djsn1bd924e91fbf',
		    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	    }
    };

    try {
	    const response = await fetch(url, options);
	    const result = await response.json();
	    

		return { status: result.status, longDescription: result.description }; 

    } catch (error) {
	    console.error(error);
    }
}



