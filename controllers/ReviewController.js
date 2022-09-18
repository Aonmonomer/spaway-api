const { Router } = require('express')
const { Review } = require('../models')
const review = require('../models/review')

const GetAllReviewDetails = async (req, res) => {
  try {
    const allReviews = await Review.findAll()
    res.send(allReviews)
  } catch (error) {
    throw error
  }
}

const GetReviewDetails = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.review_id)
    res.send(review)
  } catch (error) {
    throw error
  }
}

const GetReviewBySpaId = async (req, res) => {
  try {
    const review = await Review.findAll({
      where: { spaId: req.params.spa_id },
      order: ['id']
    })
    res.send(review)
  } catch (error) {
    throw error
  }
}

const CreateReview = async (req, res) => {
  try {
    let ReviewBody = {
      userId: req.userId,
      ...req.body
    }
    let review = await Review.create(ReviewBody)
    res.send(review)
  } catch (error) {
    throw error
  }
}

const UpdateReview = async (req, res) => {
  try {
    const { userId } = req
    let reviewId = parseInt(req.params.review_id)
    const review = await Review.findOne({ where: { id: reviewId, userId } })
    if (review) {
      let updatedReview = await Review.update(req.body, {
        where: { id: reviewId },
        returning: true
      })
      res.send(updatedReview)
    } else {
      res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    }
  } catch (error) {
    throw error
  }
}

const DeleteReview = async (req, res) => {
  try {
    const { userId } = req

    let reviewId = parseInt(req.params.review_id)
    const review = await Review.findOne({ where: { id: reviewId, userId } })
    console.log({ review })
    if (review) {
      await Review.destroy({ where: { id: reviewId } })
      res.send({ message: `Deleted review with an id of ${reviewId}` })
    } else {
      res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    }
  } catch (error) {
    throw error
  }
}

// Dont forget to export your functions
module.exports = {
  GetAllReviewDetails,
  GetReviewDetails,
  CreateReview,
  UpdateReview,
  DeleteReview,
  GetReviewBySpaId
}
