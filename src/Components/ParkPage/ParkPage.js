import './ParkPage.css'
import { Link , useParams} from 'react-router-dom'
import { useParksContext } from '../../Context/ParksContext';
import {useState, useEffect} from 'react'
import ImageView from '../ImageView/ImageView';
import { FavoritesContext, useFavoritesContext } from '../../Context/FavoritesContext';
import { getPark } from '../../apiCalls';


function ParkPage(){
    const stateID = useParams().id;

    const {stateParkData} = useParksContext();
    const parkId = useParams().parkID;
   
    const [park, setPark] = useState(null)
   
    const {favorites,toggleFavorites} = useFavoritesContext();
    const [isWish, setIsWish] = useState(false);
   
    useEffect(() => {
        const selectedPark = stateParkData.find((park) => park.parkCode === parkId) || null;
        setPark(selectedPark);
        if(!selectedPark){
            const favPark = favorites.find((favorite) => favorite.parkCode === parkId)
            setPark(favPark)
        }
      }, [parkId, stateParkData]);

    const isPageRefreshed = () => {
        return window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD;
      };


    useEffect(() => {
        if(park){
        const result = checkIfFavorite()
        if(result !== undefined){
            setIsWish(true)
        }
    }
    },[favorites,park])

    useEffect(() => {
        if(isPageRefreshed()){
        async function gatherParkData(){
            try{
            const parkData = await getPark(parkId);
            console.log("Single Park Data", parkData)
            
            setPark(parkData.data[0])
            }
            catch(error){
                console.error('Error fetching park data:', error)
            }
        }
      
    gatherParkData();}
    },[parkId])
    
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
  
    
    console.log("PARK BEFORE RETURN ", park)
    return (park ? (
        <div className='park-info-page'>
            <Link to={`/states/${stateID}`}><button className='back-to-map'>Back to Map</button></Link>
            <button onClick={(e) => {
                                    toggleFav()
                                    toggleFavorites(park)}}>{isWish ? 'Remove from wish list' : 'Add to wish List'}
            </button>
            <h2>{park.fullName}</h2>
            {park.addressses && park.addresses[0] && (
                <>
            <p>{park.addresses[0].line1}</p>
            <p>{park.addresses[0].city}</p>
            <p>{park.addresses[0].stateCode}</p>
            <p>{park.addresses[0].postalCode}</p> </>)}
            <div className='images-activities'>
                <ImageView imageArray={park.images}/>
                {activities}
            </div>
            <p>{park.weatherInfo}</p>
            
        </div>
        ) : <div><Link to={`/states/${stateID}`}><button className='back-to-map'>Back to Map</button></Link><div>no park data</div></div> )
    
}

export default ParkPage