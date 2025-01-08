import Company from '../models/Company.js'

const companyController = {
    //fetches all companies: MIGHT NOT WORK WITHOUT FRONT END?
    getAllCompanies: async (req, res, next) => {
        try {
            const companies = await Company.find()
            res.json({ companies })
        } catch (error) {
            next(error)
        }
    },

    //fetches a specific company (and all of its data):
    getCompany: async (req, res, next) => {
        try {
            const { id } = req.params // Get the company ID from the route parameters
            const company = await Company.findById(id).populate('reviews') // Fetch company and populate reviews

            if (!company) {
                return res.status(404).json({ message: 'Company not found' })
            }

            res.status(200).json(company)
        } catch (error) {
            next(error)
        }
    },

    // fetches top 5 companies from DB with the highest review scores:
    getBestCompanies: async (req, res, next) => {
        try {
            const companies = await Company.aggregate([
                {
                    //Joins the reviews collection with the Company collection + stores the matching documents in the 'reviewsData' array.

                    $lookup: {
                        from: 'reviews', // Collection that we want data to join
                        localField: 'reviews', //first field in the current collection
                        foreignField: '_id', // Other field in the other collection
                        as: 'reviewsData', // New array field that is storing the joined data
                    },
                },
                {
                    $addFields: {
                        averageRating: { $avg: '$reviewsData.companyCulture' }, // Calculate the average rating
                    },
                },
                {
                    $sort: { averageRating: -1 }, // Sort by averageRating in descending order
                },
                {
                    $limit: 5, // Limits to top 5 companies
                },
            ])

            res.status(200).json(companies)
        } catch (error) {
            next(error)
        }
    },

    //Fetches 5 worst companies, sorted in ascending order using mongoDB
    getWorstCompanies: async (req, res, next) => {
        try {
            const companies = await Company.aggregate([
                {
                    //Joins the reviews collection with the Company collection + stores the matching documents in the 'reviewsData' array.

                    $lookup: {
                        from: 'reviews', // Collection that we want data to join
                        localField: 'reviews', //first field in the current collection
                        foreignField: '_id', // Other field in the other collection
                        as: 'reviewsData', // New array field that is storing the joined data
                    },
                },
                {
                    $addFields: {
                        averageRating: { $avg: '$reviewsData.companyCulture' }, // Calculate the average rating
                    },
                },
                {
                    $sort: { averageRating: 1 }, // Sort by averageRating in ascending order
                },
                {
                    $limit: 5, // Limit to bottom 5 companies
                },
            ])

            res.status(200).json(companies)
        } catch (error) {
            next(error)
        }
    },
    searchCompany: async (req, res, next) => {
        try {
            let companies = await Company.aggregate([
                {
                    $search: {
                        index: "kinfolk-search",
                        text: {
                            query: req.body.search,
                            path: {
                                wildcard: "*"
                            }
                        }
                    }
                }
            ]);
            // if (companies.length === 1) {
            //     // If exactly one company matches, return it
            //     res.json({ redirect: true, company: companies[0] });
            // } else {
            //     // Otherwise, return the list of companies
            //     res.json({ redirect: false, companies });
            // }
            res.json(companies); // Send the companies data as JSON response
        } catch (error) {
            next(error); // Handle errors appropriately
        }
    }
}

export default companyController

// considerations:

// do we want to add the ability to limit the number of results that return when a user searches for all  companies?

// Should we add query params so that we can filter through specfic companies returned based on specific atributes?


    

