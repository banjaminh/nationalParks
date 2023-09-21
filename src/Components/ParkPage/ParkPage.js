import './ParkPage.css'
import { Link , useParams} from 'react-router-dom'
import { useParksContext } from '../../Context/ParksContext';
import {useState, useEffect} from 'react'
import ImageView from '../ImageView/ImageView';
import { FavoritesContext, useFavoritesContext } from '../../Context/FavoritesContext';


function ParkPage(){
    const stateID = useParams().id;
    const {stateParkData} = useParksContext();
    const parkId = useParams().parkID;
    const [park, setPark] = useState(() => stateParkData.find((park) => park.id === parkId) || null)
    const {favorites,toggleFavorites} = useFavoritesContext();
    const [isWish, setIsWish] = useState(false);

    useState(() => {
        if(park){
        console.log("PARK TEST")
        const result = checkIfFavorite()
        console.log("RESTUL", result)
        if(result !== undefined){
            console.log("WISH TRUE")
            setIsWish(true)
        }
    }
    },[favorites,park])

    // function addToWishList(){
    //     setFavorites([...favorites, park])
    // }
    
    function checkIfFavorite(){
        const isFav = favorites.find(favorite => favorite.id === park.id)
        return isFav
    }

    function toggleFav(){
        if(isWish){
            setIsWish(false)
        }
        else{
            setIsWish(true)
        }
    }

    const activities =  park && park.activities && park.activities.length > 0 ? (
    
            <div className='activities'>
                <h3>Activities</h3>
            <ul>
                {park.activities.map((activity) => (
                    <li key={activity.id}>{activity.name}</li>
                ))}
            </ul>
            </div>

    ) : (<p>No activites</p>)
  
    
    
    return (park ? (
        <div className='park-info-page'>
            <Link to={`/states/${stateID}`}><button className='back-to-map'>Back to Map</button></Link>
            <button onClick={(e) => {
                                    toggleFav()
                                    toggleFavorites(park)}}>{isWish ? 'Remove from wish list' : 'Add to wish List'}
            </button>
            <h2>{park.fullName}</h2>
            <p>{park.addresses[0].line1}</p>
            <p>{park.addresses[0].city}</p>
            <p>{park.addresses[0].stateCode}</p>
            <p>{park.addresses[0].postalCode}</p>
            <div className='images-activities'>
                <ImageView imageArray={park.images}/>
                {activities}
            </div>
            <p>{park.weatherInfo}</p>
            
        </div>
        ) : <div><Link to={`/states/${stateID}`}><button className='back-to-map'>Back to Map</button></Link><div>no park data</div></div> )
    
}

export default ParkPage