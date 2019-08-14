const codes = {
    err: {
        code: 402,
        mesaage: "Error in deleting product"
    },
    success: {
        code: 200,
        data: "Successfully deleted product"
    }
}
module.exports = (connection, payload, save) => {
    return new Promise((resolve, reject) => {
        let { id } = payload;
        let query = `delete from product where prodId=${id}`
        connection.query(query, (err, res, feild) => {
            if (err) {
                console.log(err)
                reject(codes.err)
            }
            else {
                console.log(err, res)
                //codes.success.data = res;
                resolve(codes.success);
                let userId = 1011;
                save(connection, userId, "product", "product_name", "delete")
            }
        })
    })
}