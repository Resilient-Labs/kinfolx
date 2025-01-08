import mongoose from 'mongoose'
const { Schema } = mongoose

//The company model includes:
//A predefined list of companies added to MongoDB initially. This will change if we decide to go a different direction with how a company is determiend (i.e. a user can add their own company)
//Fields to store reviews as references.
//let me know if this works for what we need or not:

const CompanySchema = new Schema({
    name: { type: String, required: true },
    industry: { type: String },
    founded: { type: String, required: true },
    location: { type: String }, //might not use?
    summary: { type: String },
    size: { type: String },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }], // References Review model
    companyLogo: { type: String },
})

// Export the model
export default mongoose.model('Company', CompanySchema)
