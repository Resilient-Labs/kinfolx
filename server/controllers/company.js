import Company from '../models/Company.js'

const companyController = {
    getAllCompanies: async (req, res, next) => {
        try {
            const companies = await Company.find({})
            console.log(companies)
            res.json({companies})
        } catch (error) {
            next(error)
            
        }
    },
}

export default companyController
