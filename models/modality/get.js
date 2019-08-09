const codes = {
  err:
  {
    code: 402,
    mesaage: "Required modality doesnot exist"
  },
  success: {
    code: 200,
    data: ""
  }
}

module.exports = (connection, payload = {}) => {
  return new Promise((resolve, reject) => {
    const query = query_builder(payload);
    connection.query(query, (err, res, field) => {
      if (err)
        reject(codes.err)
      else {
        codes.success.data = res;
        resolve(codes.success);
      }
    });
  });
}

const query_builder = (payload) => {
  query_params = Object.keys(payload);
  let query = `SELECT * FROM modality where 1`;
  query = query_params.reduce((accum, param) => (accum + ` AND ${param} = "${payload[param]}"`), query);
  return query;
}