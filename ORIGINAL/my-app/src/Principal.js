import React from 'react';
import { Steps, Button, message, Tabs, Menu, Icon } from 'antd';
import PrimeraGrafica from './componentes/PrimeraGrafica'
import SegundaGrafica from './componentes/SegundaGrafica'
import TerceraGrafica from './componentes/TerceraGrafica'
import CuartaGrafica from './componentes/CuartaGrafica'
import QuintaGrafica from './componentes/QuintaGrafica';
import SextaGrafica from './componentes/SextaGrafica';
import SeptimaGrafica from './componentes/SeptimaGrafica';

import MetodosAxios from "./componentes/MetodosAxios";

const { TabPane } = Tabs;
const { SubMenu } = Menu;


function callback(key) {
  console.log(key);

  this.llamarDataCSV();

}


class App extends React.Component {
  state = {
    visibilidadPrimeraGrafica: false,
    visibilidadSegundaGrafica: false,
    visibilidadTerceraGrafica: false,
    visibilidadCuartaGrafica: false,
    visibilidadQuintaGrafica: false,
    visibilidadSextaGrafica: false,
    visibilidadSeptimaGrafica: false,
    current: "1",
    arregloDataCSV: [],
    arregloData2019: [],
    arregloData2020: [],
    //papersXFecha: [],
    papersSudamerica: [],
    papersMapa: [],
  };


  llamarDataCSV() {
    MetodosAxios.ObtenerDataCSV()
      .then((res) => {
        this.setState({
          arregloDataCSV: res.data,
        }, () => {
          //console.log("asdasd", this.state.arregloDataCSV)
        })
      }).catch((error) => {
        console.log(error);
      })
  }

  llamarData2019 = () => {
    MetodosAxios.ObtenerEventos2019()
      .then((res) => {
        this.setState({
          arregloData2019: res.data,
        }, () => {
          console.log("2019", this.state.arregloData2019)
        })
      }).catch((error) => {
        console.log(error);
      })
  }

  llamarData2020 = () => {
    MetodosAxios.ObtenerEventos2020()
      .then((res) => {
        this.setState({
          arregloData2020: res.data,
        }, () => {
          console.log("2020", this.state.arregloData2020)
        })
      }).catch((error) => {
        console.log(error);
      })
  }


  /* llenarPapersXFecha() {
     MetodosAxios.ObtenerPapersXFecha()
       .then((res) => {
         this.setState({
           papersXFecha: res.data,
         }, () => {
           console.log("Papers por fecha", this.state.papersXFecha)
         })
       }).catch((error) => {
         console.log(error);
       })
   }*/

  llenarPaperSudamerica() {
    MetodosAxios.obtenerPaperSudamerica()
      .then((res) => {
        this.setState({
          papersSudamerica: res.data,
        }, () => {
          console.log("Papers Sudamerica", this.state.papersSudamerica)
        })
      }).catch((error) => {
        console.log(error);
      })
  }


  //http://localhost:8000/papers/mapa
  llenarPaperMapa() {
    MetodosAxios.ObtenerPapersMapa()
      .then((res) => {
        this.setState({
          papersMapa: res.data,
        }, () => {
          console.log("Papers Mapa", this.state.papersMapa)
        })
      }).catch((error) => {
        console.log(error);
      })
  }

  //Metodo que se ejecuta automaticamente antes de que se renderize la pagina
  componentWillMount() {
    this.llamarDataCSV();
    //this.llenarPapersXFecha();
    this.llenarPaperSudamerica();
    this.llenarPaperMapa();
    this.llamarData2019();
    this.llamarData2020();
  }

