import logo from './logo.svg';
import './App.css';
import NavbarPage from './Components/Nabvar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/Home';
import IMC from './Pages/IMC/IMC';
import Page from './Pages/AgeCalculator/Page';
import Reloj from './Pages/Clock/Reloj';
import AboutMePage from './Pages/AboutMe';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/imc" element={<IMC/>} />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
