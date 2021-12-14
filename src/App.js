import logo from './logo.svg';
import './App.css';
import Col from './col.js';
import './styl.css';


function App() {
  var array =[
    {
      plan:"Free",
      price:"0",
      currency:"$",
      month:"month",
      features:[
        {
          name:"Single User",
          enable:true,
          isstrong:false
        },
        {
          name:"5GB Storage",
          enable:true,
          isstrong:false
        },
        {
          name:"Unlimited Public Projects",
          enable:true,
          isstrong:false
        },
        {
          name:"Community Access",
          enable:true,
          isstrong:false
        },
        {
          name:"Unlimited Private Projects",
          enable:false,
          isstrong:false
        },
        {
          name:"Dedicated Phone Support",
          enable:false,
          isstrong:false
        },
        {
          name:"Free Subdomain",
          enable:false,
          isstrong:false
        },
        {
          name:"Monthly Status Reports",
          enable:false,
          isstrong:false
        },


      ]
    },
    {
      plan:"Plus",
      price:"9",
      currency:"$",
      month:"month",
      features:[
        {
          name:"5 Users",
          enable:true,
          isstrong:true
        },
        {
          name:"50GB Storage",
          enable:true,
          isstrong:false
        },
        {
          name:"Unlimited Public Projects",
          enable:true,
          isstrong:false
        },
        {
          name:"Community Access",
          enable:true,
          isstrong:false
        },
        {
          name:"Unlimited Private Projects",
          enable:true,
          isstrong:false
        },
        {
          name:"Dedicated Phone Support",
          enable:true,
          isstrong:false
        },
        {
          name:"Free Subdomain",
          enable:true,
          isstrong:false
        },
        {
          name:"Monthly Status Reports",
          enable:false,
          isstrong:false
        },


      ]
    },
    {
      plan:"Pro",
      price:"49",
      currency:"$",
      month:"month",
      features:[
        {
          name:"Unlimited Users",
          enable:true,
          isstrong:true
        },
        {
          name:"5GB Storage",
          enable:true,
          isstrong:false
        },
        {
          name:"Unlimited Public Projects",
          enable:true,
          isstrong:false
        },
        {
          name:"Community Access",
          enable:true,
          isstrong:false
        },
        {
          name:"Unlimited Private Projects",
          enable:true,
          isstrong:false
        },
        {
          name:"Dedicated Phone Support",
          enable:true,
          isstrong:false
        },
        {
          name:"Unlimited Free Subdomain",
          enable:true,
          isstrong:false
        },
        {
          name:"Monthly Status Reports",
          enable:true,
          isstrong:false
        },


      ]
    }
  ]
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
         {
           array.map(function(obj){
              return <Col data={obj}></Col>
           })
         }
        </div>
      </div>

    </section>
  );
}

export default App;
