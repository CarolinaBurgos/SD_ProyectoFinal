import React from 'react';
import { Menu, Icon, Button } from 'antd';
import MetodosAxios from "./MetodosAxios";
import Chart from 'react-google-charts';
const { SubMenu } = Menu;
//Geocode.setApiKey("AIzaSyCS7-g8rkd8K8tj3nxbV8GMI5lI2Y77W4c");


class SegundaGrafica extends React.Component {
  state = {
    arregloDataCSV: this.props.arregloDataCSV,
    papersSudamerica: this.props.papersSudamerica,
    datafinal:[],
  };
  /*Para el mapa
  https://www.npmjs.com/package/react-geocode
  https://developer.here.com/projects/PROD-67cfa742-dcad-473f-9195-8801d66bb0e8
  */

  componentWillMount() {
    console.log(this.state.papersSudamerica)
    this.ObtenerCantidadPapersXPais();
  }

  ObtenerCantidadPapersXPais() {


    let dataTemp = [];
    console.log(this.state.papersSudamerica)
    for (let index = 0; index < this.state.papersSudamerica.length; index++) {
      if (dataTemp.length === 0) {
        let data = {
          "pais":this.state.papersSudamerica[index].lugares.split(',')[1],
          "cantidad": "1",
        };
        dataTemp.push(data);
      } else {
        for (let j = 0; j < dataTemp.length; j++) {
          console.log(dataTemp[j].pais," ",this.state.papersSudamerica[index].lugares.split(",")[1] );
          if(dataTemp[j].pais===this.state.papersSudamerica[index].lugares.split(",")[1]){
            dataTemp[j].pais=parseInt(dataTemp[j].pais)+1
            j=dataTemp.length;
          }else{
            let data = {
              "pais":this.state.papersSudamerica[index].lugares.split(',')[1],
              "cantidad": "1",
            };
            dataTemp.push(data);
            j=dataTemp.length;

          }
          
        }
      }
    }
    console.log(dataTemp)
  

    let temp=[];
    temp.push(['Task', 'Hours per Day'])
    for (let index = 0; index < dataTemp.length; index++) {
      temp.push([ dataTemp[index].pais,  parseInt(dataTemp[index].cantidad)]);
    }
    this.setState({
      datafinal:temp
    },()=>{
      console.log(this.state.datafinal)
    })


  }


  render() {
    return (
      <div>
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Task', 'Hours per Day'],
            [this.state.datafinal[2][0], 2],
            [this.state.datafinal[3][0], 1],
            [this.state.datafinal[4][0], 2],
            [this.state.datafinal[5][0], 3],
            [this.state.datafinal[6][0], 4],
          ]}
          options={{
            title: 'My Daily Activities',
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>


    );
  }
}

export default SegundaGrafica;
