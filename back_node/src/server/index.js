const http = require('http');
const Koa = require('koa');
const hostname = '127.0.0.1';
const port = 5000;
const app = new Koa();
const PORT = process.env.PORT || 1337;
const bodyParser = require('koa-bodyparser');

//declaracion de las rutas
const rutas = require('./routes');


//uso de las rutas
app.use(rutas.routes());



const server = app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});

app.use(bodyParser());

module.exports = server;
