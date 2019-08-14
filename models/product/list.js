const codes = {
    err: {
        code: 402,
        mesaage: "No product Exists"
    },
    success: {
        code: 200,
        data: ""
    }
}
module.exports = (connection, payload) => {
    return new Promise((resolve, reject) => {
        let { modId } = payload
        connection.query(`select * from product where modId=${modId}`, (err, res, feild) => {
            if (err) {
                console.log(err)
                reject(codes.err)
            }
            else {
                console.log(err, res)
                let arr = []
                for (let i in res) {
                    arr.push({
                        id: res[i].prodId,
                        description: res[i].description,
                        comment: res[i].comment,
                        name: res[i].name,
                        modId: res[i].modId
                    })
                }
                codes.success.data = arr;
                resolve(codes.success);
            }
        })
    })
}