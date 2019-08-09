const codes = {
    err:
    {
        code: 402,
        mesaage: "No product Exists"
    },
    success: {
        code: 200,
        data: ""
    }
}
exports.list = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query("select * from product", (err, res, feild) => {
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