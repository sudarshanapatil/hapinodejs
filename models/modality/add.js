const codes = {
    err: {
        code: 402,
        mesaage: "problem in adding modality"
    },
    success: {
        code: 200,
        message: "Successfully added modality",
    }
}
module.exports = (connection, payload, save) => {
    let { name, description, comment } = payload;
    return new Promise((resolve, reject) => {
        let query = `insert into modality (name,description,comment) values ("${name}","${description}","${comment}")`
        connection.query(query, (err, res, feild) => {
            if (err) {
                console.log(err, " : err")
                reject(codes.err)
            }
            else {
                console.log(err, res)
                resolve(codes.success);
                let userId = 1011;
                save(connection, userId, "modality", name, "add")
            }
        })

    })
}


