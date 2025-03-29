import express from 'express'
const reviewRouter = express.Router()
import reviewController from '../controllers/reviews.js'
import { requireAuth } from '@clerk/express'

// public routes
reviewRouter.get('/allCompanyReviews', reviewController.getAllCompanyReviews)

// routes that require login
reviewRouter.get('/', requireAuth(), reviewController.getUserReviews)
reviewRouter.delete('/:reviewId', requireAuth(), reviewController.deleteReview)
reviewRouter.post('/:companyId', requireAuth(), reviewController.createReview)
reviewRouter.put('/:reviewId', requireAuth(), reviewController.editReview)

export default reviewRouter
