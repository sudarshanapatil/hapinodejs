const codes = {
    err:
    {
        code: 402,
        mesaage: "problem in adding modality"
    },
    success: {
        code: 200,
        data: "Successfully added modality",
    }
}
exports.add = (payload, connection) => {
    let { name, discription, comment } = payload;
    return new Promise((resolve, reject) => {
        let query = `insert into modality (name,description,comment) values ("${name}","${discription}","${comment}")`
        connection.query(query, (err, res, feild) => {
            if (err) {
                reject(codes.err)
            }
            else {
                console.log(err, res)
                resolve(codes.success);
            }
        })

    })
}


