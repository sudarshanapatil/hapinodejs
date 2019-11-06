'use strict';

const Hapi = require('@hapi/hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const MySQL = require('mysql');
const cors = require('cors')
const moment = require('moment')
// const connection = MySQL.createConnection({
//     // host: 'localhost',
//     // user: 'root',
//     // password: 'sudri@123',
//     // database: 'database_dev'
// });

//connect to SQL server
// connection.connect()
let connection=""
const { configureRoutes } = require('./route')
//For API Documentation
const swaggerOptions = {
    info: {
        title: 'FeildGenie API Documentation',
        version: '0.0.1',
    }
};
const save = (connection, userId, serviceType, serviceTypeName, actionType) => {
    return new Promise((resolve, reject) => {
        let timestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
        let query = `insert into logs (userId, serviceType, serviceTypeName, actionType, timestamp) 
         values ("${userId}","${serviceType}","${serviceTypeName}","${actionType}","${timestamp}")`
        connection.query(query, (err, res, feild) => {
            if (err) {
                console.log(err, ": err")
                reject()
            }
            else {
                console.log(err, res)
                resolve();
            }
        })
    })
}

const init = async () => {
    const server = Hapi.server({
        port: 7000 ,
        host: 'localhost',
        routes: { cors: true }
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
    await configureRoutes(server, connection, save)
    await server.start();

    console.log('Server running on %ss', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});





init();