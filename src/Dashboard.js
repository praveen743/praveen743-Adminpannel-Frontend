import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styl.css';
import { useNavigate } from 'react-router';


function Dashboard() {
  let navigate = useNavigate()
     var name =  window.localStorage.getItem("name");
    console.log(name)

    function logout(){
      window.localStorage.setItem("name",null);
      window.localStorage.setItem("nextplan",null);
      window.localStorage.setItem("email",null);
      window.localStorage.setItem("token",null);

      navigate("/")
    }

   return (
      <>
      <button className='btn btn-primary' id='logoutbtn' onClick={()=>logout()}>Logout</button>
      <div className='dashcntr'>
<p className='wlcm'>{`WELCOME ${name}`}</p>
<Link to='/card'><button id='btun' className='btn'>View Plan</button></Link>
      </div>
      </>
   )
}

export default Dashboard