import express from 'express'
const reviewRouter = express.Router()
import reviewController from '../controllers/reviews.js'
// const { ensureAuth } = require(../something)

reviewRouter.get('/', reviewController.getUserReviews)
reviewRouter.get('/allCompanyReviews', reviewController.getAllCompanyReviews)
reviewRouter.delete('/:reviewId', reviewController.deleteReview)
reviewRouter.post('/:companyId', reviewController.createReview)
reviewRouter.put('/:reviewId', reviewController.editReview)

export default reviewRouter
