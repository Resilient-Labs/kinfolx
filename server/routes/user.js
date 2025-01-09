import express from 'express'
import userController from '../controllers/user.js'

const userRouter = express.Router()



userRouter.get('/favorites', userController.getFavoritesCompanies)
userRouter.post('/favorites', userController.addFavoriteCompany)

userRouter.post('/', userController.addUser); 
userRouter.get('/', userController.getAllUsers);
userRouter.get('/favorites', userController.getFavoriteCompanies) 
userRouter.post('/favorites/:companyId', userController.addFavoriteCompany) 
export default userRouter
