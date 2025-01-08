// import cloudinary from "../middleware/cloudinary";
import Review from "../models/Reviews.js";


const reviewController = {
  getAllCompanyReviews: async (req, res, next) => {
    try {
     //maybe need the company id and review id
       //const { companyId } = req.params;
       //get all reviews
      const reviews = await Review.find({})
      console.log(reviews)
       //display it in the feed component for the reviews
       res.json(reviews); // Send reviews as JSON response
    } catch (error) {
      next(error)
    }
  }

 }

export default reviewController
