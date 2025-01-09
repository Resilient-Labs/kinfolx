import { clerkClient } from '@clerk/express'
import User from '../models/User.js'

const userController = {
    addUser: async (req, res, next) => {
        try {
            const clerkId = req.auth.userId
            if (!clerkId) {
                return res.status(400).json({ msg: 'Sign in first' })
            }
            const user = await clerkClient.users.getUser(clerkId)

            await User.updateOne(
                { clerkId: clerkId },
                {
                    $set: {
                        clerkId: user.id,
                        email: user.emailAddresses[0]?.emailAddress,
                        username: user.username,
                    },
                },
                { upsert: true },
            )
        } catch (error) {
            next(error)
        }
  },
  getAllUsers: async (req, res, next) => {
    try {
      const allUsers = await User.find({}); 
      console.log(allUsers);
    } catch (error) {
      next(error)
    }
  },
  addFavoriteCompany: async (req, res, next) => {
    try {
      const clerkId = req.auth.userId 
      const user = await User.findOne({clerkId})
      const companyId = req.params.companyId
      user.favorites.push(companyId)
      console.log(user._id)
      console.log(favoriteCompany);
      res.status(200).json({message : 'Company added to favorites'})
    } catch (error) {
      next(error)
    }
  },
  getFavoritesCompanies: async (req, res, next) => {
    try {
      const favorites = await User.find({ clerkId: req.auth.userId }).select('favoriteCompanies')
    } catch (error) {
      next(error)
    }
  }

}

export default userController