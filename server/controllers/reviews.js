import Review from '../models/Reviews.js'
import Company from '../models/Company.js'

//possible controller for reviews

const reviewController = {
    createReview: async (req, res) => {
        try {
            const { companyId, ratings, comment, position } = req.body
            console.log(req.body)
            const userId = req.user.id

            // Ensure company exists
            const company = await Company.findById(companyId)
            if (!company) {
                return res.status(404).send('Company not found')
            }

            // Create new review
            const newReview = new Review({
                userId,
                companyId,
                questions: { ...ratings, position },
                comment,
            })

            await newReview.save()
            console.log('Review has been created!')
            res.status(201).send('Review created successfully')
        } catch (err) {
            console.log(err)
            res.status(500).send('Error creating review')
        }
    }, editReview: async (req, res) => {
        try {
            const { ratings, comment } = req.body
            const {reviewId } = req.params

            // Convert ratings to numbers
          let newRatings = {}
        for(let rating in ratings){
            if(ratings[rating] !== undefined){
                newRatings[rating] = ratings[rating]

            }
        }
        console.log(newRatings)

            const review = await Review.findOneAndUpdate(
                { _id: reviewId, userId: req.user.id },
                { questions: newRatings, comment },
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
