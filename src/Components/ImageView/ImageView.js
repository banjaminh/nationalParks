import './ImageView.css'

import {useState} from 'react'




function ImageView({imageArray}){
    const images = imageArray;
    const [index, setIndex] = useState(0);

    function changeImage () {
        const nextIndex = (index +1) % imageArray.length;
        setIndex(nextIndex);
    }

    return (
        <div className='image-container'>
            <img src={imageArray[index].url} onClick={changeImage}></img>
            <button onClick={changeImage}>Next</button>
        </div>
    )
    }

    export default ImageView;