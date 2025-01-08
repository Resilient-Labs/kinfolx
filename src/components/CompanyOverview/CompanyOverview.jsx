import './companyOverview.css'

const CompanyOverview = (props) => {
    console.log(props.founded)
    return (
        <div id="overview" className="content-box">
            Overview of company
            <div>
                <h3>Date Founded</h3>
                <span>{props.founded}</span>
            </div>
            <div>
                <h3>Industry</h3>
                <span>{props.industry}</span>
            </div>
            <div>
                <h3>Company Size</h3>
                <span>{props.size}</span>
            </div>
            <div>
                <span>{props.summary}</span>
            </div>
        </div>
    )
}

export default CompanyOverview
