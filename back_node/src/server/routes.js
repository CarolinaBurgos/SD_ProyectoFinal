const Router = require('koa-router');
const data = require('./data');

const router = new Router({
    prefix: '/data'
});


router.get('/HolaMundo/', async (ctx) => {
    try {
        console.log("hola mundo")
        const mesaje = await data.holaMundoBack();
        ctx.body = {
            estado: 'Hola Mundo Entregado Con exito',
            data: mesaje
        };
        ctx.status = 200;
    } catch (err) {
        console.log(err)
        ctx.body = {
            estado: 'Error =C '
        };
        ctx.status = 400;
    }
})


router.get('/dataCSV/', async (ctx) => {
    try {
        const dataCSV = await data.mostrarTodoCSV();
        ctx.body = {
            estado: 'data',
            data: dataCSV
        };
        ctx.status = 200;
    } catch (err) {
        console.log(err)
        ctx.body = {
            estado: 'Error =C '
        };
        ctx.status = 400;
    }
})

module.exports = router;
