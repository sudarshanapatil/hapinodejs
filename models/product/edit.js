const codes = {
    err: {
        code: 402,
        mesaage: "Error in editing product"
    },
    success: {
        code: 200,
        data: "Successfully edited product"
    }
}
module.exports = (connection, payload, save) => {
    //edits modality
    return new Promise((resolve, reject) => {
        let { id, name, description } = payload;
        let comment = "test"
        let query = `update product set name="${name}" ,comment="${comment}" ,description="${description}" where prodId=${id}`
        connection.query(query, (err, res, feild) => {
            if (err) {
                console.log(err, "here")
                reject(codes.err)
            }
            else {
                console.log(err, res)
                //codes.success.data = res;
                resolve(codes.success);
                let userId = 1011;
                save(connection, userId, "product", name, "edit")
            }
        })
    })
}