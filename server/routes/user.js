import express from 'express'
import userController from '../controllers/user.js'

const userRouter = express.Router()

userRouter.post('/', userController.addUser); 
userRouter.get('/', userController.getAllUsers);
userRouter.get('/' )


export default userRouter
