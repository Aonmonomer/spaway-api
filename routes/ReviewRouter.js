const Router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

Router.get('/view/all', controller.GetAllReviewDetails)
Router.get('/view/:review_id', controller.GetReviewDetails)
Router.get('/view/find_by_spa/:spa_id', controller.GetReviewBySpaId)

Router.post(
  '/create',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateReview
)
Router.put(
  '/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateReview
)
Router.delete(
  '/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteReview
)

module.exports = Router
