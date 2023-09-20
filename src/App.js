import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage'
import Header from './Components/Header/Header'
import { ParksContextProvider } from './Context/ParksContext';
import {Routes, Route} from 'react-router-dom'
import StatePage from './Components/StatePage/StatePage'
import { FavoritesContextProvider } from './Context/FavoritesContext';


function App() {
  
  
  
  
  return (
    <ParksContextProvider>
      <FavoritesContextProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element= {<HomePage/>}>
              
            </Route>
            <Route path='/states/:id' element={<StatePage/>}/>

          </Routes>
        </div>
      </FavoritesContextProvider>
    </ParksContextProvider>

  );
}

export default App;
