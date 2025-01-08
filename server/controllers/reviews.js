import Review from '../models/Reviews.js'
import Company from '../models/Company.js'

//possible controller for reviews

const reviewController = {
    
    editReview: async (req, res) => {
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
