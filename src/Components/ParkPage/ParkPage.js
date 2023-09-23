import './ParkPage.css'
import { Link , useParams} from 'react-router-dom'
import { useParksContext } from '../../Context/ParksContext';
import {useState, useEffect} from 'react'
import ImageView from '../ImageView/ImageView';
import { FavoritesContext, useFavoritesContext } from '../../Context/FavoritesContext';
import { getPark } from '../../apiCalls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


function ParkPage(){
    const stateID = useParams().id;

    const {stateParkData} = useParksContext();
    const parkId = useParams().parkID;
   
    const [park, setPark] = useState(null)
   
    const {favorites,toggleFavorites} = useFavoritesContext();
    const [isWish, setIsWish] = useState(false);

    function formatPhoneNumber(number) {
        const strNum = `${number}`;
        return `(${strNum.substring(0, 3)}) ${strNum.substring(
          3,
          6
        )}-${strNum.substring(6, 10)}`;
      }
   
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
    
            
            <ul>
                {park.activities.map((activity) => (
                    <li key={activity.id}>{activity.name}</li>
                ))}
            </ul>
           

    ) : (<p>No activites</p>)
  
    
    console.log("PARK BEFORE RETURN ", park)
    return (park ? (
        <div className='park-info-page'>
            <Link to={`/states/${stateID}`}><button className='back-to-map'>Back to Map</button></Link>
            <button className='wish-list-button' onClick={(e) => {
                                    toggleFav()
                                    toggleFavorites(park)}}>
                                        <FontAwesomeIcon icon={faStar} />{isWish ? 'Remove from wish list' : 'Add to wish List'}
            </button>
            <h2>{park.fullName}</h2>
            <div className='contact-box'>
                <div className='contact-title'>
                    <p>Contact:</p>
                </div>
                <div className='contact-info'>
                    <div className='address'>
                        <p>{park.addresses[0].line1}</p>
                        <p>{park.addresses[0].city}</p>
                        <p>{park.addresses[0].stateCode}</p>
                        <p>{park.addresses[0].postalCode}</p> 
                    </div>
                    <div className='email-phone'>
                        <p><FontAwesomeIcon icon={faEnvelope} />{park.contacts.emailAddresses[0].emailAddress}</p>
                        {park.contacts.phoneNumbers[0] && (<p><FontAwesomeIcon icon={faPhone} />{formatPhoneNumber(park.contacts.phoneNumbers[0].phoneNumber)}</p>)}
                    </div>
                </div>
            </div>
            <div className='images-activities'>
                <div className='description'>
                    <h3>About:</h3>
                    <p>{park.description}</p>
                </div>
                <ImageView imageArray={park.images}/>
                
            </div>
            <div className='activites-weather'>
                <div className='activities-box'>
                        <h3>Activities</h3>
                        {activities}
                </div>
                <div className='weather'>
                    <h3>Weather advisory:</h3>
                    <p>{park.weatherInfo}</p>
                </div>
            </div>
            
        </div>
        ) : <div>no park data</div> )
    
}


export default ParkPage

            
                