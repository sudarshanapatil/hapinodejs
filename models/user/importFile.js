const fs = require('fs')
const xlsxj = require("xlsx-to-json");

const moment = require('moment')
const codes = {
  err: {
    code: 402,
    mesaage: "problem in adding users"
  },
  success: {
    code: 200,
    message: "Successfully added users",
  }
}


module.exports = (knex, payload, excelToJson) => {
  return new Promise((res, rej) => {
    console.log('in create user', excelToJson)
    let flag = 'false'
    let { type } = payload
    
    let roleId;
    let jsonData;
    let sqlData = [];
    let data = payload["file"].pipe(fs.createWriteStream(__dirname + "/../../" + payload["file"].hapi.filename)
      .on('finish', async () => {
        let roleData =await knex.select('*').from('role');
        console.log(roleData, "roledata")
        jsonData = await excelToJson(payload["file"].hapi.filename);
        for (let i in jsonData) {
          let formData = jsonData[i]
          for (let j in roleData) {
            if (formData.Role == roleData[j].name) {
              roleId = roleData[j].roleId
            }
          }
          let validityStart = moment(formData.validityStart).format('YYYY-MM-DD');
          let validityEnd = moment(formData.validityEnd).format('YYYY-MM-DD');
          let modality = formData.Modality
          let accessType = (formData.accessType == "Lx") ? 0 : 1;
          sqlData.push({
            email: formData.EmailId,
            password: formData['Intial Password'],
            createTime: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
            username: formData.Name,
            validityStart,
            accessType,
            validityEnd,
            active: formData.Active,
            userType: formData["Inernal/External User"],
            comment: formData.Comments,
            roleId
          })
        }
        console.log(sqlData)
        let data =await knex('user').insert(sqlData)
        res(codes.success, data)
      }))
     })
}
