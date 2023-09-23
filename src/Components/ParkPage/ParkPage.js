import './ParkPage.css'
import { Link , useParams, useNavigate} from 'react-router-dom'
import { useParksContext } from '../../Context/ParksContext';
import {useState, useEffect} from 'react'
import ImageView from '../ImageView/ImageView';
import {useFavoritesContext } from '../../Context/FavoritesContext';
import { getPark } from '../../apiCalls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import weatherPic from './weather-app.png'



function ParkPage(){
    const navigate = useNavigate();
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
            
            const parkData = await getPark(parkId);
            
            if(parkData !== 'Error'){
            setPark(parkData.data[0])
            }
            else{
                navigate('*')
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
       
    return (park ? (
        <div className='park-info-page'>
            <Link to={`/states/${stateID}`}><button className='back-to-map'>Back to Map</button></Link>
            
            <div className='activites-info-wrapper'>
                <div className='activities-box'>
                        <h3>Activities</h3>
                        {activities}
                </div>
                <div className='non-activities-info'>
                    <div className='header-wrapper'>
                        <h2>{park.fullName}</h2>
                        <button className='wish-list-button' onClick={(e) => {
                                    toggleFav()
                                    toggleFavorites(park)}}>
                                        <FontAwesomeIcon icon={faStar} />{isWish ? 'Remove from wish list' : 'Add to wish List'}
                        </button>
                    </div>
                    <div className='contact-wrapper'>
                        <div className='contact-box'>
                            <div className='contact-info'>
                                <div className='address'>
                                    <p>{park.addresses[0].line1}</p>
                                    <p>{park.addresses[0].city},{park.addresses[0].stateCode} {park.addresses[0].postalCode}</p>
                                </div>
                                <div className='email-phone'>
                                    <p><FontAwesomeIcon className='info-icon' icon={faEnvelope} />{park.contacts.emailAddresses[0].emailAddress}</p>
                                    {park.contacts.phoneNumbers[0] && (<p><FontAwesomeIcon className='info-icon' icon={faPhone} />{formatPhoneNumber(park.contacts.phoneNumbers[0].phoneNumber)}</p>)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='images-activities'>
                        <ImageView imageArray={park.images}/>
                    </div>
                    <div className='about-weather'>
                        <div className='description'>
                            <h3>About:</h3>
                            <p>{park.description}</p>
                        </div>
                        <div className='weather'>
                            <div className='weather-img'>
                                <img src={weatherPic} alt='weather-icon'/>
                            </div>
                            <div className='weather-info'>
                                <h3>Weather advisory:</h3>
                                <p>{park.weatherInfo}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                ) : <div>no park data</div> )
            }
            
            
            export default ParkPage
        
                        
                        
                        
                        
                    
                                

                                
    

            
                
                            
   
