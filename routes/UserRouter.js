const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/view/all', controller.GetAllUserDetails)
Router.get('/view/:user_id', controller.GetUserDetails)
Router.post('/create', controller.CreateUser)
Router.put('/:user_id', controller.UpdateUser)
Router.delete('/:user_id', controller.DeleteUser)

module.exports = Router
