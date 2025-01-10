import { useState, useRef } from 'react'
import './companyReviews.css'
import validateRatings from '../../utils/validateRatings'

const CompanyReviews = ({review, setReviews}) => {
    const [isEditing, setIsEditing] = useState(false)

    const positionRef = useRef()
    const accountabilityRef = useRef()
    const representationRef = useRef()
    const workLifeBalanceRef = useRef()
    const careerGrowthRef = useRef()
    const diversityScaleRef = useRef()
    const companyCultureRef = useRef()
    const salaryRef = useRef()
    const commentRef = useRef()


    async function handleDeleteReview(reviewId) {
        const response = await fetch(`/api/review/${reviewId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (response.ok) {
            // set state to filtered list of reviews without that of deleted ID
            setReviews((currentReviews) =>
                currentReviews.filter((review) => review._id !== reviewId),
            )
        } else {
            console.error(`Failed to delete review: ${response.statusText}`)
        }
    }

    async function handleEditReview() {
        setIsEditing(true)
    }

    async function handleSave(reviewId) {
        setIsEditing(false)
         console.log(validateRatings(salaryRef.current.value))
        const response = await fetch(`/api/review/${reviewId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                newRatings: {
                    accountability: validateRatings(accountabilityRef.current.value),
                    representation: validateRatings(representationRef.current.value),
                    workLifeBalance: validateRatings(workLifeBalanceRef.current.value),
                    careerGrowth: validateRatings(careerGrowthRef.current.value),
                    diversityScale: validateRatings(diversityScaleRef.current.value),
                    companyCulture: validateRatings(companyCultureRef.current.value),
                    salary: validateRatings(salaryRef.current.value),
                },
                comment: commentRef.current.value,
                position: positionRef.current.value,
            }),
        })
        if (response.ok) {
            try {
                const updatedResponse = await fetch('/api/review')
                if (updatedResponse.ok) {
                    const updatedReviews = await updatedResponse.json()
                    setReviews(updatedReviews.userReviews)
                } else {
                    console.error(
                        'Failed to fetch updated reviews:',
                        updatedResponse.statusText,
                    )
                }
            } catch (error) {
                console.error('Error fetching updated reviews:', error)
            }
        } else {
            console.error(`Failed to edit review: ${response.statusText}`)
        }
    }

    function handleCancel() {
        setIsEditing(false)
    }

    return (
        <div className="review"> 
            <ul className="review-list">
                    <li>
                        {!isEditing ? (
                            <ul>
                                <li>{`Company Name: ${review.companyName}`}</li>
                                <li>{`Position: ${review.position}`}</li>
                                <li>{`Accountability: ${review.questions.accountability}`}</li>
                                <li>{`Representation: ${review.questions.representation}`}</li>
                                <li>{`Work Life Balance: ${review.questions.workLifeBalance}`}</li>
                                <li>{`Career Growth: ${review.questions.careerGrowth}`}</li>
                                <li>{`Diversity Scale: ${review.questions.diversityScale}`}</li>
                                <li>{`Company Culture: ${review.questions.companyCulture}`}</li>
                                <li>{`Salary: ${review.questions.salary}`}</li>
                                <li>{`Comment: ${review.comment}`}</li>
                                <li>{`Date: ${new Date(review.updatedAt).toString()}`}</li>
                            </ul>
                        ) : (
                            <form action="">
                                <ul>
                                    <li>{`Company Name: ${review.companyName}`}</li>
                                    <li>
                                        Position:{' '}
                                        <select ref={positionRef}>
                                            <option defaultValue>
                                                {review.position}
                                            </option>
                                            <option value="Technical + Operations">
                                                Technical + Operations
                                            </option>
                                            <option value="Administration and Support">
                                                Administration and Support
                                            </option>
                                            <option value="Leadership and Strategy">
                                                Leadership and Strategy
                                            </option>
                                            <option value="Client and Service Delivery">
                                                Client and Service Delivery
                                            </option>
                                        </select>
                                    </li>
                                    <li>
                                        Accountability:{' '}
                                        <input
                                            type="number"
                                            min="1"
                                            max="5"
                                            placeholder="Enter a number from 1 to 5"
                                            defaultValue={
                                                review.questions.accountability
                                            }
                                            ref={accountabilityRef}
                                        />
                                    </li>
                                    <li>
                                        {' '}
                                        Representation:{' '}
                                        <input
                                            type="number"
                                            min="1"
                                            max="5"
                                            placeholder="Enter a number from 1 to 5"
                                            defaultValue={
                                                review.questions.representation
                                            }
                                            ref={representationRef}
                                        />
                                    </li>
                                    <li>
                                        {' '}
                                        Work Life Balance:{' '}
                                        <input
                                            type="number"
                                            min="1"
                                            max="5"
                                            placeholder="Enter a number from 1 to 5"
                                            defaultValue={
                                                review.questions.workLifeBalance
                                            }
                                            ref={workLifeBalanceRef}
                                        />
                                    </li>
                                    <li>
                                        {' '}
                                        Career Growth:{' '}
                                        <input
                                            type="number"
                                            min="1"
                                            max="5"
                                            placeholder="Enter a number from 1 to 5"
                                            defaultValue={
                                                review.questions.careerGrowth
                                            }
                                            ref={careerGrowthRef}
                                        />
                                    </li>
                                    <li>
                                        {' '}
                                        Diversity Scale:{' '}
                                        <input
                                            type="number"
                                            min="1"
                                            max="5"
                                            placeholder="Enter a number from 1 to 5"
                                            defaultValue={
                                                review.questions.diversityScale
                                            }
                                            ref={diversityScaleRef}
                                        />
                                    </li>
                                    <li>
                                        {' '}
                                        Company Culture:{' '}
                                        <input
                                            type="number"
                                            min="1"
                                            max="5"
                                            placeholder="Enter a number from 1 to 5"
                                            defaultValue={
                                                review.questions.companyCulture
                                            }
                                            ref={companyCultureRef}
                                        />
                                    </li>
                                    <li>
                                        {' '}
                                        Salary:{' '}
                                        <input
                                            type="number"
                                            min="1"
                                            max="5"
                                            placeholder="Enter a number from 1 to 5"
                                            ref={salaryRef}
                                            defaultValue={
                                                review.questions.salary
                                            }
                                        />
                                    </li>
                                    <li>
                                        {' '}
                                        Comment:{' '}
                                        <textarea
                                            placeholder="Enter a comment"
                                            rows="4"
                                            cols="50"
                                            ref={commentRef}
                                            defaultValue={review.comment}
                                        ></textarea>
                                    </li>
                                    <li>{`Date: ${new Date(review.updatedAt).toString()}`}</li>
                                </ul>
                            </form>
                        )}

                        <div className="btn-wrapper">
                            {!isEditing ? (
                                <>
                                    <button
                                        onClick={() =>
                                            handleEditReview(review._id)
                                        }
                                        className="action-btn edit-review"
                                    >
                                        Edit Review
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDeleteReview(review._id)
                                        }
                                        className="action-btn delete-review"
                                    >
                                        Delete Review
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={() => handleSave(review._id)}
                                        className="action-btn edit-review"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => handleCancel(review._id)}
                                        className="action-btn delete-review"
                                    >
                                        Cancel
                                    </button>
                                </>
                            )}
                        </div>
                    </li>
            </ul>
        </div>
    )
}

export default CompanyReviews
