import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Booking from './components/Booking';
import Car from './components/Car';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
<div className="App">
<Navbar/>
<Routes>
<Route path="/booking" element={<Booking/>}/>
<Route path="/home" element={<Car/>}/>
</Routes>

</div>
  );
}

export default App;
