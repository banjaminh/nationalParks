import {useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { useParksContext } from '../../Context/ParksContext';


function StatePage(){
    const {parksData} = useParksContext();
    console.log(parksData)
    return (
        <div className='state-map-container'>

        </div>
    )
    
}


export default StatePage