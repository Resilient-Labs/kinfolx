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
                    // Joins the reviews collection with the Company collection
                    $lookup: {
                        from: 'reviews', // Collection to join
                        localField: '_id', // Match company ID
                        foreignField: 'companyId', // Match review's companyId
                        as: 'reviewsData', // Store joined data
                    },
                },
                {
                    // Calculate the average of all questions for each company
                    $addFields: {
                        averageRating: {
                            $avg: {
                                $map: {
                                    input: '$reviewsData', // Loop through reviewsData
                                    as: 'review',
                                    in: {
                                        $avg: [
                                            '$$review.questions.accountability',
                                            '$$review.questions.representation',
                                            '$$review.questions.workLifeBalance',
                                            '$$review.questions.careerGrowth',
                                            '$$review.questions.diversityScale',
                                            '$$review.questions.companyCulture',
                                            '$$review.questions.salary',
                                        ],
                                    },
                                },
                            },
                        },
                    },
                },
                { $sort: { averageRating: -1 } }, // Sort by highest averageRating
                { $limit: 5 }, // Limit to top 5 companies
            ]);
    
            console.log('Best Companies:', companies);
            res.status(200).json(companies);
        } catch (error) {
            next(error);
        }
   
    },
    //Fetches 5 worst companies, sorted in ascending order using mongoDB
    getWorstCompanies: async (req, res, next) => {
        try {
            const companies = await Company.aggregate([
                {
                    // Joins the reviews collection with the Company collection
                    $lookup: {
                        from: 'reviews', // Collection to join
                        localField: '_id', // Match company ID
                        foreignField: 'companyId', // Match review's companyId
                        as: 'reviewsData', // Store joined data
                    },
                },
                {
                    // Calculate the average of all questions for each company
                    $addFields: {
                        averageRating: {
                            $avg: {
                                $map: {
                                    input: '$reviewsData', // Loop through reviewsData
                                    as: 'review',
                                    in: {
                                        $avg: [
                                            '$$review.questions.accountability',
                                            '$$review.questions.representation',
                                            '$$review.questions.workLifeBalance',
                                            '$$review.questions.careerGrowth',
                                            '$$review.questions.diversityScale',
                                            '$$review.questions.companyCulture',
                                            '$$review.questions.salary',
                                        ],
                                    },
                                },
                            },
                        },
                    },
                },
                { $sort: { averageRating: 1 } }, // Sort by lowest averageRating
                { $limit: 5 }, // Limit to bottom 5 companies
            ]);
    
            console.log('Worst Companies:', companies);
            res.status(200).json(companies);
        } catch (error) {
            next(error);
        }
    },
    searchCompany: async (req, res, next) => {
        try {
            let companies = await Company.aggregate([
                {
                    $search: {
                        index: 'kinfolk-search',
                        text: {
                            query: req.body.search,
                            path: {
                                wildcard: '*',
                            },
                        },
                    },
                },
            ])
            // if (companies.length === 1) {
            //     // If exactly one company matches, return it
            //     res.json({ redirect: true, company: companies[0] });
            // } else {
            //     // Otherwise, return the list of companies
            //     res.json({ redirect: false, companies });
            // }
            res.json(companies) // Send the companies data as JSON response
        } catch (error) {
            next(error) // Handle errors appropriately
        }
    },
}

export default companyController

// considerations:

// do we want to add the ability to limit the number of results that return when a user searches for all  companies?

// Should we add query params so that we can filter through specfic companies returned based on specific atributes?
