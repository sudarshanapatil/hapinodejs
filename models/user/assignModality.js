module.exports = (connection, payload) => {
  let { userId, modIds } = payload;
  return new Promise((resolve, reject) => {
    let query = ``
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