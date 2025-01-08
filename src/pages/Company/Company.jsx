import { useParams } from 'react-router'
import './company.css'
import CompanyBanner from '../../components/CompanyBanner/CompanyBanner.jsx'
import CompanyOverview from '../../components/CompanyOverview/CompanyOverview.jsx'
import CompanyReviewSummary from '../../components/CompanyReviewSummary/CompanyReviewSummary.jsx'
import CompanySalaries from '../../components/CompanySalaries/CompanySalaries.jsx'
import { useState, useEffect } from 'react'

const Company = () => {
    const [company, setCompany] = useState([])
    let params = useParams()
    console.log({params})

       useEffect(() => {
            const fetchCompany = async () => {
                try {
                    const response = await fetch(`/api/company/${params.id}`);
                    console.log({response});
                    if (!response.ok) throw new Error("Failed to fetch company.");
        
                    const data = await response.json();
                    console.log(data)
                    setCompany(data); 
                    
                    
                } catch (error) {
                    console.error("Error fetching companies:", error);
                }
            };
        
            fetchCompany();
        }, [params.id]);

        console.log(company)
    return (
        <main className="company-container">
            <CompanyBanner companyName={company.name} />
            <section className="content">
                <CompanyOverview {...company} />
                <CompanyReviewSummary {...company} />
                <CompanySalaries />
            </section>
        </main>
    )
}

export default Company
