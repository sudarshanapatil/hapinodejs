const modRoutes=require('./routes/modality/route')

//All Routes are defined here
exports.configureRoutes = (server, connection) => {
   //get all routes for Modality 
   let data=modRoutes.modRoutes(connection)

   //get all routes for products
   
    return server.route(data)
}