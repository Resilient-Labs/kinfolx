import './companyBanner.css'
import AddReviewBtn from '../AddReviewBtn/AddReviewBtn'
import { useParams } from 'react-router'

const CompanyBanner = (props) => {
    console.log(props)
    let params = useParams()
    async function addFavorite(){
        try {
            const response = await fetch(`/api/user/favorites/${params.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({id: params.id}),
            })
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }
            const responseData = await response.json()
            console.log(`Response received: ${responseData}`)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <section className="company-info">
            <img
                alt={`${props.name} Logo`}
                src={`/img${props.companyLogo} `}
                className="company-logo"
            />
            <h1 className="companyBanner-name">{props.name}</h1>
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
            <div className="companyBanner_buttons">
                <a onClick={addFavorite}>
                    <img className = "favImg" src="/img/red-heart.png" alt="" />
                </a>
                <AddReviewBtn/>
            </div>
        </section>
    )
}

export default CompanyBanner