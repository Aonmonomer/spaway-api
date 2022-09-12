const Router = require('express').Router()
const SpaRouter = require('./SpaRouter')

Router.use('/spa', SpaRouter)

module.exports = Router
