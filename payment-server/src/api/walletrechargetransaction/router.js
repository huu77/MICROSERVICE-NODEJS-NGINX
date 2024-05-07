const express = require('express')
const  routers =express.Router()
const controller = require('./controller')
const {verifyAdmin} = require('../../middleware/veryfiedAuth')
routers.get('/getRevenus',verifyAdmin,controller.getRevenues)
 
module.exports = routers