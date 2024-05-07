const express = require('express')
const  routers =express.Router()
const controller = require('./controller')
const {verifyUser} = require('../../middleware/veryfiedAuth')

routers.post('/create-payment',verifyUser,controller.createPayment)

routers.get('/thanks',verifyUser,controller.retrunThanks)
module.exports = routers 