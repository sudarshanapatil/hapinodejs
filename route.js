const modRoutes=require('./routes/modality/route')
const prodRoutes=require('./routes/product/route')

//All Routes are defined here
exports.configureRoutes = (server, connection) => {
   //get all routes for Modality 
   let modArr=modRoutes.modRoutes(connection)
   let prodArr=prodRoutes.prodRoutes(connection)
   let allRoutes=modArr.concat(prodArr)

   //get all routes for products
   console.log(allRoutes)
    return server.route(allRoutes)
}