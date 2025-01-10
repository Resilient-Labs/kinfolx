import { useState, useEffect } from 'react'
import ReviewList from '../../components/ReviewList/ReviewList.jsx'
import './review.css'

const Review = () => {
    const [selectedCompany, setSelectedCompany] = useState('')
    const [position, setPosition] = useState('')
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await fetch('/api/company')
                console.log({ response })
                if (!response.ok) throw new Error('Failed to fetch companies.')

                const data = await response.json()
                console.log(data)
                setCompanies(data.companies)
            } catch (error) {
                console.error('Error fetching companies:', error)
            }
        }

        fetchCompanies()
    }, [])
    return (
        <main className="review-form-container">
            <h1>Rate a Company!</h1>
            <h2>
                Your anonymous review will help other job seekers find a company
                that values community, diversity, inclusion and representation
            </h2>
            <div className="review_form-group">
                <label htmlFor="company-select">Select a company:</label>
                <select
                    onChange={(e) => setSelectedCompany(e.target.value)}
                    id="company-select"
                >
                    <option value="" defaultValue>
                        {' '}
                        Choose an existing company{' '}
                    </option>

                    {companies.map((company) => (
                        <option key={company._id} value={company._id}>
                            {company.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Roles Dropdown */}
            <div className="review_form-group">
                <select
                    onChange={(e) => setPosition(e.target.value)}
                    id="position-select"
                >
                    <option value="" defaultValue>
                        {' '}
                        Choose your position at your company{' '}
                    </option>

                    <option value="Technical + Operations">
                        Technical + Operations
                    </option>
                    <option value="Administration and Support">
                        Administration and Support
                    </option>
                    <option value="Leadership and Strategy">
                        Leadership and Strategy
                    </option>
                    <option value="Client and Service Delivery">
                        Client and Service Delivery
                    </option>
                </select>
            </div>
            {/* <input type="text" id="new-company" placeholder="Or add a new company name" /> */}
            <ReviewList company={selectedCompany} position={position} />
        </main>
    )
}

export default Review
