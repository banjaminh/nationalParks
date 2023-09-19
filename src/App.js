import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage'
import Header from './Components/Header/Header'
import { ParksContextProvider } from './Context/ParksContext';
import {Routes, Route} from 'react-router-dom'
import StatePage from './Components/StatePage/StatePage'


function App() {
  
  
  
  
  return (
    <ParksContextProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element= {<HomePage/>}>
            
          </Route>
          <Route path='/:id' element={<StatePage/>}/>

        </Routes>
      </div>
    </ParksContextProvider>
  );
}

export default App;
