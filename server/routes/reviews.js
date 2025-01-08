import express from 'express'
import reviewController from '../controllers/reviews.js'
const reviewRouter = express.Router()
import reviewController from '../controllers/reviews.js'

reviewRouter.get('/:id', reviewController.getUserReviews);
// const upload = require("../middleware/multer");
// const postsController = require("../controllers/posts");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");

//ensure they are logged in aka clerk
reviewRouter.get('/allCompanyReviews', reviewController.getAllCompanyReviews)

// delete a review by reviewId
reviewRouter.delete('/:reviewId', reviewController.deleteReview)

// module.exports = router;
export default reviewRouter