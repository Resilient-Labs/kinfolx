import './companyOverview.css'

const CompanyOverview = (props) => {
    console.log(props.founded)
    return (
        <div id="overview" className="content-box">
            <div class="overview-left">
            <div>
                <h3>Overview of company</h3>
                <span>{props.summary}</span>
            </div>
            </div>
            <div class="overview-right">
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
            </div>
        </div>
    )
}

export default CompanyOverview
