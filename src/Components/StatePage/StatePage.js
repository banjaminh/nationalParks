import {useEffect,useState} from 'react';
import {useNavigate,useParams, Link} from 'react-router-dom'
import { useParksContext } from '../../Context/ParksContext';
import { MapContainer, TileLayer, Marker, Popup, Pane, useMap, Map } from 'react-leaflet';
import L from 'leaflet';
import './StatePage.css'
import StateParksMap from '../StateParksMap/StateParksMap'



function StatePage(){
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
            <Link to='/'><button className='back-to-search'>Back to State Search</button></Link>
        </div>
    )
    
}


export default StatePage
               