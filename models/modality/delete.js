const codes = {
    err:
    {
        code: 402,
        mesaage: "Error in deleting modality"
    },
    success: {
        code: 200,
        data: "Successfully deleted modality"
    }

}
exports.delete = (connection,payload) => {
    //console.log(connection,"==connection")
    return new Promise((resolve, reject) => {
        let {id} =payload;
        let query=`delete from modality where id=${id}`
        connection.query(query, (err, res, feild) => {
            if (err)
                reject(codes.err)
            else {
                console.log(err, res)
                codes.success.data = res;
                resolve(codes.success);
            }
        })

    })
}