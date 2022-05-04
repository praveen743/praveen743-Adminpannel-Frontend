import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import './styl.css';
import Piechart from './Piechart';

function Dash() {
    const[apparr,setapparr]=useState([])

    useEffect(async () => {
        getapp()
      }, [])

      let getapp = async () => {
        try {
          let user = await axios.get(`http://localhost:3001/apps`,{
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        });
          console.log(user.data)
          setapparr(user.data)

          let totalactive = await axios.get(`http://localhost:3001/active`,{
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        });
            var active = totalactive.data.length
          window.localStorage.setItem("active",active)

          let totaluser = await axios.get(`http://localhost:3001/user`,{
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        });
          var total = totaluser.data.length
        window.localStorage.setItem("total",total)
 
        } catch (error) {
          console.log(error)
        }
      }

  return (
     <>
              <h1>Trending Apps</h1>

     <div className='containerapp'>
     {
         apparr.map((obj, index) => {
            return  <div id="appcard" key={index} style={{backgroundColor:`${obj.color}`}
             }> 
               <a href={obj.link} target='_blank'>{obj.appname}</a> 
            </div>
        })
    
      }
     
      </div>
      <div className='piectnr'>
      {/* <Piechart /> */}
      </div>
     </>
  )
}

export default Dash