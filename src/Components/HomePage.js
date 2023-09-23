import {getParks} from '../apiCalls'
import {useEffect} from 'react'
import './HomePage.css'
import Form from './Form/Form'
import { useParksContext } from '../Context/ParksContext'
import React from 'react'
import { useNavigate } from 'react-router-dom'


function HomePage(){
    const {setParksData, parksData} = useParksContext()
    const navigate = useNavigate()

    useEffect(() => {
        async function gatherParkData(){
            
            const parkData = await getParks();
            if(parkData !== 'Error'){
            setParksData(parkData.data)
            }
            else{
                navigate('*')
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