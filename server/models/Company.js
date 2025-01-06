const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//The company model includes:
//A predefined list of companies added to MongoDB initially. This will change if we decide to go a different direction with how a company is determiend (i.e. a user can add their own company)
//Fields to store reviews as references.
//let me know if this works for what we need or not:

const CompanySchema = new Schema({
    companyId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
    blurb: { type: String },
    industry: { type: String },
    salary: { type: Number },
    size: { type: String },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }], // Reference to Review model
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Export the model
module.exports = mongoose.model('Company', CompanySchema);
