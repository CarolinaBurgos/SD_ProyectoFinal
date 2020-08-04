const fs = require('fs'); // filesystem


function holaMundoBack() {
    return "Hola Mundo"
}



function mostrarTodoCSV() {
    let dataArreglo=[];

    fs.readFile('./src/archivos/Datos_Generales.csv', 'utf8', function (err, data) {
        //var dataArray = data.split(/\r?\n/);
        
        asd=data.split("\n")
        console.log(data)
        return (asd)
      });

}




module.exports = {
    holaMundoBack,
    mostrarTodoCSV

}