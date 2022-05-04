import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import './styl.css'

 
class Piechart extends React.Component {
 
state = {
    dataPie: {
      labels: ["Non Active Users", " Active Users"],
      datasets: [
        {
          data: [window.localStorage.getItem("total")-window.localStorage.getItem("active"), window.localStorage.getItem("active")],
          backgroundColor: [
            "#FF3131",
            "#39FF14",
            
          ],
          hoverBackgroundColor: [
            "#FF3131",
            "#39FF14",
             
          ]
        }
      ]
    }
  }

  render() {

    return (
        

      <MDBContainer>
        <h3 className="mt-2">Pie chart</h3>
        <Pie  data={this.state.dataPie} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default Piechart;