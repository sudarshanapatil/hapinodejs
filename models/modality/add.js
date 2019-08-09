const codes = {
    err:
    {
        code: 402,
        mesaage: "problem in adding modality"
    },
    success: {
        code: 200,
        message: "Successfully added modality",
    }
}
exports.add = (payload, connection) => {
    let { name, description, comment } = payload;
    return new Promise((resolve, reject) => {
        let query = `insert into modality (modId,name,description,comment) values (100,"${name}","${description}","${comment}")`
        connection.query(query, (err, res, feild) => {
            if (err) {
                console.log("here================",err)
                reject(codes.err)
            }
            else {
                console.log(err, res)
                resolve(codes.success);
            }
        })

    })
}


