const Product = require('../../models/product/')
exports.prodRoutes = (connection, save) => {
    let routesArr = [
        {
            method: 'POST',
            path: '/apis/product/list',
            options: {
                description: 'Get task list',
                notes: 'Returns an array of task',
                tags: ['api'],
            },
            handler: async function (request, h) {
                let data = await Product.list(connection, request.payload)
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
                let data = await Product.edit(connection, request.payload, save)
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
                let data = await Product.destroy(connection, request.payload, save)
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
                let data = await Product.getById(connection, request.payload)
                return data;
            }
        },
        {
            method: 'POST',
            path: '/apis/product/add',
            handler: async (request, h) => {
                console.log("im here")
                try {
                    let data = await Product.add(connection, request.payload, save)
                    console.log(data, "test")
                    return data
                }
                catch (err) {
                    console.log(err, "here err")
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