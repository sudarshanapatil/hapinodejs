'use strict';

const Hapi = require('@hapi/hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const MySQL = require('mysql');

const connection = MySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sudri@123',
    database: 'demo'
});

//connect to SQL server
connection.connect()

const { configureRoutes } = require('./route')
//For API Documentation
const swaggerOptions = {                            
    info: {
        title: 'FeildGenie API Documentation',
        version: '0.0.1',
    }
};

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);
    //console.log(connection,"in server conn")
    await configureRoutes(server,connection)
    await server.start();
    console.log('Server running on %ss', server.info.uri);
};

process.on('unhandledRejection', (err) => {
console.log(err);
    process.exit(1);
});

init();