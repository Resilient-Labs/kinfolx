import express from 'express'
const reviewRouter = express.Router()
import reviewController from '../controllers/reviews.js';
// const upload = require("../middleware/multer");
// const postsController = require("../controllers/posts");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
// router.get("/:id", ensureAuth, postsController.getPost);

// router.post("/createPost", upload.single("file"), postsController.createPost);

// router.put("/likePost/:id", postsController.likePost);

// router.delete("/deletePost/:id", postsController.deletePost);


// delete a review by reviewId
reviewRouter.delete('/:reviewId', reviewController.deleteReview);

// module.exports = router;
export default reviewRouter
