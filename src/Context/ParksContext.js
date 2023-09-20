import {
    createContext,
    useContext,
    useEffect,
    useState,
    useReducer,
  } from 'react';


export const ParkContext = createContext(null);

export function ParksContextProvider({children}){
    const [parksData,setParksData] = useState(null)
    

    const value = {
        parksData :parksData,
        setParksData : setParksData,
    }

    return (
        <ParkContext.Provider value={value}>{children}</ParkContext.Provider>
    )

}



export function useParksContext(){
    const parkData = useContext(ParkContext)

    return parkData;
}