import './ToVisit.css'
import { useFavoritesContext } from '../../Context/FavoritesContext'
import {useEffect,useState} from 'react'


function ToVisit () {

    const {favorites} = useFavoritesContext();
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        setWishList(favorites);
        
    },[favorites])

    const cards = wishList && wishList.map(wish => {
    return (<p>{wish.fullName}</p>);})

    console.log("CARDS", cards)
    return cards && (
        <div className='to-visit-container'>
            {cards}
        </div>
    )
}


export default ToVisit