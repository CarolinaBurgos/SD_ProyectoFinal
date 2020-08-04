import React from 'react';
import Chart from 'react-google-charts';

class CuartaGrafica extends React.Component {
    state = {
        arregloDataCSV: this.props.arregloDataCSV,
        datafinal: [],
    };

    componentDidMount = () => {
        this.ObtenerCantidadPapersXPais();

    }

    ObtenerCantidadPapersXPais() {
        let dataTemp = [];
        console.log(this.state.arregloDataCSV)
        for (let index = 0; index < this.state.arregloDataCSV.length; index++) {
            if (dataTemp.length === 0) {
                let data = {
                    "pais": this.state.arregloDataCSV[index].pais,
                    "cantidad": "1",
                };
                dataTemp.push(data);
                console.log(" ")
                console.log("Se guarda el primer dato", this.state.arregloDataCSV[index].pais)
            } else {
                let bandera = true;
                for (let j = 0; j < dataTemp.length; j++) {
                    console.log(" ")
                    console.log(dataTemp[j].pais, " ", this.state.arregloDataCSV[index].pais);
                    if (dataTemp[j].pais === this.state.arregloDataCSV[index].pais) {
                        dataTemp[j].cantidad = parseInt(dataTemp[j].cantidad) + 1
                        console.log("Son iguales. Se agrega uno a ", dataTemp[j], " ", dataTemp[j].pais)
                        bandera = false;
                    } else {
                        console.log("son desiguales")
                    }
                }
                if (bandera) {
                    let data = {
                        "pais": this.state.arregloDataCSV[index].pais,
                        "cantidad": "1",
                    };
                    console.log(data)
                    dataTemp.push(data);
                    console.log("No son iguales. Se agrega ", data.pais)
                }
            }
        }
        console.log(dataTemp)


        let temp = [];
        temp.push(['Pais', 'Numero De Eventos'])
        for (let index = 0; index < dataTemp.length; index++) {
            temp.push([dataTemp[index].pais, parseInt(dataTemp[index].cantidad)]);
        }
        this.setState({
            datafinal: temp
        }, () => {
            console.log(this.state.datafinal)
        })


    }



    render() {
        return (
            <div className="chartGrafica4">
                <h1> Numero de Eventos por paises</h1>
                <Chart
                    width={'1100px'}
                    height={'800px'}
                    loader={<div>Cargando Grafico</div>}
                    chartType="GeoChart"
                    data={this.state.datafinal}
                    // Note: you will need to get a mapsApiKey for your project.
                    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                    //mapsApiKey="YOUR_KEY_HERE"
                    rootProps={{ 'data-testid': '1' }}
                  
                />
            </div>
        );
    }
}

export default CuartaGrafica;