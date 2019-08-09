const product = require('../../models/product');

exports.prodRoutes = (connection) => {
    let routesArr = [
        {
            method: 'GET',
            path: '/apis/product/list',
            options: {
                description: 'Get task list',
                notes: 'Returns an array of task',
                tags: ['api'],
            },
            handler: async function (request, h) {
                let data = await product.get(connection)
                console.log(data, "in route")
                return data;
            }
        },
        {
            method: 'POST',
            path: '/apis/product/edit',
            options: {
                description: 'Get task list',
                notes: 'Returns an array of task',
                tags: ['api'],
            },
            handler: async function (request, h) {
                let data = await product.edit(connection)
                console.log(data, "in route")
                return data;
            }
        },
        {
            method: 'POST',
            path: '/apis/product/delete',
            options: {
                description: 'Get task list',
                notes: 'Returns an array of task',
                tags: ['api'],
            },
            handler: async function (request, h) {
                let data = await product.destroy(connection)
                return data;
            }
        },
        {
            method: 'POST',
            path: '/apis/product/getbyid',
            options: {
                description: 'Get task list',
                notes: 'Returns an array of task',
                tags: ['api'],
            },
            handler: async function (request, h) {
                let payload = request.payload;
                let data = await product.get(connection, payload)
                return data;
            }
        },
        {
            method: 'POST',
            path: '/apis/product/add',
            handler: async (request, h) => {
                const payload = request.payload;
                try {
                    let data = await product.add(payload, connection)
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