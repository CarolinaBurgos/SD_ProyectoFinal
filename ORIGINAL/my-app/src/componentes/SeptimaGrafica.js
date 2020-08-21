import React from 'react';
import { Menu, Calendar, Badge } from 'antd';
import moment from 'moment';
import Chart from 'react-google-charts';

const { SubMenu } = Menu;



class SeptimaGrafica extends React.Component {
    state = {
        arregloDataCSV: this.props.arregloDataCSV,
        mes: ["0","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    };

    componentDidMount = () => {
        //console.log(this.state.arregloDataCSV)
    }

    llenarData = (value) => {
       // console.log(value.month(), value.date(), value.year())
       console.log(value.date(),value.month()+1, value.year());
        let arreglo = this.state.arregloDataCSV;
        let arregloEventos=[];
        for (let index = 0; index < arreglo.length; index++) {
            // console.log(arreglo[index].mes+ " "+arreglo[index].dia+ " "+arreglo[index].año)
           //console.log(arreglo[index].mes)
            let fecha = moment().format(this.state.mes.indexOf(arreglo[index].mes).toString() +" " +arreglo[index].dia + arreglo[index].año, "MM Do YY")
            //console.log(fecha)
            //console.log(fecha.split(" "))
            let dia=fecha.split(" ")[1]
            let mes=fecha.split(" ")[0]
            let anio=fecha.split(" ")[2]
            //console.log(mes, dia, anio)
            //console.log(value.date(),value.month(), value.year());
           // console.log(dia,mes,anio);
           // console.log(value.date(),value.month()+1, value.year());
            //console.log(" ")
            let valorMes=value.month()+1;
            if(value.date().toString() === dia.toString() && valorMes.toString() === mes.toString() && value.year().toString()===anio.toString()){
                console.log("asdkjasuvdyastfdyitasgduyasgdyui")
                let eventoTemp={ type: 'success', content:arreglo[index].titulo}
                arregloEventos.push(eventoTemp);
            }
            /*var date = moment("2015-07-02");
            var dow = date.day();
            console.log(dow);
            if (value === fecha) {
                console.log("asdkasvdhgasdvgashbdasjdjhasdda")
            }*/
        }
        return arregloEventos;
    }

    getListData(value) {
        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    { type: 'success', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                ];
                break;
            case 10:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                    { type: 'error', content: 'This is error event.' },
                ];
                break;
            case 15:
                listData = [
                    { type: 'warning', content: 'This is warning event' },
                    { type: 'success', content: 'This is very long usual event。。....' },
                    { type: 'error', content: 'This is error event 1.' },
                    { type: 'error', content: 'This is error event 2.' },
                    { type: 'error', content: 'This is error event 3.' },
                    { type: 'error', content: 'This is error event 4.' },
                ];
                break;
            default:
        }
        return listData || [];
    }
    getMonthData(value) {
        if (value.month() === 8) {
            return 1394;
        }
    }

    monthCellRender(value) {
        const num = this.BadgegetMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    }

    dateCellRender = (value) => {
        const listData = this.llenarData(value)
        return (
            <ul className="events">
                {listData.map(item => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="chartGrafica6">
                <Calendar dateCellRender={this.dateCellRender} />
            </div>
        );
    }
}

export default SeptimaGrafica;
