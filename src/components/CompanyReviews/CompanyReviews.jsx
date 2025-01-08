import { useEffect } from 'react'
import './companyReviews.css'

const CompanyReviews = () => {
    //do a fetch request and populate the company reviews!

    useEffect( () => {
        const getUserReviews = async () => {
            const response = await fetch('/api/review')
            const userReviews = await response.json()
            console.log(userReviews, 'userReviews')
        }
        getUserReviews()
        
    }, [])
    return (
        <div className="review">
            <h3>Reviews You have Left (Only Visible to You)</h3>
            <ul className="review-list">
                <li>Review 1</li>
                <li>Review 2</li>
                <li>Review 3</li>
            </ul>
        </div>
    )
}

export default CompanyReviews
