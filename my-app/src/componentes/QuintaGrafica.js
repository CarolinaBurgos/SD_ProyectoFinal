import React from 'react';
import Chart from 'react-google-charts';

class QuintaGrafica extends React.Component {
    state = {
        arregloDataCSV: this.props.arregloDataCSV,
        datafinal: [],
    };

    componentDidMount = () => {
        this.ObtenerCantidadPapersXPais();

    }

    /* let temp = [];
        temp.push(['Eventos'])
        for (let index = 0; index < this.props.arregloDataCSV.length; index++) {
            temp.push([this.props.arregloDataCSV[index].titulo]);
        }
        this.setState({
            datafinal: temp
        }, () => {
            console.log(this.state.datafinal)
        })
 */
    ObtenerCantidadPapersXPais() {
        let temp = [];
        temp.push(['Eventos'])

        let arregloData = this.props.arregloDataCSV;
        for (let index = 0; index < arregloData.length; index++) {
            let topicoTemp = arregloData[index].topicos.split(",")
            for (let j = 0; j < topicoTemp.length; j++) {
                temp.push([topicoTemp[j]]);
            }
        }
        this.setState({
            datafinal: temp
        }, () => {
            console.log(this.state.datafinal)
        })


    }



    render() {
        return (
            <div className="chartGrafica5">
                <h1> Mapa de palabras de TAGS de eventos</h1>
                <Chart
                    width={'1100px'}
                    height={'800px'}
                    chartType="WordTree"
                    loader={<h1>Cargando Grafico</h1>}
                    data={this.state.datafinal}
                    options={{
                        wordtree: {
                            format: 'implicit',
                            word: 'cats',
                        },
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        );
    }
}

export default QuintaGrafica;
