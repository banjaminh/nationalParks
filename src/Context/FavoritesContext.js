import {
    createContext,
    useContext,
    useEffect,
    useState,
    useReducer,
  } from 'react';


export const FavoritesContext = createContext(null);

export function FavoritesContextProvider({children}){
    const [favorites, setFavorites] = useState([]);

    const value = {
        favorites: favorites,
        setFavorites: setFavorites,
    }

    return (
        <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
    )

}



export function useParksContext(){
    const favoritesData = useContext(FavoritesContext)

    return favoritesData;
}