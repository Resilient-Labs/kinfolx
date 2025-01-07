<<<<<<< HEAD
const userController = {
    addUser: (req, res) => {
      
    }, 
    addFavoriteCompany: (req, res) => {
        
    }
  }
  
  export default userController; 
=======
import { clerkClient } from '@clerk/express'
import User from '../models/User.js'

const userController = {
    addUser: async (req, res, next) => {
        try {
            const clerkId = req.auth.userId
            if (!clerkId) {
                return res.status(400).json({ msg: 'Sign in first' })
            }
          const user = await clerkClient.users.getUser(clerkId); 

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
  }
}

export default userController
>>>>>>> 9720463ea6c04301b27af29611db85cab5fa2f8c
