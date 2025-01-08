import express from 'express';
const reviewRouter = express.Router();
import reviewsController from '../controllers/reviews'

//ensure they are logged in aka clerk
reviewRouter.get('/allCompanyReviews', reviewsController.getAllCompanyReviews)


export default reviewRouter;
