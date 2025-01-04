import './company.css'
import CompanyBanner from '../../components/CompanyBanner/CompanyBanner.jsx'
import CompanyOverview from '../../components/CompanyOverview/CompanyOverview.jsx'
import CompanyReviews from '../../components/CompanyReviews/CompanyReviews.jsx'
import CompanySalaries from '../../components/CompanySalaries/CompanySalaries.jsx'

const Company = () => {
    return (
        <main className="company-container">
            <CompanyBanner />
            <section className="content">
                <CompanyOverview />
                <CompanyReviews />
                <CompanySalaries />
            </section>
        </main>
    )
}

export default Company
