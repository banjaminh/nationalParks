import './ToVisit.css'
import { useFavoritesContext } from '../../Context/FavoritesContext'
import {useEffect,useState} from 'react'
import ParkCard from '../ParkCard/ParkCard'


function ToVisit () {

    const {favorites} = useFavoritesContext();
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        setWishList(favorites);
        
    },[favorites])

    const cards = wishList && wishList.map(wish => {
    return (<ParkCard
        key= {wish.id}
        id= {wish.id}
        name= {wish.fullName}/>);})

    console.log("CARDS", cards)
    return cards && (
        <div className='to-visit-container'>
            <h2>Wish List:</h2>
            {cards}
        </div>
    )
}


export default ToVisit