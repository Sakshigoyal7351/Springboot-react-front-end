import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import {Routes, Route} from "react-router";
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';


function App() {
  return (
    <div>
    
    <Router>
    <HeaderComponent />
    <div className='container'>
      <Routes> 
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add-employee" element={<CreateEmployeeComponent />} />
          
      </Routes>
      </div>
      <FooterComponent />
      
      </Router>
      
    </div>
  );
}

export default App;
