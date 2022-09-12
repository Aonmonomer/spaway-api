const Router = require('express').Router()
const SpaRouter = require('./SpaRouter')
const UserRouter = require('./UserRouter')

Router.use('/spas', SpaRouter)
Router.use('/users', UserRouter)

module.exports = Router
