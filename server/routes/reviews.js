import express from 'express'
const reviewRouter = express.Router()
import reviewController from '../controllers/reviews.js'
// const { ensureAuth } = require(../something)

reviewRouter.post('/:companyId', reviewController.createReview)
reviewRouter.put('/:reviewId', reviewController.editReview)

export default reviewRouter