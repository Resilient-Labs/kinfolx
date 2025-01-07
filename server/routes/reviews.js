import express from 'express'
import reviewController from '../controllers/reviews.js'

const router = express.Router()

router.post('/:companyId', reviewController.createReview)
router.post('/:companyId/:reviewId', reviewController.editReview)
router.get('/user/:userId/:reviewId', reviewController.getUserReview)

export default router
