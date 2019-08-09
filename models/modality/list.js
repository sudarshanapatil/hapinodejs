const codes = {
    err:
    {
        code: 402,
        mesaage: "No Modality Exists"
    },
    success: {
        code: 200,
        data: ""
    }

}
exports.list = (connection) => {
    //console.log(connection,"==connection")
    return new Promise((resolve, reject) => {
        connection.query("select * from modality limit 100", (err, res, feild) => {
            if (err)
                reject(codes.err)
            else {
                console.log(err, res)
                let arr=[]
                for(let i in res)
                {
                    arr.push({
                        id:res[i].modId,
                        description:res[i].description,
                        comment:res[i].comment,
                        name:res[i].name
                    })
                }
                codes.success.data = arr;
                
                resolve(codes.success);
            }
        })

    })
}