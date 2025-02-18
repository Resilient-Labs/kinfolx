import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import './companyReviewSummary.css'

const CompanyReviewSummary = (props) => {
    const [reviews, setReviews] = useState([])
    let params = useParams()
    // const reviews = props.reviews
    const companyName = props.name
    // console.log(props)

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(`/api/review/allCompanyReviews`)
                if (!response.ok) throw new Error('Failed to fetch posts.')
                const data = await response.json()
                setReviews(data.filter((review) => review.companyId._id === params.id))
            } catch (error) {
                console.error('Error fetching posts:', error)
            }
        }
        fetchReviews()
    }, [])

    console.log('Reviews are here:', reviews)

    return (
        <div id="reviews" className="content-box">
            <div>
                <h3>Summary of Reviews</h3>
                {reviews && reviews.length > 0 ? (
                    reviews
                        .filter((review) => review.companyId._id === params.id) // Filter reviews by companyId
                        .map((review, index) => (
                            <div key={index} className="feed-item">
                                <h3 className="company-name">{companyName}</h3>
                                <p className="position">
                                    <strong>Position:</strong> {review.position}
                                </p>
                                <div className="ratings-grid">
                                    {Object.entries(review.questions).map(
                                        ([category, value]) => (
                                            <div
                                                key={category}
                                                className="rating-cell"
                                            >
                                                <span className="category-name">
                                                    {category
                                                        .replace(
                                                            /([A-Z])/g,
                                                            ' $1',
                                                        )
                                                        .toLowerCase()}
                                                </span>
                                                <div className="stars">
                                                    {[1, 2, 3, 4, 5].map(
                                                        (star) => (
                                                            <img
                                                                key={star}
                                                                src={
                                                                    star <=
                                                                    value
                                                                        ? '/img/star-yellow.png'
                                                                        : '/img/star-white-transp.png'
                                                                }
                                                                alt={`${star <= value ? 'Filled' : 'Empty'} Star`}
                                                                className="star-img"
                                                            />
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        ),
                                    )}
                                </div>
                                {review.comment && (
                                    <p className="comment">
                                        <strong>Comment:</strong>{' '}
                                        {review.comment}
                                    </p>
                                )}
                            </div>
                        ))
                ) : (
                    <div className="no-reviews">
                        <p>No reviews available.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CompanyReviewSummary
