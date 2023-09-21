import {useEffect,useState} from 'react';
import {useNavigate,useParams} from 'react-router-dom'
import { useParksContext } from '../../Context/ParksContext';
import { MapContainer, TileLayer, Marker, Popup, Pane, useMap, Map } from 'react-leaflet';
import L from 'leaflet';
import './StatePage.css'
import StateParksMap from '../StateParksMap/StateParksMap'

// const parkIcon = new Icon({
//     iconUrl: 'public/parkIcon.svg',
//     iconSize: [25,25]

// })

function StatePage(){
    console.log(useParams())
    console.log("STATEPAGE")
    return (
        <div className='map' id='map'>
            <MapContainer
                center={[39.82, -98.57]}
                zoom={5}
                scrollWheelZoom={false}
            >
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <StateParksMap/>
               
            </MapContainer>
        </div>
    )
    
}


export default StatePage