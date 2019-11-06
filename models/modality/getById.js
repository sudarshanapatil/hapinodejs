'use strict'
const codes = {
    err: {
        code: 402,
        mesaage: "Required modality doesnot exist"
    },
    success: {
        code: 200,
        data: ""
    }
}
module.exports = (connection, payload) => {
    //console.log(connection,"==connection")
    return new Promise((resolve, reject) => {
        console.log(payload, " : payload")
        //let { name } = payload;
        //let query = `select * from philipsProducts where name like %${name}%`
        //let query = `select * from philipsProducts;`
       
            console.log("====idharhu mein====")
            connection.query(query, (err, res, feild) => {
                if (err) {
                    console.log(err, "Err")
                    reject(codes.err)
                }
                else {
                    console.log(err, res)
                    codes.success.data = res;
                    resolve(codes.success);
                }
            })
        
    })
}