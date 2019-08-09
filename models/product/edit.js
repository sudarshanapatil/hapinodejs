const codes = {
  err:
  {
    code: 402,
    mesaage: "Error in editing product"
  },
  success: {
    code: 200,
    data: "Successfully edited product"
  }
}

module.exports = (connection, payload) => {
  //edits modality
  return new Promise((resolve, reject) => {
    let { id, field, newValue } = payload;

    let query = `update product set "${field}"="${newValue}" where id=${id}`
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
