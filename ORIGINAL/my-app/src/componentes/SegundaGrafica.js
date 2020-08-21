import React from 'react';
import { Menu, Icon, Button } from 'antd';
import MetodosAxios from "./MetodosAxios";
import Chart from 'react-google-charts';


import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
const { SubMenu } = Menu;
//Geocode.setApiKey("AIzaSyCS7-g8rkd8K8tj3nxbV8GMI5lI2Y77W      4c");


class SegundaGrafica extends React.Component {
  state = {
    arregloDataCSV: this.props.arregloDataCSV,
    papersSudamerica: this.props.papersSudamerica,
    datafinal: [],

    dataPie: {
      labels: [],//paises
      datasets: [
        {
          data: [],//valores
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
            "#AC64AD"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774",
            "#DA92DB"
          ]
        }
      ]
    }
  };
  /*Para el mapa
  https://www.npmjs.com/package/react-geocode
  https://developer.here.com/projects/PROD-67cfa742-dcad-473f-9195-8801d66bb0e8
  */

  componentWillMount() {
    //console.log(this.state.papersSudamerica)
    this.ObtenerCantidadPapersXPais();
  }

  ObtenerCantidadPapersXPais() {
    let dataTemp = [];
    //console.log(this.state.papersSudamerica)
    for (let index = 0; index < this.state.papersSudamerica.length; index++) {
      if (dataTemp.length === 0) {
        let data = {
          "pais": this.state.papersSudamerica[index].pais,
          "cantidad": "1",
        };
        dataTemp.push(data);
       // console.log(" ")
       // console.log("Se guarda el primer dato", this.state.papersSudamerica[index].pais)
      } else {
        let bandera = true;
        for (let j = 0; j < dataTemp.length; j++) {
        //  console.log(" ")
         // console.log(dataTemp[j].pais, " ", this.state.papersSudamerica[index].pais);
          if (dataTemp[j].pais === this.state.papersSudamerica[index].pais) {
            dataTemp[j].cantidad = parseInt(dataTemp[j].cantidad) + 1
            console.log("Son iguales. Se agrega uno a ", dataTemp[j], " ", dataTemp[j].pais)
            bandera = false;
          } else {
            console.log("son desiguales")
          }
        }

        if (bandera) {
          let data = {
            "pais": this.state.papersSudamerica[index].pais,
            "cantidad": "1",
          };
          //console.log(data)
          dataTemp.push(data);
         // console.log("No son iguales. Se agrega ", data.pais)
        }


      }
    }
    console.log(dataTemp)
    let labelsTem=[]
    let cantidadTem=[]

    for (let index = 0; index < dataTemp.length; index++) {
      labelsTem.push(dataTemp[index].pais);
      cantidadTem.push(dataTemp[index].cantidad);
    }

    let dataPieTempo= {
      labels: labelsTem,//paises
      datasets: [
        {
          data: cantidadTem,//valores
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
            "#AC64AD"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774",
            "#DA92DB"
          ]
        }
      ]
    }

    this.setState({
      dataPie:dataPieTempo
    })

    let temp = [];
    temp.push(['Task', 'Hours per Day'])
    for (let index = 0; index < dataTemp.length; index++) {
      temp.push([dataTemp[index].pais, parseInt(dataTemp[index].cantidad)]);
    }
    this.setState({
      datafinal: temp
    }, () => {
     // console.log(this.state.datafinal)
    })  
      

  }


  render() {

    return (
      <div className="chartGrafica2">
        {/*<Chart
          width={'100%'}
          height={'800px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={this.state.datafinal}
          options={{
            title: 'Numero de Eventos en Sudamerica',
          }}
          rootProps={{ 'data-testid': '1' }}
        />*/
        }
        <MDBContainer>
          <h1 className="mt-5">Numero de Eventos en Sudamerica</h1>
          <Pie data={this.state.dataPie} options={{ responsive: true }} />
        </MDBContainer>
      </div>
    );
  }
}

export default SegundaGrafica;
