import express from 'express'
<<<<<<< HEAD
const reviewRouter = express.Router()
import reviewController from '../controllers/reviews.js'
// const { ensureAuth } = require(../something)

reviewRouter.post('/:companyId', reviewController.createReview)
reviewRouter.put('/:reviewId', reviewController.editReview)

export default reviewRouter
=======
import reviewController from '../controllers/reviews.js'

const router = express.Router()

router.post('/:companyId', reviewController.createReview)
router.post('/:companyId/:reviewId', reviewController.editReview)
router.get('/user/:userId/:reviewId', reviewController.getUserReview)

export default router
>>>>>>> ac19760 (#2 started edit controller and route)
