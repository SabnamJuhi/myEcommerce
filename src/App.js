
import './App.css';

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import MenuPage from './Components/MenuPage'
import LoginPage from './Components/LoginPage'

function App() {
  return (
    <div className="App">
    
        <Router>
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
           
            <Route path="/menupage" element={<MenuPage />} />
            
          </Routes>
        </Router>
   
   
      
      
    </div>
  );
}

export default App;
