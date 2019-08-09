const codes = {
  err:
  {
    code: 402,
    mesaage: "Error in editing modality"
  },
  success: {
    code: 200,
    data: "Successfully edited modality"
  }
}
module.exports = (connection,payload) => {
  return new Promise((resolve, reject) => {
    let {id,feild,newValue} =payload;
    
    let query=`update modaliy set "${feild}"="${newValue}" where id=${id}`
    connection.query(query, (err, res, feild) => {
      if (err)
        reject(codes.err)
      else {
        console.log(err, res)
        //codes.success.data = res;
          resolve(codes.success);
      }
    });
  });
}
