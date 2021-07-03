const Hapi = require('@hapi/hapi');
const routes = require('./handler');

const init = async() =>{
    const server = Hapi.server({
        port:6000,
        host:'localhost',
        routes:{
            cors:{
                origin:['*'],
            }
        }
    });
    
    server.route(routes);

    await server.start();
    console.log(`server berjalan pada ${server.info.uri}`);
};

init();