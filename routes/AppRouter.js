const Router = require('express').Router()
const SpaRouter = require('./SpaRouter')
const UserRouter = require('./UserRouter')
const ReviewRouter = require('./ReviewRouter')

Router.use('/spas', SpaRouter)
Router.use('/users', UserRouter)
Router.use('/reviews', ReviewRouter)

module.exports = Router
