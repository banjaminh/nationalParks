import {
    createContext,
    useContext,
    useState,
  } from 'react';


export const ParkContext = createContext(null);

export function ParksContextProvider({children}){
    const [parksData,setParksData] = useState(null);
    const [stateParkData,setStateParkData] = useState([]);
    

    const value = {
        parksData :parksData,
        setParksData : setParksData,
        stateParkData: stateParkData,
        setStateParkData: setStateParkData,
    }

    return (
        <ParkContext.Provider value={value}>{children}</ParkContext.Provider>
    )

}



export function useParksContext(){
    const parkData = useContext(ParkContext)

    return parkData;
}