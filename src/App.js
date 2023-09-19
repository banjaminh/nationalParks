import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage'
import Header from './Components/Header/Header'
import { ParksContextProvider } from './Context/ParksContext';


function App() {
  
  
  
  
  return (
    <ParksContextProvider>
      <div className="App">
        <Header />
        <HomePage/>
      </div>
    </ParksContextProvider>
  );
}

export default App;
