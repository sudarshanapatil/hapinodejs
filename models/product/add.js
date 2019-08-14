const codes = {
    err: {
        code: 402,
        mesaage: "problem in adding product"
    },
    success: {
        code: 200,
        data: "Successfully added product",
    }
}
module.exports = (connection, payload, save) => {
    let { name, description, modId } = payload;
    return new Promise((resolve, reject) => {
        let comment = 'test'
        let query = `insert into product(name,description,comment,modId) values ("${name}","${description}","${comment}","${modId}")`
        connection.query(query, (err, res, feild) => {
            if (err) {
                console.log(err, " :err")
                reject(codes.err)
            }
            else {
                console.log(err, res)
                resolve(codes.success);
                let userId = 1011;
                save(connection, userId, "product", name, "add")
            }
        })
    })
}


