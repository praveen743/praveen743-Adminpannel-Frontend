import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function Userdetails() {
  const[userarr,setuserarr]=useState([])
  useEffect(async () => {
    getusers()
  }, [])

  let getusers = async () => {
    try {
      let user = await axios.get(`http://localhost:3001/user`,{
        headers: {
            Authorization: window.localStorage.getItem("token")
        }
    });
      console.log(user.data)
      setuserarr(user.data)
      //  alert("Booking Confirmed");
      //  navigate('/bookingconfirmedlist')
       
    } catch (error) {
      console.log(error)
    }
  }
  return (
<>
<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">DOB</th>
      <th scope="col">Email</th>
      <th scope="col">Status</th>
 </tr>
  </thead>
  <tbody>

  {
         userarr.map((obj, index) => {
            
            return <tr key={index}>
 <th scope="row">{index}</th>
      <td>{obj.firstname}</td>
      <td>{obj.age}</td>
      <td>{obj.dob}</td>
      <td>{obj.email}</td>
      <td>{obj.status}</td>

 </tr>       
        })
    
      }
   
</tbody>
</table>
</>
    
  )
}

export default Userdetails