import React from 'react';
import { Menu, Icon,Timeline } from 'antd';
import moment from 'moment';

const { SubMenu } = Menu;

class TerceraGrafica extends React.Component {
    state = {
        arregloDataCSV:this.props.arregloDataCSV,
        papersXFecha:this.props.papersXFecha,
        arregloTimelineItem:[],
        arregloDataTabla:[],

    };

    componentDidMount=()=>{
        let temp=[];
        let tempA=[];
       for (let index = 0; index < this.state.papersXFecha.length; index++) {
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
            let a=<Timeline.Item>{this.state.papersXFecha[index].titulo} -- {this.state.papersXFecha[index].dia}-{this.state.papersXFecha[index].mes}-{this.state.papersXFecha[index].año} </Timeline.Item>
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
            <Timeline mode="alternate" >
                {this.state.arregloTimelineItem}
            </Timeline>

        );
    }
}

export default TerceraGrafica;
