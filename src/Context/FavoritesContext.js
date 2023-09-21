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
        toggleFavorites: park => {
            const isFavorite = favorites.some((fav)=> fav.id === park.id);
            if(isFavorite){
                const updatedList = favorites.filter(favs => favs.id !== park.id)
                setFavorites(updatedList)
            }
            else{
                setFavorites([...favorites, park])
            }
        }   
    }

    return (
        <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
    )

}



export function useFavoritesContext(){
    const favoritesData = useContext(FavoritesContext)

    return favoritesData;
}