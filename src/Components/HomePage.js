import {getParks} from '../apiCalls'

function HomePage(){

    const parkData = await getParks();

    console.log(parkData)


    return (
        <></>
    )
}