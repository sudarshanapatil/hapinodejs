const Modality = require('../../models/modality/')
exports.modRoutes = (connection, save) => {
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
                let data = await Modality.list(connection)
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
                let data = await Modality.edit(connection, request.payload, save)
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
                let data = await Modality.destroy(connection, request.payload, save)
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
                let data = await Modality.getById(connection, payload)
                return data;
            }
        },
        {
            method: 'POST',
            path: '/apis/modality/add',
            handler: async (request, h) => {
                const payload = request.payload;
                try {
                    let data = await Modality.add(connection, payload, save)
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