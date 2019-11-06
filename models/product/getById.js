const codes = {
    err: {
        code: 402,
        mesaage: "Required product doesnot exist"
    },
    success: {
        code: 200,
        data: ""
    }
}
module.exports = (connection, payload) => {
    return new Promise((resolve, reject) => {
        console.log(payload, " : payload")
        let { name } = payload;
        if (name.toLowerCase() == "shaver") {
            resolve({
                "code": 200,
                "data": [
                    {
                        "id": 1,
                        "name": "wet and dry electric shaver",
                        "description": "Get a comfortable shave, wet or dry. Our ComfortCut Blade System with rounded profile heads glide smoothly across your skin while protecting it from nicks and cuts.",
                        "image": "https://images.philips.com/is/image/PhilipsConsumer/S3561_13-IMS-en_IN?wid=494&hei=435&$pnglarge$"
                    }
                ]
            })
        }
        else if(name.toLowerCase()=="trimmer"){
            resolve({
                "code": 200,
                "data": [
                    {
                        "id": 1,
                        "name": "Beared Trimmer BT3221/15 ",
                        "description": "Get a comfortable shave, wet or dry. Our ComfortCut Blade System with rounded profile heads glide smoothly across your skin while protecting it from nicks and cuts.",
                        "image": "https://images.philips.com/is/image/PhilipsConsumer/BT3221_15-IMS-en_IN?wid=460&hei=460&$pnglarge$"
                    },
                    {
                        "id": 2,
                        "name": "Beared Trimmer BT3211/15 ",
                        "description": "Get a comfortable shave, wet or dry. Our ComfortCut Blade System with rounded profile heads glide smoothly across your skin while protecting it from nicks and cuts.",
                        "image": "https://images.philips.com/is/image/PhilipsConsumer/BT3211_15-IMS-en_IN?wid=460&hei=460&$pnglarge$"
                    },
                    {
                        "id": 3,
                        "name": "Beared Trimmer BT3203/15 ",
                        "description": "Get a comfortable shave, wet or dry. Our ComfortCut Blade System with rounded profile heads glide smoothly across your skin while protecting it from nicks and cuts.",
                        "image": "https://images.philips.com/is/image/PhilipsConsumer/BT3203_15-IMS-en_IN?wid=460&hei=460&$pnglarge$"
                    }
                ]
            })
        }
        else{
            resolve({
                code: 202,
                message:"Does not exists"
            })
        }
        // let query = `select * from philipsProduct`
        // console.log(query,"==============")


        // connection.query(query, (err, res, feild) => {
        //     if (err)
        //         reject(codes.err)
        //     else {
        //         console.log(err, res)
        //         codes.success.data = res;
        //         resolve(codes.success);
        //     }
        // })
    })
}