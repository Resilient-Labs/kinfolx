import './companyBanner.css'

 const CompanyBanner = (props) => {
    return (
        <section className="company-info">
            <div className="company-logo">Company Logo</div>
            <h1 className="company-name">{props.companyName}</h1>
            <nav className="company-tabs">
                <a href="#overview" className="tab">
                    Overview
                </a>
                <a href="#reviews" className="tab">
                    Reviews
                </a>
                <a href="#salaries" className="tab">
                    Salaries
                </a>
            </nav>
            <button className="btn action-btn">Review This Company</button>
        </section>
    )
}

export default CompanyBanner