import { MapContainer, TileLayer, Marker, Popup, Pane, useMap, Map } from 'react-leaflet';
import L from 'leaflet';
import './StateParksMap.css'
import { useParksContext } from '../../Context/ParksContext';
import {useEffect,useState} from 'react'
import {Icon} from 'leaflet'
import {useParams, Link} from 'react-router-dom'
import { getParks } from '../../apiCalls';

const parkIcon = new Icon({
  iconUrl: require('./blackparkIcon.png'),
  iconSize: [40,40]

})

function StateParksMap() {
    const map = useMap();
    const {parksData} = useParksContext();
    const [stateData, setStateData] = useState([]);

    const stateIDParams = useParams().id
    
    useEffect(() => {
        async function gatherParkData(){
            try{
            const stateParkData = await getParks(stateIDParams);
            console.log("StateParkData", stateParkData)
            
            setStateData(stateParkData.data)
            }
            catch(error){
                console.error('Error fetching park data:', error)
            }
        }
    gatherParkData();
    },[stateIDParams])

   
  
      


    const mapPoints = stateData.map(park => {
        return <Marker key={park.id} id={park.id} position={[park.latitude, park.longitude]} icon={parkIcon} >
            <Popup>
              <Link to={`/states/${stateIDParams}/park/${park.id}`}>
                <div className='park-popup'>
                    <p>{park.fullName}</p>
                    {park.images[0] && <img src={park.images[0].url} alt={park.images[0].altText}/>}
                </div>
              </Link>
            </Popup>
        </Marker> })
    

    useEffect(() => {
      if(stateData.length > 0){
      const distanceObject = calculateFurthestDistance(stateData);
      console.log("DISTANCE OBJECT",distanceObject)
      let cornerA = L.latLng(distanceObject.corner1);
      let cornerB = L.latLng(distanceObject.corner2);
      let bounds = L.latLngBounds(cornerA, cornerB);
      map.flyToBounds(bounds)
      }
    },[stateData, map])
    

    function calculateDistance(lat1, long1, lat2, long2) {
        let latRad1 = (Number(lat1) * Math.PI) / 180;
        let latRad2 = (Number(lat2) * Math.PI) / 180;
        let longRad1 = (Number(long1) * Math.PI) / 180;
        let longRad2 = (Number(long2) * Math.PI) / 180;
        const distance =
          3958 *
          Math.acos(
            Math.sin(latRad1) * Math.sin(latRad2) +
              Math.cos(latRad1) * Math.cos(latRad2) * Math.cos(longRad2 - longRad1),
          );
        return distance;
      }

    function calculateFurthestDistance(parksData) {
        let largestDistance = parksData.reduce(
          (acc, currentPark, index) => {
            parksData.slice(index + 1).forEach(park => {
              let distance = calculateDistance(
                currentPark.latitude,
                currentPark.longitude,
                park.latitude,
                park.longitude,
              );
              if (distance > acc.distance) {
                acc.distance = distance;
                acc.corner1 = [currentPark.latitude, currentPark.longitude];
                acc.corner2 = [park.latitude, park.longitude];
              }
            });
            return acc;
          },
          { distance: 0, corner1: [], corner2: [] },
        );
        return largestDistance;
      }
    
    function calculateCenter(filteredBreweries) {
        let longSum = 0;
        let latSum = 0;
        filteredBreweries.forEach(brewery => {
          latSum += Number(brewery.latitude);
          longSum += Number(brewery.longitude);
        });
    
        let mapCenter = {
          latCenter: latSum / filteredBreweries.length,
          longCenter: longSum / filteredBreweries.length,
        };
        return mapCenter;
    }



    
    // console.log("PARKS DATA",parksData)
    // const mapPoints = parksData.map(park => {
    //     return <Marker key={park.id} id={park.id} position={[park.latitude, park.longitude]} ></Marker> })
    
    // map.flyTo([59.0518 ,-156.112], 15)
    return (
        <>{mapPoints}</>
    )
}


export default StateParksMap