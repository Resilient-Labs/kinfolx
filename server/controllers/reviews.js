import Review from '../models/Reviews.js'
import Company from '../models/Company.js'
import User from '../models/User.js'

const reviewController = {
 getUserReviews: async (req, res, next) => {
        try {
            const clerkId = req.auth.userId
            const user = await User.find({ clerkId });
            const userId = user[0]._id;
            console.log({userId})
            const userReviews = await Reviews.find({ userId })
            res.json({ userReviews })
        } catch (error) {
            console.log('Error getting user reviews')
            next(error)
        }
    },
    getAllCompanyReviews: async (req, res, next) => {
        try {
            //maybe need the company id and review id
            //const { companyId } = req.params;
            //get all reviews
            const reviews = await Reviews.find({})
            console.log(reviews)
            //display it in the feed component for the reviews
            res.json(reviews) // Send reviews as JSON response
        } catch (error) {
            next(error)
        }
    },
    deleteReview: async (req, res) => {
        try {
            // extract reviewId
            const { reviewId } = req.params
            // find & delete review in db
            const deletedReview = await Reviews.findByIdAndDelete(reviewId)
            if (!deletedReview) {
                return res.status(404).json({ message: 'Review not found' })
            }
            console.log(`Review ${reviewId} has been deleted`)
            res.status(200).json({ message: 'Review deleted successfully' })
        } catch (err) {
            console.error('Error deleting review:', err)
            res.status(500).json({
                message: 'Server error while deleting review',
            })
        }
    },
    createReview: async (req, res) => {
        try {
            // NOTE: assuming we're getting companyId from src/components/ReviewList.jsx (POST fetch statement)
            const { companyId } = req.params
            const { companyName, newRatings, comment, position } = req.body
            // lookup clerkId to get userId
            const clerkId = req.auth.userId
            console.log('Clerk ID: ' + clerkId)
            const user = await User.findOne({ clerkId })
            const userId = user[0]._id
            console.log('User ID: ' + userId)
            // Ensure company exists (when passed companyId in req.body) <---------------- bring back when done testing!
            const foundCompanyId = await Company.findById(companyId)
            if (!foundCompanyId) {
                return res.status(404).send('Company ID not found')
            }
            // Create new review
            const newReview = new Reviews({
                userId,
                companyId,
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
                comment,
            })
            await newReview.save()
            console.log('Review has been created!')
            res.status(201).send('Review created successfully')
        } catch (err) {
            console.log(err)
            res.status(500).send('Error creating review')
        }
    },
    editReview: async (req, res) => {
        try {
            const { reviewId } = req.params

            // NOTE: assuming we're getting companyId from src/components/ReviewList.jsx (POST fetch statement)
            const { newRatings, comment, position } = req.body

            // Edit review - Find review by ID and update
            const updatedReview = await Review.findByIdAndUpdate(
                reviewId,
                {
                    $set: {
                        'questions.position': position,
                        'questions.accountability': newRatings.accountability,
                        'questions.representation': newRatings.representation,
                        'questions.workLifeBalance': newRatings.workLifeBalance,
                        'questions.careerGrowth': newRatings.careerGrowth,
                        'questions.diversityScale': newRatings.diversityScale,
                        'questions.companyCulture': newRatings.companyCulture,
                        'questions.salary': newRatings.salaries,
                        comment,
                    },
                },
                { new: true }, // Return the updated document
            )

            if (!updatedReview) {
                return res.status(404).send('Review not found')
            }

            console.log('Review has been edited!')
            res.status(201).send('Review edited successfully')
        } catch (err) {
            console.log(err)
            res.status(500).send('Error updating review')
        }
    },
}

export default reviewController