  handleClick = e => {
    this.setState({
      current: e.key,
    });
    if (e.key === "1") {
      this.setState({
        visibilidadPrimeraGrafica: true,
        visibilidadSegundaGrafica: false,
        visibilidadTerceraGrafica: false,
        visibilidadCuartaGrafica: false,
        visibilidadQuintaGrafica: false,
        visibilidadSextaGrafica: false,
        visibilidadSeptimaGrafica: false,
      })
    }
    if (e.key === "2") {
      this.setState({
        visibilidadPrimeraGrafica: false,
        visibilidadSegundaGrafica: true,
        visibilidadTerceraGrafica: false,
        visibilidadCuartaGrafica: false,
        visibilidadQuintaGrafica: false,
        visibilidadSextaGrafica: false,
        visibilidadSeptimaGrafica: false,
      })
    }
    if (e.key === "3") {
      this.setState({
        visibilidadPrimeraGrafica: false,
        visibilidadSegundaGrafica: false,
        visibilidadTerceraGrafica: true,
        visibilidadCuartaGrafica: false,
        visibilidadQuintaGrafica: false,
        visibilidadSextaGrafica: false,
        visibilidadSeptimaGrafica: false,
      })
    }
    if (e.key === "4") {
      this.setState({
        visibilidadPrimeraGrafica: false,
        visibilidadSegundaGrafica: false,
        visibilidadTerceraGrafica: false,
        visibilidadCuartaGrafica: true,
        visibilidadQuintaGrafica: false,
        visibilidadSextaGrafica: false,
        visibilidadSeptimaGrafica: false,
      })
    }
    if (e.key === "5") {
      this.setState({
        visibilidadPrimeraGrafica: false,
        visibilidadSegundaGrafica: false,
        visibilidadTerceraGrafica: false,
        visibilidadCuartaGrafica: false,
        visibilidadQuintaGrafica: true,
        visibilidadSextaGrafica: false,
        visibilidadSeptimaGrafica: false,
      })
    }
    if (e.key === "6") {
      this.setState({
        visibilidadPrimeraGrafica: false,
        visibilidadSegundaGrafica: false,
        visibilidadTerceraGrafica: false,
        visibilidadCuartaGrafica: false,
        visibilidadQuintaGrafica: false,
        visibilidadSextaGrafica: true,
        visibilidadSeptimaGrafica: false,

      })
    }
    if (e.key === "7") {
      this.setState({
        visibilidadPrimeraGrafica: false,
        visibilidadSegundaGrafica: false,
        visibilidadTerceraGrafica: false,
        visibilidadCuartaGrafica: false,
        visibilidadQuintaGrafica: false,
        visibilidadSextaGrafica: false,
        visibilidadSeptimaGrafica:true,
      })
    }
  };

  render() {
    console.log("se renderiza")
    return (
      <div className="MenuPrincipal">
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme="dark">
          <Menu.Item key="1">
            <Icon type="table" />
            Primera Grafica - Tabla
          </Menu.Item>

          <Menu.Item key="2">
            <Icon type="pie-chart" />
            Segunda Grafica - Pastel
          </Menu.Item>

          <Menu.Item key="3">
            <Icon type="chrome" />
            Tercera Grafica - Mapa
          </Menu.Item>

          <Menu.Item key="7">
            <Icon type="chrome" />
            Septima Grafica - Calendario
          </Menu.Item>

          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="smile" rotate={180} />
                GRAFICAS FAIL
            </span>
            }
          >
            <Menu.Item key="4">
              Grafica 4 - Timeline
            </Menu.Item>

            <Menu.Item key="5">
              Grafica 5 - Mapa de Palabras
            </Menu.Item> 

            <Menu.Item key="6">
              Grafica 6 - Calendario de Eventos
          </Menu.Item>



          </SubMenu>
        </Menu>



        {this.state.visibilidadPrimeraGrafica &&
          <PrimeraGrafica className="primeraGrafica"
            arregloDataCSV={this.state.arregloDataCSV}
            arregloData2019={this.state.arregloData2019}
            arregloData2020={this.state.arregloData2020}
          >
          </PrimeraGrafica>
        }
        {this.state.visibilidadSegundaGrafica &&
          <SegundaGrafica
            arregloDataCSV={this.state.arregloDataCSV}
            papersSudamerica={this.state.papersSudamerica}
          >
          </SegundaGrafica>
        }
        {this.state.visibilidadTerceraGrafica &&
          <TerceraGrafica className="tercercaGrafica"
            arregloDataCSV={this.state.arregloDataCSV}
            papersMapa={this.state.papersMapa}
          >
          </TerceraGrafica>
        }
        {this.state.visibilidadCuartaGrafica &&
          <CuartaGrafica className="CuartaGrafica"
            arregloDataCSV={this.state.arregloDataCSV}
            arregloData2019={this.state.arregloData2019}
          // papersXFecha={this.state.papersXFecha}
          >
          </CuartaGrafica>
        }
        {this.state.visibilidadQuintaGrafica &&
          <QuintaGrafica className="QuintaGrafica"
            arregloDataCSV={this.state.arregloDataCSV}
          >
          </QuintaGrafica>
        }
        {this.state.visibilidadSextaGrafica &&
          <SextaGrafica className="SextaGrafica"
            arregloDataCSV={this.state.arregloDataCSV}
          >
          </SextaGrafica>
        }
         {this.state.visibilidadSeptimaGrafica &&
          <SeptimaGrafica className="SeptimaGrafica"
            arregloDataCSV={this.state.arregloDataCSV}
          >
          </SeptimaGrafica>
        }

      </div>
    );
  }
}

export default App;
//https://observablehq.com/@d3