const Router = require('express').Router()
const controller = require('../controllers/SpaController')

Router.get('/view/all', controller.GetAllSpaDetails)
Router.get('/view/:spa_id', controller.GetSpaDetails)
Router.post('/create', controller.CreateSpa)
Router.put('/:spa_id', controller.UpdateSpa)
Router.delete('/:spa_id', controller.DeleteSpa)

module.exports = Router
