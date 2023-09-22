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

    console.log("WISH LIST ", wishList)
    const cards = wishList && wishList.map(wish => {
        let stateID = wish.states.slice(0,2)
    return (<ParkCard
        stateID = {stateID}
        key= {wish.id}
        id= {wish.id}
        parkCode = {wish.parkCode}
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