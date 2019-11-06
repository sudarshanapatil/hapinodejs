const modRoutes = require('./routes/modality/route')
const prodRoutes = require('./routes/product/route')
const userRoute =require('./routes/user/route')

//All Routes are defined here
exports.configureRoutes = (server, connection,save) => {
    //get all routes for Modality 
    let modArr = modRoutes.modRoutes(connection,save)
    let prodArr = prodRoutes.prodRoutes(connection,save)
    let userArr =userRoute.userRoutes(connection,save)
    let allRoutes = modArr.concat(prodArr,userArr)

    //get all routes for products
    for (let i in allRoutes)
        console.log({ "path:": allRoutes[i].path, "method:": allRoutes[i].method })
    
    return server.route(allRoutes)
}