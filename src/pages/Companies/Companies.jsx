import './companies.css'
import CompanyListing from '../../components/CompanyListing/CompanyListing.jsx'

const Companies = () => {
    return (
        <main className="companies-container">
            <h1 className="page-title">Popular Companies</h1>
            <CompanyListing />
        </main>
    )
}

export default Companies
