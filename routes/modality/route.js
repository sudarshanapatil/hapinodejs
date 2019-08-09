const addMod = require('../../models/modality/add')
const listMod = require('../../models/modality/list')
const editMod = require('../../models/modality/edit')
const deleteMod = require('../../models/modality/delete')
const getModById = require('../../models/modality/getById')
exports.modRoutes = (connection) => {
    let routesArr = [
        {
            method: 'GET',
            path: '/apis/modality/list',
            options: {
                description: 'Get modality list',
                notes: 'Returns an array of modalities',
                tags: ['api'],
            },
            handler: async function (request, h) {
                let data = await listMod.list(connection)
                console.log(data, "in route")
                return data;
            }
        },
        {
            method: 'POST',
            path: '/apis/modality/edit',
            options: {
                description: 'Edit Modality',
                notes: 'Edits modaliy depending on id',
                tags: ['api'],
            },
            handler: async function (request, h) {
                let data = await editMod.edit(connection)
                console.log(data, "in route")
                return data;
            }
        },
        {
            method: 'POST',
            path: '/apis/modality/delete',
            options: {
                description: 'Deletes Modality',
                notes: 'Delete modality',
                tags: ['api'],
            },
            handler: async function (request, h) {
                let data = await deleteMod.delete(connection,request.payload)
                return data;
            }
        },
        {
            method: 'POST',
            path: '/apis/modality/getbyid',
            options: {
                description: 'Get Modality by id',
                notes: 'Returns modality',
                tags: ['api'],
            },
            handler: async function (request, h) {
                let payload = request.payload;
                let data = await getModById.getById(connection, payload)
                return data;
            }
        },
        {
            method: 'POST',
            path: '/apis/modality/add',
            handler: async (request, h) => {
                const payload = request.payload;
                try {
                    let data = await addMod.add(payload, connection)
                    return data;
                }
                catch (err) {
                    return err
                }
            },
            options: {
                auth: false,
                description: 'Adds new Modality ',
                notes: 'Adds new modality',
                tags: ['api'],
                //Joi validation to be added
                // validate: {
                //     payload: {
                //         username: Joi.string().min(1).max(20),
                //         description:Joi.string().min(1).max(20),
                //         comment:Joi.string().min(1).max(20),
                //     }
                // }
            }
        }
    ]

    return routesArr;
}