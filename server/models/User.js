import mongoose from 'mongoose'
const { Schema } = mongoose

//This User Model includes:
//An array list of favorite companies (companyIds).
//An array list of users reviews
//Clerk's user ID for integration.
//username (might not be necessary if we aren't collecting it?)
//

const UserSchema = new Schema({
    username: { type: String, required: true }, //might not need this?
    email: { type: String, required: true, unique: true },
    clerkId: { type: String, required: true, unique: true }, // Clerk user ID
    favorites: [{ type: Schema.Types.ObjectId, ref: 'Company' }], // Favorite companies
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }], // User's reviews
})

export default mongoose.model('User', UserSchema)

//original shema:
// const UserSchema = new mongoose.Schema({
//   userName: { type: String, unique: true },
//   email: { type: String, unique: true },
//   password: String,
// });
