import { useState, useEffect } from 'react'
import './feed.css'

export default function Feed() {
    const [reviews, setReviews] = useState([])

    // Hardcoded fallback reviews
    // const fallbackReviews = [
    //     {
    //         companyName: 'Tesla',
    //         position: 'Administration and Support',
    //         questions: {
    //             accountability: 3,
    //             representation: 3,
    //             workLifeBalance: 4,
    //             careerGrowth: 4,
    //             diversityScale: 5,
    //             companyCulture: 2,
    //             salaries: 1,
    //         },
    //         comment: 'Poor salary, but diverse. I felt at home here!',
    //     },
    //     {
    //         companyName: 'Spotify',
    //         position: 'Technical + Operations',
    //         questions: {
    //             accountability: 4,
    //             representation: 5,
    //             workLifeBalance: 3,
    //             careerGrowth: 5,
    //             diversityScale: 4,
    //             companyCulture: 4,
    //             salaries: 2,
    //         },
    //         comment: 'Great work-life balance but average salaries.',
    //     },
    //     {
    //         companyName: 'Google',
    //         position: 'Leadership and Strategy',
    //         questions: {
    //             accountability: 5,
    //             representation: 5,
    //             workLifeBalance: 5,
    //             careerGrowth: 5,
    //             diversityScale: 5,
    //             companyCulture: 5,
    //             salaries: 5,
    //         },
    //         comment: 'Best company to work for!',
    //     },
    //     {
    //         companyName: 'Microsoft',
    //         position: 'Technical + Operations',
    //         questions: {
    //             accountability: 4,
    //             representation: 4,
    //             workLifeBalance: 3,
    //             careerGrowth: 4,
    //             diversityScale: 4,
    //             companyCulture: 4,
    //             salaries: 4,
    //         },
    //         comment: 'Solid company with good growth opportunities.',
    //     },
    //     {
    //         companyName: 'Meta',
    //         position: 'Client and Service Delivery',
    //         questions: {
    //             accountability: 3,
    //             representation: 5,
    //             workLifeBalance: 4,
    //             careerGrowth: 3,
    //             diversityScale: 5,
    //             companyCulture: 4,
    //             salaries: 3,
    //         },
    //         comment:
    //             'Amazing diversity focus, but work-life balance could improve.',
    //     },
    //     {
    //         companyName: 'Amazon',
    //         position: 'Administration and Support',
    //         questions: {
    //             accountability: 4,
    //             representation: 3,
    //             workLifeBalance: 2,
    //             careerGrowth: 4,
    //             diversityScale: 3,
    //             companyCulture: 2,
    //             salaries: 4,
    //         },
    //         comment: 'Fast-paced environment but tough on work-life balance.',
    //     },
    //     {
    //         companyName: 'Netflix',
    //         position: 'Leadership and Strategy',
    //         questions: {
    //             accountability: 5,
    //             representation: 4,
    //             workLifeBalance: 4,
    //             careerGrowth: 5,
    //             diversityScale: 3,
    //             companyCulture: 5,
    //             salaries: 5,
    //         },
    //         comment: 'Great leadership culture and excellent perks.',
    //     },
    //     {
    //         companyName: 'Intel',
    //         position: 'Technical + Operations',
    //         questions: {
    //             accountability: 3,
    //             representation: 4,
    //             workLifeBalance: 5,
    //             careerGrowth: 3,
    //             diversityScale: 3,
    //             companyCulture: 3,
    //             salaries: 4,
    //         },
    //         comment: 'Boring and career growth is limited.',
    //     },
    //     {
    //         companyName: 'Apple',
    //         position: 'Administration and Support',
    //         questions: {
    //             accountability: 4,
    //             representation: 5,
    //             workLifeBalance: 4,
    //             careerGrowth: 5,
    //             diversityScale: 5,
    //             companyCulture: 5,
    //             salaries: 4,
    //         },
    //         comment: 'Great company culture and diversity focus!',
    //     },
    // ]

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(`/api/review/allCompanyReviews`)
                if (!response.ok) throw new Error('Failed to fetch posts.')
                const data = await response.json()

                if (data.length === 0) {
                    // If no reviews fetched, use fallback reviews
                    setReviews([])
                } else {
                    setReviews(data)
                }
            } catch (error) {
                console.error('Error fetching posts:', error)
                setReviews([])
            }
        }
        fetchReviews()
    }, [])

    return (
        <section className="feed_feed">
            {reviews.map((review, index) => (
                <div key={index} className="feed_feed-item">
                    <h3 className="feed_company-name">{review.companyName}</h3>
                    <p className="feed_role">
                        <strong>Position:</strong> {review.position}
                    </p>
                    <div className="feed_ratings-grid">
                        {Object.entries(review.questions).map(
                            ([category, value]) => (
                                <div
                                    key={category}
                                    className="feed_rating-cell"
                                >
                                    <span className="feed_category-name">
                                        {category
                                            .replace(/([A-Z])/g, ' $1')
                                            .toLowerCase()}
                                    </span>
                                    <div className="feed_stars">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <img
                                                key={star}
                                                src={
                                                    star <= value
                                                        ? '/img/star-yellow.png'
                                                        : '/img/star-white-transp.png'
                                                }
                                                alt={`${star <= value ? 'Filled' : 'Empty'} Star`}
                                                className="feed_star-img"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ),
                        )}
                    </div>
                    {review.comment && (
                        <p className="feed_comment">
                            <strong>Comment:</strong> {review.comment}
                        </p>
                    )}
                </div>
            ))}
        </section>
    )
}
