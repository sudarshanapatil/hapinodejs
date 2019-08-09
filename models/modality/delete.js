const codes = {
    err:
    {
        code: 402,
        mesaage: "Error in deleting modality"
    },
    success: {
        code: 200,
        message: "Successfully deleted modality"
    }

}
exports.delete = (connection, payload) => {
    //console.log(connection,"==connection")
    return new Promise((resolve, reject) => {
        console.log(payload,"here====")
        let { id } = payload;
        console.log(payload, id,"=======")
        let query = `delete from modality where modId=${id}`
        connection.query(query, (err, res, feild) => {
            if (err)
                {reject(codes.err)
                console.log(err)
                }
            else {
                console.log(err, res)
                codes.success.data = res;
                resolve(codes.success);
            }
        })

    })
}