const codes = {
  err:
  {
    code: 402,
    mesaage: "problem in adding modality"
  },
  success: {
    code: 200,
    data: "Successfully added modality",
  }
}
module.exports = (payload, connection) => {
  let { name, description, comment } = payload;
  return new Promise((resolve, reject) => {
    let query = `insert into modality (name,description,comment) values ("${name}","${description}","${comment}")`
    connection.query(query, (err, res, field) => {
        if (err) {
            reject(codes.err)
        }
        else {
            console.log(err, res)
            resolve(codes.success);
        }
    })
  })
}
