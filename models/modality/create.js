exports.add = (payload, connection) => {
    let { name, discription, comment } = payload;
    return new Promise((resolve, reject) => {
        let query=`insert into modality (name,discription,comment) values ("${name}","${discription}","${comment}")`
        connection.query(query, (err, res, feild) => {
            if (err) {
                reject({ code: 500, err: err })
            }
            else {
                console.log(err, res)
                resolve({ code: 200, res });
            }
        })

    })
}


