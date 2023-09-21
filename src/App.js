import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage'
import Header from './Components/Header/Header'
import { ParksContextProvider } from './Context/ParksContext';
import {Routes, Route} from 'react-router-dom'
import StatePage from './Components/StatePage/StatePage'
import { FavoritesContextProvider } from './Context/FavoritesContext';
import ToVisit from './Components/ToVisit.js/ToVisit'
import ParkPage from './Components/ParkPage/ParkPage'
import StatePageLayout from './Components/Layout/StatePageLayout';
import ParkPageLayout from './Components/Layout/ParkPageLayout';

function App() {
  
  
  
  
  return (
    <ParksContextProvider>
      <FavoritesContextProvider>
        <div className="App">
          <Header />
          <div className='main-wrap'>

          <div className='routes'>

          <Routes>
            

            
            <Route path='/' element= {<HomePage/>}/>
              
            <Route path="/states/:id" element={<StatePageLayout />}>
              <Route index element={<StatePage />} /> 
              <Route path="park/:parkID" element={<ParkPage />}/>
            </Route>
                
           

          </Routes>
          </div>
          <div className='to-visit'>
            <ToVisit />
          </div>
          </div>
          
          
        </div>
      </FavoritesContextProvider>
    </ParksContextProvider>
    

          

  );
}

export default App;
