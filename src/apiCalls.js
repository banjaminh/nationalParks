export async function getParks(stateID){
    try{
        const response = await fetch(`https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=${stateID}&stateCode=&api_key=uHEd1FO0v1bWCYucJw8e7sFAk8XIFUYOGKvatMr4`)
        return(response.json())
    }
    
    catch (error){
        return error;
    }
}
