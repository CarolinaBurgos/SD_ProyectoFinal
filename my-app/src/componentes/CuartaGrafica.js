import React from 'react';
import { Menu, Icon,Timeline } from 'antd';
import moment from 'moment';

const { SubMenu } = Menu;

class TerceraGrafica extends React.Component {
    state = {
        arregloDataCSV:this.props.arregloDataCSV,
        arregloData2019:this.props.arregloData2019,
        arregloTimelineItem:[],
        arregloDataTabla:[],

    };

    componentDidMount=()=>{
        console.log(this.state.papersXFecha)
        let temp=[];
        let tempA=[];
       for (let index = 0; index < this.state.arregloData2019.length; index++) {
            /*let eventoTemp={
              key: index,
              acronimo: this.state.papersXFecha[index].acronimo,
              descripcion: this.state.papersXFecha[index].descripcion,
              //fecha: this.state.arregloDataCSV[index].fecha,
              fecha: moment(this.state.papersXFecha[index].fecha),
              lugares: this.state.papersXFecha[index].lugares,
              titulo: this.state.papersXFecha[index].titulo,
              topicos:this.state.papersXFecha[index].topicos,
            }*/
            //{this.state.papersXFecha[index].dia}-{this.state.papersXFecha[index].mes}-{this.state.papersXFecha[index].año}
            let a=<Timeline.Item> {this.state.arregloData2019[index].titulo} {moment().format( this.state.arregloData2019[index].mes + this.state.arregloData2019[index].dia + this.state.arregloData2019[index].año )} </Timeline.Item>
            //temp.push(eventoTemp)
            tempA.push(a)
          }
          this.setState({
            //arregloDataTabla:temp,
            arregloTimelineItem:tempA,
          },()=>{
              console.log(this.state.arregloTimelineItem)
          })
    }
  

    render() {
        return (
            <div>
            <h1>Timeline de eventos desde el año 2019</h1>
            <Timeline mode="alternate" >
                {this.state.arregloTimelineItem}
            </Timeline>
            </div>
           

        );
    }
}

export default TerceraGrafica;
