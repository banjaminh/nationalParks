import './ImageView.css'

import {useState} from 'react'
import PropTypes from 'prop-types'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons';



function ImageView({imageArray}){
    const [index, setIndex] = useState(0);

    function changeImage (direction) {
        let nextIndex = direction === 'up' ? index + 1 : index - 1;
        if(nextIndex < 0){
            nextIndex = imageArray.length -1;
        }
        else if(nextIndex >= imageArray.length){
            nextIndex = 0;
        }
        setIndex(nextIndex);
    }
    

    return imageArray.length != 0 ? (
        <div className='image-container'>
            <button className='arrow-button' onClick={() =>changeImage('down')}>
                <FontAwesomeIcon icon={faChevronLeft} className='arrow-icon'/>
            </button>
            <img src={imageArray[index].url} alt={`Image number ${index}`}></img>
            <button className='arrow-button' onClick={() => changeImage('up')}>
            <FontAwesomeIcon icon={faChevronRight} className='arrow-icon'/>
            </button>
        </div>) : null
    
    }
    
    ImageView.propTypes = {
        imageArray: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string.isRequired,
          })
        ).isRequired,
      };

    export default ImageView;