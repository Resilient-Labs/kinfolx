import express from 'express'
import reviewController from '../controllers/reviews.js'

const router = express.Router()

router.post('/:companyId/:reviewId', reviewController.editReview)

export default router
