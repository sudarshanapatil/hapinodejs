const codes = {
    err:
    {
        code: 402,
        mesaage: "No Modality Exists"
    },
    success: {
        code: 200,
        data: ""
    }

}
exports.list = (connection) => {
    //console.log(connection,"==connection")
    return new Promise((resolve, reject) => {
        connection.query("select * from modality", (err, res, feild) => {
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