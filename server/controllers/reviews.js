import Reviews from '../models/Reviews.js'

const reviewController = {
    getUserReviews: async (req, res, next) => {
        try {
            const { id } = req.params
            if (!id) {
                return res.status(400).json({ msg: 'user id is required' })
            }
            const userReviews = await Reviews.find({ userId: id });
            res.json({ userReviews })
        } catch (error) {
            console.log('Error getting user reviews')
            next(error)
        }
    },

    // getPost: async (req, res) => {
    //     try {
    //         const post = await Post.findById(req.params.id)
    //         res.render('post.ejs', { post: post, user: req.user })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // },
    // createPost: async (req, res) => {
    //     try {
    //         // Upload image to cloudinary
    //         const result = await cloudinary.uploader.upload(req.file.path)

    //         await Post.create({
    //             title: req.body.title,
    //             image: result.secure_url,
    //             cloudinaryId: result.public_id,
    //             caption: req.body.caption,
    //             likes: 0,
    //             user: req.user.id,
    //         })
    //         console.log('Post has been added!')
    //         res.redirect('/profile')
    //     } catch (err) {
    //         console.log(err)
    //     }
    // },
    // likePost: async (req, res) => {
    //     try {
    //         await Post.findOneAndUpdate(
    //             { _id: req.params.id },
    //             {
    //                 $inc: { likes: 1 },
    //             },
    //         )
    //         console.log('Likes +1')
    //         res.redirect(`/post/${req.params.id}`)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // },
    // deletePost: async (req, res) => {
    //     try {
    //         // Find post by id
    //         let post = await Post.findById({ _id: req.params.id })
    //         // Delete image from cloudinary
    //         await cloudinary.uploader.destroy(post.cloudinaryId)
    //         // Delete post from db
    //         await Post.remove({ _id: req.params.id })
    //         console.log('Deleted Post')
    //         res.redirect('/profile')
    //     } catch (err) {
    //         res.redirect('/profile')
    //     }
    // },
}

export default reviewController
