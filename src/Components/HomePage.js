import {getParks} from '../apiCalls'
import {useEffect} from 'react'
import './HomePage.css'
import Form from './Form/Form'
import { useParksContext } from '../Context/ParksContext'
import React from 'react'


function HomePage(){
    const {setParksData, parksData} = useParksContext()

    
    useEffect(() => {
        async function gatherParkData(){
            try{
            const parkData = await getParks();
            setParksData(parkData.data)
            }
            catch(error){
                console.error('Error fetching park data:', error)
            }
        }
    gatherParkData();
    },[setParksData])

    return (
        <div className='overlay'>
            <Form />
        </div>
    )
}


   



export default HomePage