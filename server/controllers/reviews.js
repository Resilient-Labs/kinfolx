import Review from '../models/Reviews.js'
import Company from '../models/Company.js'
import User from '../models/User.js'

const reviewController = {
    createReview: async (req, res) => {
        try {
<<<<<<< HEAD
            // NOTE: assuming we're getting companyId from src/components/ReviewList.jsx (POST fetch statement)
            const { companyId } = req.params
            const { companyName, newRatings, comment, position } = req.body

            // lookup clerkId to get userId
            const clerkId = req.auth.userId
            console.log('Clerk ID: ' + clerkId)
            const user = await User.findOne({ clerkId })
            const userId = user._id
            console.log('User ID: ' + userId)

            // Ensure company exists (when passed companyId in req.body) <---------------- bring back when done testing!
            const foundCompanyId = await Company.findById(companyId)
            if (!foundCompanyId) {
                return res.status(404).send('Company ID not found')
=======
            const { companyId, ratings, comment, position } = req.body
            console.log(req.body)
            const userId = req.user.id

            // Ensure company exists
            const company = await Company.findById(companyId)
            if (!company) {
                return res.status(404).send('Company not found')
>>>>>>> 432c8ec (added possible controller for createReview #16)
            }

            // Create new review
            const newReview = new Review({
                userId,
                companyId,
<<<<<<< HEAD
                companyName,
                questions: {
                    position,
                    accountability: newRatings.accountability,
                    representation: newRatings.representation,
                    workLifeBalance: newRatings.workLifeBalance,
                    careerGrowth: newRatings.careerGrowth,
                    diversityScale: newRatings.diversityScale,
                    companyCulture: newRatings.companyCulture,
                    salary: newRatings.salaries,
                },
=======
                questions: { ...ratings, position },
>>>>>>> 432c8ec (added possible controller for createReview #16)
                comment,
            })

            await newReview.save()
            console.log('Review has been created!')
            res.status(201).send('Review created successfully')
        } catch (err) {
            console.log(err)
            res.status(500).send('Error creating review')
        }
<<<<<<< HEAD
    },
    editReview: async (req, res) => {
=======
    }, editReview: async (req, res) => {
>>>>>>> 432c8ec (added possible controller for createReview #16)
        try {
        } catch (err) {
            console.log(err)
            res.status(500).send('Error updating review')
        }
    },
}

export default reviewController
