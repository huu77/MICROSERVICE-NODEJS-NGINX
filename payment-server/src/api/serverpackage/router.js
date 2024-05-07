const express = require('express')
const  routers =express.Router()
const controller = require('./controller')
const {verifyAdmin, verifyAllRole} = require('../../middleware/veryfiedAuth')
routers.post('/createNewService',verifyAdmin,controller.createServicePackage)
 
routers.patch('/updateOneServicePackage',verifyAdmin,controller.update)
routers.get('/getOneServicePackage',verifyAllRole,controller.getOne)

routers.get('/getListService',verifyAllRole,controller.getListService)
module.exports = routers