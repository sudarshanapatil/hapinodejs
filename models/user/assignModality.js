module.exports = (connection, payload) => {
    let { userId, modIds } = payload;
    return new Promise((resolve, reject) => {
        for (let i in modIds) {
            let query = `insert into userModality (userId,modId) values (${userId},${modIds[i]})`
            connection.query(query, (err, res, feild) => {
                if (err) {
                    console.log("here================", err)
                    reject(codes.err)
                }
                else {
                    console.log(err, res)
                    resolve(codes.success);
                }
            })
        }
    })
}