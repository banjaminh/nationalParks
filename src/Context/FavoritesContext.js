import {
    createContext,
    useContext,
    useEffect,
    useState,
    useReducer,
  } from 'react';


export const FavoritesContext = createContext(null);

function toggleFavorites(favorites, setFavorites, park) {
    const updatedFavorites = [...favorites];
    const isFav = updatedFavorites.some((fav) => fav.id === park.id);
  
    if (isFav) {
      const index = updatedFavorites.findIndex((fav) => fav.id === park.id);
      if (index !== -1) {
        updatedFavorites.splice(index, 1);
      }
    } else {
      updatedFavorites.push(park);
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

export function FavoritesContextProvider({children}){
    const [favorites, setFavorites] = useState(() => {
        const storageFavorites = localStorage.getItem('favorites');
        return storageFavorites ? JSON.parse(storageFavorites) : [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites])

    const value = {
        favorites: favorites,
        toggleFavorites: (park) => toggleFavorites(favorites, setFavorites, park),
    };
  
        
    

    return (
        <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
    )

}



export function useFavoritesContext(){
    const favoritesData = useContext(FavoritesContext)

    return favoritesData;
}