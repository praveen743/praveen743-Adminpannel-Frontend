import React from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router';
import { useEffect } from 'react';

function Logout() {
    let navigate = useNavigate()
    useEffect(async () => {
        lgout()
      }, [])

      let lgout = async () => {
        try {
            var email = window.localStorage.getItem("email");
            console.log(email);
                let data = await axios.put("http://localhost:3001/logout",{email:email})
                window.localStorage.setItem("name",null);
                window.localStorage.setItem("nextplan",null);
                window.localStorage.setItem("email",null);
                window.localStorage.setItem("token",null);
                window.localStorage.setItem("total",null);
                window.localStorage.setItem("active",null);
                navigate("/login")
        } catch (error) {
          console.log(error)
        }
      }

  return (
    <div>Logout</div>
  )
}

export default Logout