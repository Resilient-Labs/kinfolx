import mongoose from 'mongoose'
const { Schema } = mongoose

//This review model includes:
// A reference to the user who created the review.
// A reference to the company being reviewed.
// Answers to the review questions this will change since I am not sure how we are collecting that data. for now it is under the assumption that a user is using a number rating system.
// Metadata for timestamps so that reviews can be arranged chronologically.

//let me know if this works for what we need or not:

const ReviewSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Link to User model
        companyId: {
            type: Schema.Types.ObjectId,
            ref: 'Company',
            required: true,
        }, // Link to Company model
        questions: {
            position: { type: String, required: true }, //users job position
            accountability: { type: Number, required: true }, // Scale 1-5
            representation: { type: Number, required: true }, // Scale 1-5
            workLifeBalance: { type: Number, required: true }, // Scale 1-5
            careerGrowth: { type: Number, required: true }, // Scale 1-5
            diversityScale: { type: Number, required: true }, // Scale 1-5
            companyCulture: { type: Number, required: true }, // Scale 1-5
            salary: { type: Number, required: true }, // Scale 1-5
        },
        comment: { type: String, maxlength: 500 }, // Optional comment
    },
    { timestamps: true },
) // Automatically adds createdAt and updatedAt fields

export default mongoose.model('Review', ReviewSchema)

//original schema:
// const ReviewSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//     require: true,
//   },
//   cloudinaryId: {
//     type: String,
//     require: true,
//   },
//   caption: {
//     type: String,
//     required: true,
//   },
//   likes: {
//     type: Number,
//     required: true,
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });
