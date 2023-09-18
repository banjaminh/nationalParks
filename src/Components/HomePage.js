import {getParks} from '../apiCalls'
import {useEffect, useState} from 'react'
import './HomePage.css'
import Form from './Form/Form'


function HomePage(){
    const [parkData, setParkData] = useState(null);
    const [state,setState] = useState(null)

    async function gatherParkData(state){
        const parkData = await getParks(state);
        setParkData(parkData.data)
    }
    


    console.log("ParkData:" ,parkData)


    return (
        <div className='overlay'>
            <Form setState={setState} state={state} gatherParkData={gatherParkData}/>
        </div>
    )
}

export default HomePage