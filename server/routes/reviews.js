import express from 'express'
<<<<<<< HEAD
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

=======
import reviewController from '../controllers/reviews.js'

const router = express.Router()

>>>>>>> 9f55faab1f4ff0c50027537bab4a54d1a6d00dde
router.post('/:companyId', reviewController.createReview) 
router.put('/:reviewId', reviewController.editReview)

export default router
<<<<<<< HEAD
>>>>>>> ac19760 (#2 started edit controller and route)
=======
>>>>>>> 9f55faab1f4ff0c50027537bab4a54d1a6d00dde
