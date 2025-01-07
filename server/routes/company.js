import express from 'express'
const companyRouter = express.Router()
import companyController from '../controllers/company.js'

companyRouter.get('/', companyController.getAllCompanies)

export default companyRouter
