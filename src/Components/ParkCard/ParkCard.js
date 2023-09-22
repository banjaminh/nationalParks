import './ParkCard.css'
import treesIcon from './national-park.png'


function ParkCard({name}){


    return (
        <div className='park-card'>
            <img src={treesIcon} alt='Trees Icon'/>
            <h3>{name}</h3>
        </div>
    )
}

export default ParkCard