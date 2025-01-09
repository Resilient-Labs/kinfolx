<<<<<<< HEAD
import './companyBanner.css'
import AddReviewBtn from '../AddReviewBtn/AddReviewBtn'

const CompanyBanner = (props) => {
    console.log(props)
    return (
        <section className="company-info">
            <img
                alt={`${props.name} Logo`}
                src={`/img${props.companyLogo} `}
                className="company-logo"
            />
            <h1 className="company-name">{props.name}</h1>
            {/* <nav className="company-tabs">
                <a href="#overview" className="tab">
                    Overview
                </a>
                <a href="#reviews" className="tab">
                    Reviews
                </a>
                <a href="#salaries" className="tab">
                    Salaries
                </a>
            </nav> */}
            <AddReviewBtn/>
        </section>
    )
}

export default CompanyBanner
=======
import './companyBanner.css'
import AddReviewBtn from '../AddReviewBtn/AddReviewBtn'

const CompanyBanner = (props) => {
    console.log(props)
    return (
        <section className="company-info">
            <img
                alt={`${props.name} Logo`}
                src={`/img${props.companyLogo} `}
                className="company-logo"
            />
            <h1 className="company-name">{props.name}</h1>
            {/* <nav className="company-tabs">
                <a href="#overview" className="tab">
                    Overview
                </a>
                <a href="#reviews" className="tab">
                    Reviews
                </a>
                <a href="#salaries" className="tab">
                    Salaries
                </a>
            </nav> */}
            <AddReviewBtn/>
        </section>
    )
}

export default CompanyBanner
>>>>>>> fa5ac3f743b18acfeda505df07467e6622754c42
