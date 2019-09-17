'use strict'

// const Boom = require('boom')
const Chalk = require('chalk')
const fs = require('fs')
// const Joi = require('@hapi/joi')
// const Config = require('../../config')
const json2xls = require('json2xls')
// const restHapiConfig = Config.get('/restHapiConfig')
// const AuditLog = require('../models/audit-log.model')
module.exports = function (server, knex, logger) {
  const sendFile = async (request, h) => {
    const jsonArr = request.payload.jsonArr
    const xls = json2xls(jsonArr)
    return new Promise((resolve, reject) => {
      fs.writeFile('userExcel/data.xlsx', xls, 'binary', err => {
        if (err) {
          // reject({
          //   code: 500,
          //   err: err
          // })
        } else {
          resolve(h.file('data.xlsx'))
        }
      })
    })
  }
    ; (function () {
      const Log = logger.bind(Chalk.magenta('AuditLog/getfile'))
      Log.note('return auditlogs')
      server.route({
        method: 'POST',
        path: '/AuditLog/getfile',
        config: {
          auth: false,
          handler: sendFile,
          // cors: restHapiConfig.cors,
          validate: {
            // payload: {
            //   id: Joi.number().required(),
            //   type: Joi.string().required()
            // }
          },
          description: 'get excel file',
          tags: ['api', 'Philips', 'review'],

          plugins: {
            'hapi-swagger': {
              responseMessages: [
                { code: 200, message: 'Success' },
                { code: 400, message: 'Bad Request' },
                { code: 404, message: 'Not Found' },
                { code: 500, message: 'dfgdfgf Internal Server Error' }
              ]
            }
          }
        }
      })
    })()
}
