import React from 'react';
import { Table, Select,Tag } from 'antd';

const { Option } = Select;

const columns = [
  {
    title: 'Acronimo',
    dataIndex: 'acronimo',
    key: 'acronimo',
  },
  {
    title: 'Descripcion',
    dataIndex: 'descripcion',
    key: 'descripcion',
  },
  {
    title: 'Fecha',
    dataIndex: 'fecha',
    key: 'fecha',
  },
  {
    title: 'Lugares',
    dataIndex: 'lugares',
    key: 'lugares',
  },
  {
    title: 'Titulo',
    dataIndex: 'titulo',
    key: 'titulo',
  },
  {
    title: 'Topicos',
    dataIndex: 'topicos',
    key: 'topicos',
  }
]

class PrimeraGrafica extends React.Component {
  state = {
    arregloDataCSV: this.props.arregloDataCSV, //toma el arreglo que el padre le esta dando
    arregloData2019:this.props.arregloData2019,
    arregloData2020:this.props.arregloData2020,
    arregloDataTabla: [],
    colores:["magenta","red","volcano","orange","gold","lime","cyan","blue","geekblue","purple"],
  };


  handleChange=(value)=> {
    if(value==="todo"){
      this.llenarTabla(this.state.arregloDataCSV)
    }
    if(value==="2019"){
     //api de 2019
     this.llenarTabla(this.state.arregloData2019)
    }else if(value==="2020"){
      //api 2020
      this.llenarTabla(this.state.arregloData2020)
    }else{

    }
  }

  componentWillMount() {
    console.log('ARREGLO DESDE EL BACK', this.state.arregloDataCSV);
    console.log('ARREGLO DESDE EL 2019', this.state.arregloData2019);

  }


  llenarTabla(arreglo){
    let temp = [];
    let tagTemp=[];
    for (let index = 0; index < arreglo.length; index++) {
      console.log(arreglo[index].topicos);
      let topicoTemp=arreglo[index].topicos.split(",")
      for (let j = 0; j < topicoTemp.length; j++) {
        let tag=<Tag key={Math.random}color="magenta">{topicoTemp[j]}</Tag>; //Math.random() * (max - min) + min
        tagTemp.push(tag);
      }

     // console.log(tagTemp)
      let eventoTemp = {
        key: index,
        acronimo: arreglo[index].acronimo,
        descripcion: arreglo[index].descripcion,
        fecha: arreglo[index].dia+"-"+arreglo[index].mes+"-"+arreglo[index].año,
        lugares: arreglo[index].ciudad +"-"+ arreglo[index].pais,
        titulo: arreglo[index].titulo,
        topicos: tagTemp,
      }
      temp.push(eventoTemp)
      tagTemp=[]
    }
    this.setState({
      arregloDataTabla: temp,
    })

    //var jsonArray = JSON.parse(this.state.arregloDataCSV)
    //console.log(jsonArray)
    console.log("asdasd")
  }

  componentDidMount() {
    this.llenarTabla(this.state.arregloDataCSV)
  }



  render() {
    return (
      <div>
        <h1>Seleccione un año para visualizar los eventos</h1>
        <Select placeholder="SELECCIONE UN AÑO" style={{ width: 400, height:100, padding:40 }} onChange={this.handleChange}>
          <Option value="todo">Todo</Option> 
          <Option value="2019">2019</Option>
          <Option value="2020">2020</Option>
        </Select>

        <Table dataSource={this.state.arregloDataTabla} bordered columns={columns} />

      </div>
    );
  }
}




export default PrimeraGrafica;
