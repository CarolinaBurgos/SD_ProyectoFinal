import React from 'react';
import { Menu, Icon, Timeline } from 'antd';
import moment from 'moment';
import Chart from 'react-google-charts';

const { SubMenu } = Menu;

class SextaGrafica extends React.Component {
    state = {
        arregloDataCSV: this.props.arregloDataCSV,
        datafinal: [],
        mes:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    };

    componentDidMount = () => {
        this.ObtenerCantidadPapersXPais();

    }

    ObtenerCantidadPapersXPais() {
        let temp = [];
        temp.push([{ type: 'date', id: 'Date' }, { type: 'number', id: 'text/textt  ' }])
        for (let index = 0; index < this.props.arregloDataCSV.length; index++) {
            console.log(this.props.arregloDataCSV[index])
            let anio=parseInt(this.props.arregloDataCSV[index].año);
            let mes=this.props.arregloDataCSV[index].mes;
            let indice=this.state.mes.indexOf(mes)+1;
            let dia=parseInt(this.props.arregloDataCSV[index].dia);
            let titulo=this.props.arregloDataCSV[index].titulo;
            temp.push([new Date(anio, indice, dia),titulo]);
        }
        this.setState({
            datafinal: temp
        }, () => {
            console.log(this.state.datafinal)  
        });


     
    }
//https://react-google-charts.com/controls-and-dashboard/date-range-filter-control


    render() {
        return (
            <div className="chartGrafica6">
                <h1>Fecha de Eventos</h1>
                <Chart
                    width={1000}
                    height={350}
                    chartType="Calendar"
                    loader={<div>Loading Chart</div>}
                    /*data={[
                        [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
                        [new Date(2012, 3, 13), 37032],
                        [new Date(2012, 3, 14), 38024],
                        [new Date(2012, 3, 15), 38024],
                        [new Date(2012, 3, 16), 38108],
                        [new Date(2012, 3, 17), 38229],

                        [new Date(2013, 1, 4), 38177],
                        [new Date(2013, 1, 5), 38705],
                        [new Date(2013, 1, 12), 38210],
                        [new Date(2013, 1, 13), 38029],
                        [new Date(2013, 1, 19), 38823],
                        [new Date(2013, 1, 23), 38345],
                        [new Date(2013, 1, 24), 38436],
                        [new Date(2013, 2, 10), 38447],
                    ]}*/
                    data={this.state.datafinal}

                    options={{
                        title: 'Red Sox Attendance',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        );
    }
}

export default SextaGrafica;
