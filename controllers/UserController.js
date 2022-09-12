const { Router } = require('express')
const { User } = require('../models')

const GetAllUserDetails = async (req, res) => {
  try {
    const allUsers = await User.findAll()
    res.send(allUsers)
  } catch (error) {
    throw error
  }
}

const GetUserDetails = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.user_id)
    res.send(user)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    let UserBody = {
      ...req.body
    }
    let user = await User.create(UserBody)
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    await User.destroy({ where: { id: userId } })
    res.send({ message: `Deleted user with an id of ${userId}` })
  } catch (error) {
    throw error
  }
}

// Dont forget to export your functions
module.exports = {
  GetAllUserDetails,
  GetUserDetails,
  CreateUser,
  UpdateUser,
  DeleteUser
}
