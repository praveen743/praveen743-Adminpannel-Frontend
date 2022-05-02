import { useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from "react-router";
import './styl.css';

function Col(props) {
    var navigate = useNavigate();
    let plaarr = ["Silver","Gold","Diamond","Platinum"];
    var name =  window.localStorage.getItem("email");
    console.log(name)
const[bton,setbton]= useState();
const[nextplan,setnextplan]= useState( );

    useEffect(async() => {
    load()
      }, [])

      async function load(){
        let data = await axios.get(`http://localhost:3001/card/${name}`);
        console.log(data.data)

        console.log("currentplan",data.data[0].plan)
        let cplan = data.data[0].plan;
      let index = plaarr.indexOf(cplan)
      console.log("index",index)

      let nxtidx = index + 1;
      let nxtpln = plaarr[nxtidx];
      console.log("next plan ",nxtpln);
      window.localStorage.setItem("nextplan",nxtpln );
     let nextplan = window.localStorage.getItem("nextplan");

      // setnextplan(nxtpln);
     console.log(nextplan);
  //    console.log(props.data.plan);

      if(nextplan === props.data.plan){
          setbton(true)
      }else{
          setbton(false)

      }
      }

      async function update(){
          let userid= window.localStorage.getItem("email");
          let nextplan = window.localStorage.getItem("nextplan");
         let data = await axios.put(`http://localhost:3001/upgrade`,{
            upplan:nextplan,
            email:userid
        });
        
        alert(data.data.message)
        load()
        navigate("/dashboard")
       }

     return   <div class="col-lg-4">
    <div class="card mb-5 mb-lg-0">
        <div class="card-body">
            <h5 class="card-title  text-uppercase text-center">{props.data.plan}</h5>
            <h6 class="card-price text-center">{props.data.price}<span class="period">/{props.data.month}</span></h6>
            <hr/>
                <ul class="fa-ul">
                    {
                        props.data.features.map(function(obj){
                            if(obj.enable){
                                return <li><span class="fa-li"><i class="fas fa-check"></i></span>{obj.isstrong ?<strong>{obj.name}</strong> : obj.name}</li>
                            }
                            else
                            {
                                return <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{obj.name}</li>
                            }
                            
                        })
                    }
                  
                </ul>
                <div class="d-grid">
              

                   {
                        bton?
                            <button class="btn btn-primary text-uppercase"   onClick={()=>update()}
                            >Upgrade</button>:<button class="btn btn-primary text-uppercase" hidden   
                            >Upgrade</button>
                          }
                   
                </div>
        </div>
    </div>
</div>
}

export default Col