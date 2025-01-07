const cloudinary = require('../middleware/cloudinary')
import Review from '../models/Review.js'

const reviewController = {
    deleteReview: async (req, res) => {
        try {
            // extract reviewId
            const { reviewId } = req.params

            // find & delete review in db
            const deletedReview = await Review.findByIdAndDelete(reviewId)

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
}

export default reviewController
