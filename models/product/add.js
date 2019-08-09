const codes = {
  err:
  {
    code: 402,
    mesaage: "problem in adding product"
  },
  success: {
    code: 200,
    data: "Successfully added product",
  }
}

module.exports = (payload, connection) => {
  let { name, discription, comment } = payload;
  return new Promise((resolve, reject) => {
    let query = `insert into product(name,description,comment) values ("${name}","${discription}","${comment}")`
    connection.query(query, (err, res, feild) => {
      if (err) {
        reject(codes.err)
      }
      else {
        console.log(err, res)
        resolve(codes.success);
      }
    });
  });
}
