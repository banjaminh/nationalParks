import './ParkCard.css'
import treesIcon from './national-park.png'
import {Link, useParams} from 'react-router-dom'


function ParkCard({name, stateID, parkCode}){
    console.log("PARK CARD PARAMS",useParams())

    return (
        <div className='park-card'>
            <Link to={`/states/${stateID}/park/${parkCode}`}>
            <img src={treesIcon} alt='Trees Icon'/>
            <h3>{name}</h3>
            </Link>
        </div>
    )
}

export default ParkCard