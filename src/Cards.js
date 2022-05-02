import React from 'react';
import Col from './Col.js';
import './styl.css';
import axios from 'axios';
import { useEffect } from 'react';

function Cards({userid}) {
  
  
    var array =[
        {
          plan:"Silver",
          price:"0",
          currency:"$",
          month:"month",
          button:false,
          features:[
            {
              name:"Single User",
              enable:true,
              isstrong:false
            },
            {
              name:"1GB Storage",
              enable:true,
              isstrong:false
            },
            {
              name:"Unlimited Public Projects",
              enable:true,
              isstrong:false
            },
             
    
    
          ]
        },
        {
          plan:"Gold",
          price:"100",
          currency:"$",
          month:"month",
          button:true,
    
          features:[
            {
              name:"5 Users",
              enable:true,
              isstrong:true
            },
            {
              name:"10GB Storage",
              enable:true,
              isstrong:false
            },
            {
              name:"Unlimited Public Projects",
              enable:true,
              isstrong:false
            },
            
    
          ]
        },
        {
          plan:"Diamond",
          price:"200",
          currency:"$",
          month:"month",
          button:false,
    
          features:[
            {
              name:"Unlimited Users",
              enable:true,
              isstrong:true
            },
            {
              name:"20GB Storage",
              enable:true,
              isstrong:false
            },
            {
              name:"Unlimited Public Projects",
              enable:true,
              isstrong:false
            },
            
    
          ]
        },{
          plan:"Platinum",
          price:"300",
          currency:"$",
          month:"month",
          button:true,
    
          features:[
            {
              name:"Unlimited Users",
              enable:true,
              isstrong:true
            },
            {
              name:"30GB Storage",
              enable:true,
              isstrong:false
            },
            {
              name:"Unlimited Public Projects",
              enable:true,
              isstrong:false
            },
             
          ]
        }
      ]
      console.log(userid)
  return (
     <>
      <section class="pricing py-5">
      <div class="container">
        <div class="row">
         {
           array.map(function(obj){
              return <Col data={obj} userid={userid}></Col>
           })
         }
        </div>
      </div>

    </section>
     </>
  )
}

export default Cards