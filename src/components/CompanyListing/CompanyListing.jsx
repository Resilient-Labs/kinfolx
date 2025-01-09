import { useState, useEffect } from 'react'
import './companyListing.css'
import { Link } from 'react-router'

const CompanyListing = () => {
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await fetch('/api/company')
                console.log({ response })
                if (!response.ok) throw new Error('Failed to fetch companies.')

                const data = await response.json()
                console.log(data.companies)
                setCompanies(data.companies)
            } catch (error) {
                console.error('Error fetching companies:', error)
            }
        }

        fetchCompanies()
    }, [])
    return (
        <section className="company-grid">
            {companies.map((company) => (
                <div className="company-card" key={company._id}>
                    <Link to={`/company/${company._id}`}>{company.name}</Link>
                </div>
            ))}
        </section>
    )
}

export default CompanyListing
