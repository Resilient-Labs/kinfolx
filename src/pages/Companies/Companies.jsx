import './companies.css'
import CompanyListing from '../../components/CompanyListing/CompanyListing.jsx'

const Companies = () => {
    return (
        <main className="companies_companies-container">
            <h1 className="companies_page-title">Popular Companies</h1>
            <CompanyListing />
        </main>
    )
}

export default Companies
