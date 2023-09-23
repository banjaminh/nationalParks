import './ImageView.css'

import {useState} from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';



function ImageView({imageArray}){
    const images = imageArray;
    const [index, setIndex] = useState(0);

    function changeImage () {
        const nextIndex = (index +1) % imageArray.length;
        setIndex(nextIndex);
    }
    

    return imageArray.length != 0 ? (
        <div className='image-container'>
            <img src={imageArray[index].url}></img>
            <button className='arrow-button' onClick={changeImage}>
            <FontAwesomeIcon icon={faChevronRight} className='arrow-icon'/>
            </button>
        </div>) : null
    
    }

    export default ImageView;