import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cards from './Cards';
import { useState } from 'react';
import Dashboard from './Dashboard';
import Menu from './Menu';
import Navbar from './Navbar';
import Userdetails from './Userdetails';
import Dash from './Dash';
import Piechart from './Piechart';
import Logout from './Logout';



function App() {
  const[userid,setuserid] = useState()
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar/>
       <Routes>
       <Route path='/' element={<Register/>}></Route>
       <Route path='/login' element={<Login setuserid={setuserid}/>}></Route>
       <Route path='/dashboard' element={<Dash/>}></Route>
       <Route path='/user' element={<Userdetails/>}></Route>
       <Route path='/chart' element={<Piechart/>}></Route>
       <Route path='/logout' element={<Logout/>}></Route>


       {/* 
      <Route path='/card' element={<Cards userid={userid}/>}></Route> */}

        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
