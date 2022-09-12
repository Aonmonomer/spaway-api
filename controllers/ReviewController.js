const { Router } = require('express')
const { Review } = require('../models')

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

const CreateReview = async (req, res) => {
  try {
    let ReviewBody = {
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
    let reviewId = parseInt(req.params.review_id)
    let updatedReview = await Review.update(req.body, {
      where: { id: reviewId },
      returning: true
    })
    res.send(updatedReview)
  } catch (error) {
    throw error
  }
}

const DeleteReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    await Review.destroy({ where: { id: reviewId } })
    res.send({ message: `Deleted review with an id of ${reviewId}` })
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
  DeleteReview
}
