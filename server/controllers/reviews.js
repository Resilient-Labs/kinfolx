import Review from '../models/Reviews.js'
import Company from '../models/Company.js'
import User from '../models/User.js'

const reviewController = {
    createReview: async (req, res) => {
        try {
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
            }

            // Create new review
            const newReview = new Review({
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
             const updatedReview =  await Review.findByIdAndUpdate(
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
                { new: true } // Return the updated document
            );

            if (!updatedReview) {
                return res.status(404).send('Review not found');
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
