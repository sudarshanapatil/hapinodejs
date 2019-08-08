const addMod = require('../../models/modality/create')
const listMod = require('../../models/modality/list')
const editMod = require('../../models/modality/edit')
const deleteMod = require('../../models/modality/delete')
const getModById = require('../../models/modality/getById')
exports.modRoutes = (connection) => {
    let routesArr = [
        {
            method: 'GET',
            path: '/list',
            options: {
                description: 'Get task list',
                notes: 'Returns an array of task',
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
            path: '/edit',
            options: {
                description: 'Get task list',
                notes: 'Returns an array of task',
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
            path: '/delete',
            options: {
                description: 'Get task list',
                notes: 'Returns an array of task',
                tags: ['api'],
            },
            handler: async function (request, h) {
                let data = await deleteMod.delete(connection)
                return data;
            }
        },
        {
            method: 'POST',
            path: '/getbyid',
            options: {
                description: 'Get task list',
                notes: 'Returns an array of task',
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
            path: '/add',
            handler: async (request, h) => {
                const payload = request.payload;
                try {
                    let data = await addMod.add(payload, connection)
                    console.log(data, "test")
                    return data
                }
                catch (err) {
                    return err
                }
            },
            options: {
                auth: false,
                description: 'Add task to a list',
                notes: 'adds task to an array of task',
                tags: ['api'],
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