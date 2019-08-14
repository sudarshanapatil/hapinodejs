const codes = {
    err: {
        code: 402,
        mesaage: "Error in editing modality"
    },
    success: {
        code: 200,
        data: "Successfully edited modality"
    }
}
module.exports = (connection, payload, save) => {
    //edits modality
    return new Promise((resolve, reject) => {
        let { id, description, name } = payload;
        let query = `update modality set name="${name}"  ,description="${description}" where modId=${id}`
        connection.query(query, (err, res, feild) => {
            if (err) {
                reject(codes.err)
                console.log(err)
            }
            else {
                console.log(err, res)
                //codes.success.data = res;
                resolve(codes.success);
                //TODO: get userId from payload
                let userId = 1;
                save(connection, userId, "modality", name, "edit")
            }
        })
    })
}