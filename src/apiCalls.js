export async function getParks(){
    try{
        const response = await fetch('https://developer.nps.gov/api/v1/parks?api_key=uHEd1FO0v1bWCYucJw8e7sFAk8XIFUYOGKvatMr4')
    }
    
    catch (error){
        return error;

    }
}
