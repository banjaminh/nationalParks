import './ParkCard.css'
import treesIcon from './national-park.png'
import {Link, useParams} from 'react-router-dom'
import PropTypes from 'prop-types'


function ParkCard({name, stateID, parkCode}){

    return (
        <div className='park-card'>
            <Link to={`/states/${stateID}/park/${parkCode}`}>
            <img src={treesIcon} alt='Trees Icon'/>
            <h3>{name}</h3>
            </Link>
        </div>
    )
}

ParkCard.propTypes = {
    name: PropTypes.string.isRequired, 
    stateID: PropTypes.string.isRequired, 
    parkCode: PropTypes.string.isRequired, 
  };

export default ParkCard