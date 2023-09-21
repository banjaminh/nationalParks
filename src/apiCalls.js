export async function getParks(stateID){
    let Url = stateID ? `https://developer.nps.gov/api/v1/parks?&stateCode=${stateID}&stateCode=&api_key=uHEd1FO0v1bWCYucJw8e7sFAk8XIFUYOGKvatMr4` : 'https://developer.nps.gov/api/v1/parks?limit=1000&api_key=uHEd1FO0v1bWCYucJw8e7sFAk8XIFUYOGKvatMr4'
    try{
        const response = await fetch(Url)
        return(response.json())
    }
    
    catch (error){
        return error;
    }
}
