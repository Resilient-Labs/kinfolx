import Review from '../models/Reviews.js'
import Company from '../models/Company.js'

//possible controller for reviews

const reviewController = {
    
    getUserReview: async (req, res) => {
        try {
            const userId = req.params.userId
            const reviews = await Review.find({ userId }).populate('companyId')
            res.json(reviews)
        } catch (err) {
            console.log(err)
            res.status(500).send('Error fetching user review')
        }
    },
    editReview: async (req, res) => {
        try {
            const { ratings, comment } = req.body
            const {reviewId } = req.params

            // Convert ratings to numbers
            const numericRatings = {}
            for (const [key, value] of Object.entries(ratings)) {
                numericRatings[key] = Number(value)
            }

            // Fetch company details
            const company = await Company.findById(companyId)
            if (!company) {
                return res.status(404).send('Company not found')
            }

            const review = await Review.findOneAndUpdate(
                { _id: reviewId, companyId, user: req.user.id },
                { ratings: numericRatings, comment },
                { new: true },
            )
            if (!review) {
                return res.status(404).send('Review not found')
            }
            console.log('Review has been updated!')
            res.redirect('/reviews')
        } catch (err) {
            console.log(err)
            res.status(500).send('Error updating review')
        }
    },
}

export default reviewController
