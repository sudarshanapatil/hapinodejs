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
        let { id } = payload;
        let query = `select * from modality where modId=${id}`
        connection.query(query, (err, res, feild) => {
            if (err)
                reject(codes.err)
            else {
                console.log(err, res)
                codes.success.data = res;
                resolve(codes.success);
            }
        })
    })
}