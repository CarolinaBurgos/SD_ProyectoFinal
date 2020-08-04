import React from 'react';
import { Menu, Icon,Table} from 'antd';

const { SubMenu } = Menu;


const dataSource = [
  {
    key: '1',
    acronimmo: 'Mike',
    descripcion: 32,
    fecha: '10 Downing Street',
    lugares: '10 Downing Street',
    titulo: '10 Downing Street',
    topicos: '10 Downing Street',
  },
  {
    key: '2',
    acronimmo: 'Mike',
    descripcion: 32,
    fecha: '10 Downing Street',
    lugares: '10 Downing Street',
    titulo: '10 Downing Street',
    topicos: '10 Downing Street',
  },{
    key: '3',
    acronimmo: 'Mike',
    descripcion: 32,
    fecha: '10 Downing Street',
    lugares: '10 Downing Street',
    titulo: '10 Downing Street',
    topicos: '10 Downing Street',
  }
];

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
    arregloDataTabla:[]
  };




  componentWillMount() {
    console.log('ARREGLO DESDE EL BACK',  this.state.arregloDataCSV);

  }


  componentDidMount(){
    let temp=[];
    for (let index = 0; index < this.state.arregloDataCSV.length; index++) {
      console.log(this.state.arregloDataCSV[index].acronimo);
      let eventoTemp={
        key: index,
        acronimo: this.state.arregloDataCSV[index].acronimo,
        descripcion: this.state.arregloDataCSV[index].descripcion,
        fecha: this.state.arregloDataCSV[index].fecha,
        lugares: this.state.arregloDataCSV[index].lugares,
        titulo: this.state.arregloDataCSV[index].titulo,
        topicos:this.state.arregloDataCSV[index].topicos,
      }
      temp.push(eventoTemp)
    }
    this.setState({
      arregloDataTabla:temp,
    })

    //var jsonArray = JSON.parse(this.state.arregloDataCSV)
     //console.log(jsonArray)
    console.log("asdasd")
  }

  

  render() {
    return (
        <Table dataSource={this.state.arregloDataTabla} bordered columns={columns} />
      );
  }
}




export default PrimeraGrafica;
