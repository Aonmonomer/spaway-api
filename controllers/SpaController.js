const { Router } = require('express')
const { Spa } = require('../models')

const GetAllSpaDetails = async (req, res) => {
  try {
    const allSpas = await Spa.findAll()
    res.send(allSpas)
  } catch (error) {
    throw error
  }
}

const GetSpaDetails = async (req, res) => {
  try {
    const spa = await Spa.findByPk(req.params.spa_id)
    res.send(spa)
  } catch (error) {
    throw error
  }
}

const CreateSpa = async (req, res) => {
  try {
    let SpaBody = {
      ...req.body
    }
    let spa = await Spa.create(SpaBody)
    res.send(spa)
  } catch (error) {
    throw error
  }
}

const UpdateSpa = async (req, res) => {
  try {
    let spaId = parseInt(req.params.spa_id)
    let updatedSpa = await Spa.update(req.body, {
      where: { id: spaId },
      returning: true
    })
    res.send(updatedSpa)
  } catch (error) {
    throw error
  }
}

const DeleteSpa = async (req, res) => {
  try {
    let spaId = parseInt(req.params.spa_id)
    await Spa.destroy({ where: { id: spaId } })
    res.send({ message: `Deleted business with an id of ${spaId}` })
  } catch (error) {
    throw error
  }
}

// Dont forget to export your functions
module.exports = {
  GetAllSpaDetails,
  GetSpaDetails,
  CreateSpa,
  UpdateSpa,
  DeleteSpa
}
