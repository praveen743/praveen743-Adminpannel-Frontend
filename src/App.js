import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cards from './Cards';
import { useState } from 'react';
import Dashboard from './Dashboard';



function App() {
  const[userid,setuserid] = useState()
  return (
    <BrowserRouter>
    <div className="App">
        
       <Routes>
       <Route path='/' element={<Register/>}></Route>
       <Route path='/login' element={<Login setuserid={setuserid}/>}></Route>
       <Route path='/dashboard' element={<Dashboard/>}></Route>

         <Route path='/card' element={<Cards userid={userid}/>}></Route>

        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
