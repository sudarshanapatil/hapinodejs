const codes = {
    err: {
        code: 402,
        mesaage: "Error in deleting modality"
    },
    success: {
        code: 200,
        message: "Successfully deleted modality"
    }
}
module.exports = (connection, payload, save) => {
   return new Promise((resolve, reject) => {
        let { id } = payload;
        let query = `delete from modality where modId=${id}`
        connection.query(query, (err, res, feild) => {
            if (err) {
                reject(codes.err)
                console.log(err)
            }
            else {
                console.log(err, res)
                codes.success.data = res;
                resolve(codes.success);
                //TODO: get userId from payload
                let userId = 1;
                //TODO: add name in API 
                save(connection, userId, "modality", "test", "delete")
            }
        })
    })
}