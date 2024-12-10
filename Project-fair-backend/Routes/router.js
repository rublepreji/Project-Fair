const express = require('express')

const userController =  require('../Controllers/userControllers')
const projectController= require('../Controllers/projectController')
const jwtMiddlewares = require('../Middlewares/jwtMiddleware')
const multerMiddleware = require('../Middlewares/multerMiddleware')
// const jwtMiddlewares = require('../Middlewares/jwtMiddleware')

const router = express.Router()

router.post('/api/register',
    userController.registerAPI
)
router.post('/api/login',
    userController.loginAPI
)
// router.post('/api/addProject',jwtMiddlewares,userController.addProject)

router.post('/api/addProject',jwtMiddlewares,multerMiddleware.single('projectImg'), projectController.addProjectAPI)

router.get('/api/getAllUserProject',jwtMiddlewares,projectController.getAllUserProjectAPI)

module.exports=router