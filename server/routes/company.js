import express from 'express'
const companyRouter = express.Router()
import companyController from '../controllers/company.js'

companyRouter.get('/', companyController.getAllCompanies) // GET /company
companyRouter.get('/:id', companyController.getCompany) // GET /company/:id
companyRouter.get('/best', companyController.getBestCompanies) // GET /company/best
companyRouter.get('/worst', companyController.getWorstCompanies) // GET /company/worst
companyRouter.post('/search', companyController.searchCompany)

export default companyRouter
