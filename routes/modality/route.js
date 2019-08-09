const modality = require('../../models/modality');

exports.modRoutes = (connection) => {
    let routesArr = [
        {
            method: 'GET',
            path: '/apis/modality/list',
            options: {
                description: 'Get task list',
                notes: 'Returns an array of task',
                tags: ['api'],
            },
            handler: async function (request, h) {
                let data = await modality.get(connection)
                console.log(data, "in route")
                return data;
            }
        },
        {
            method: 'POST',
            path: '/apis/modality/edit',
            options: {
                description: 'Get task list',
                notes: 'Returns an array of task',
                tags: ['api'],
            },
            handler: async function (request, h) {
                let data = await modality.edit(connection)
                console.log(data, "in route")
                return data;
            }
        },
        {
            method: 'POST',
            path: '/apis/modality/delete',
            options: {
                description: 'Get task list',
                notes: 'Returns an array of task',
                tags: ['api'],
            },
            handler: async function (request, h) {
                let data = await modality.delete(connection)
                return data;
            }
        },
        {
            method: 'POST',
            path: '/apis/modality/getbyid',
            options: {
                description: 'Get task list',
                notes: 'Returns an array of task',
                tags: ['api'],
            },
            handler: async function (request, h) {
                let payload = request.payload;
                let data = await modality.get(connection, payload)
                return data;
            }
        },
        {
            method: 'POST',
            path: '/apis/modality/add',
            handler: async (request, h) => {
                const payload = request.payload;
                try {
                    let data = await modality.add(payload, connection)
                    return data;
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
