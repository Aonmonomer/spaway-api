const Router = require('express').Router()
const controller = require('../controllers/ReviewController')

Router.get('/view/all', controller.GetAllReviewDetails)
Router.get('/view/:review_id', controller.GetReviewDetails)
Router.get('/view/find_by_spa/:spa_id', controller.GetReviewBySpaId)

Router.post('/create', controller.CreateReview)
Router.put('/:review_id', controller.UpdateReview)
Router.delete('/:review_id', controller.DeleteReview)

module.exports = Router
