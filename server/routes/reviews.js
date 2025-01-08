import express from 'express'
import reviewController from '../controllers/reviews.js'

const router = express.Router()

router.post('/:companyId', reviewController.createReview) 
router.put('/:reviewId', reviewController.editReview)

export default router
