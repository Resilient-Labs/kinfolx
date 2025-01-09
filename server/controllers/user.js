import { clerkClient } from '@clerk/express'
import User from '../models/User.js'
import mongoose from 'mongoose'


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
            const allUsers = await User.find({})
            console.log(allUsers)
        } catch (error) {
            next(error)
        }
    },
    //a new function is coming!
    addFavoriteCompany: async (req, res, next) => {
        try {
          const clerkId = req.auth.userId;
          const companyId = req.params.companyId; 
          const user = await User.findOne({ clerkId });
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
          await User.findByIdAndUpdate(
            user._id,
            { $addToSet: { favorites: new mongoose.Types.ObjectId(companyId) } }
          );
      
          res.status(200).json({ message: 'Company added to favorites' });
        } catch (error) {
          next(error);
        }
    },
    getFavoriteCompanies: async (req, res, next) => {
        try {
            const user = await User.findOne({ clerkId: req.auth.userId })
                .populate('favorites', 'name _id');
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user.favorites.reverse());

        } catch (error) {
            console.error('Error fetching favorite companies:', error);
            res.status(500).json({ message: 'Failed to get favorites' });
        }
    }
    
}

export default userController
