
const Knex = require('../../knexFile')

const codes = {
    err: {
        code: 402,
        mesaage: "problem in adding modality"
    },
    success: {
        code: 200,
        message: "Successfully added modality",
    }
}

module.exports = async (connection, payload, save) => {
    let { name, description, comment } = payload;

    const modality = [{
        name: name,
        description: description,
        comment: comment
    }]

    const trx = await Knex.transaction();
    const trans =  await trx('modality').insert(modality)
    console.debug('trans', trans)
    console.debug('trx.isCompleted()', trx.isCompleted())
    try{
        const res = await trx.commit()
        console.debug('res', res)
        return trans[0]
    } catch(err) {
        await trx.rollback()
        console.debug('err', err)
        return err
    }

    /* let result
    try{
        result = await Knex('modality').insert(modality);
    }
    catch(err) {
        console.error(err)
    } 

    // trx('modality').insert()

    //console.log(result)
    return true; */

    /* let id;
    return new Promise((resolve, reject) => {
        Knex.transaction(function(trx) {
            Knex('modality').transacting(trx).insert(modality)
        .then(function(resp) {
        id = resp[0];
        console.log('resp', resp);
        console.log('trx.commit',trx.commit)
        //trx.commit()
        trx.commit()
        return resp;
        })
        .then(resp => {
            console.log('resp',resp)
            return resp;
            //resolve(resp)
        })
        .catch(trx => {
            console.log('trx.rollback',trx.rollback)
            reject('error in insert')
            trx.rollback()
        });
    })
    .then(function(resp) {
    console.log('Transaction complete.', resp);
      resolve(resp[0])
    })
    .catch(function(err) {
    console.error(err);
    reject(err)
    });
}) */

    /* return new Promise((resolve, reject) => {
        let query = `insert into modality (name,description,comment) values ("${name}","${description}","${comment}")`
        connection.query(query, (err, res, feild) => {
            if (err) {
                console.log(err, " : err")
                reject(codes.err)
            }
            else {
                console.log(err, res)
                resolve(codes.success);
                let userId = 1011;
                save(connection, userId, "modality", name, "add")
            }
        })

    }) */
}


