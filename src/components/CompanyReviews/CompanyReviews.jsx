import { useEffect, useState } from 'react'
import './companyReviews.css'
// import { Link } from 'react-router'

const CompanyReviews = () => {
    //do a fetch request and populate the company reviews!
    const [userReviews, setUserReviews] = useState([])
    console.log(userReviews, 'userReviews in Company Reviews')

    useEffect(() => {
        const getUserReviews = async () => {
            try {
                const response = await fetch('/api/review')
                if (!response.ok) console.log(response.statusText)
                const reviews = await response.json()

                console.log(reviews, 'userReviews')
                setUserReviews(reviews.userReviews)
            } catch (error) {
                console.error(`Error getting a user's reviews, ${error}`)
            }
        }
        getUserReviews()
    }, [])

    async function handleDeleteReview(reviewId) {
        console.log({ reviewId })
        const response = await fetch(`/api/review/${reviewId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (response.ok) {
            // set state to filtered list of reviews without that of deleted ID
            setUserReviews((currentReviews) =>
                currentReviews.filter((review) => review._id !== reviewId),
            )
        } else {
            console.error(`Failed to delete review: ${response.statusText}`)
        }
    }

    return (
        <div className="review">
            <h3>Reviews You have Left (Only Visible to You)</h3>
            <ul className="review-list">
                {userReviews.map((review, index) => (
                    <li key={`review${index}`}>
                        <ul>
                            <li>{`Company Name: ${review.companyName}`}</li>
                            <li>{`Comment: ${review.comment}`}</li>
                            <li>{`Date: ${new Date(review.updatedAt).toString()}`}</li>
                            <li>{`Position: ${review.position}`}</li>
                        </ul>
                        <button
                            onClick={() => handleDeleteReview(review._id)}
                            className="action-btn delete-review"
                        >
                            Delete Review
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CompanyReviews
