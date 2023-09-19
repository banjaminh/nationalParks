import {getParks} from '../apiCalls'
import {useEffect, useState} from 'react'
import './HomePage.css'
import Form from './Form/Form'


function HomePage(){
    

    // async function gatherParkData(state){
    //     const parkData = await getParks(state);
    //     setParkData(parkData.data)
    // }
    


   


    return (
        <div className='overlay'>
            <Form />
        </div>
    )
}

export default HomePage