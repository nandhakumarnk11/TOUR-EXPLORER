import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Appbar from './Appbar';
import Home from './Home';
import Placetovisit from './Placetovisit';
import Timetovisit from './Timetovisit';
import Food from './Food';
import Packages from './Packages';



const App = () =>{
  return (
    <Router>
    
      
        <Appbar />
        
        <Routes>
          <Route path="/Home" element={<Home />}>
          </Route>
          
          <Route path="/Placetovisit" element={<Placetovisit />}>
          </Route>

          <Route path="/Timetovisit" element={<Timetovisit />}>
          </Route>
          <Route path="/Packages" element={<Packages />}>
          </Route>
          <Route path="/Food" element={<Food />}>
          </Route>
         
          </Routes>
          


         
              
    
    </Router>
  );
}

export default App;