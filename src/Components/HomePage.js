import {getParks} from '../apiCalls'
import {useEffect} from 'react'

function HomePage(){

    async function gatherInfo(){
        const parkData = await getParks();

        console.log("PARK DATA",parkData)
    }
    
    useEffect(() => {
        gatherInfo();
    },[])


    return (
        <></>
    )
}

export default HomePage