import { useState } from "react";
import './reviewList.css';

const categories = {
  "accountability": "Evaluate how effectively individuals and teams take responsibility for their actions and deliverables.",
  "representation": "Assess the visibility and inclusion of diverse voices and perspectives within the organization.",
  "workLifeBalance": "Measure how well the organization supports employees in balancing professional responsibilities with personal life.",
  "careerGrowth": "Gauge the opportunities for professional development, skill-building, and upward mobility within the company.",
  "diversityScale": "Rate the extent to which the organization fosters and promotes diversity in its workforce.",
  "companyCulture": "Reflect on the values, attitudes, and overall environment that define the workplace experience.",
  "salaries": "Provide feedback on the fairness and competitiveness of compensation offered by the company.",
};


const ReviewList =  (props) => {
    const [ratings, setRatings] = useState({})
    const [comment, setComment] = useState('')
    
    
    console.log(ratings, 'I am ratings')

    const handleMouseOver = (category, value) => {
        setRatings((prev) => ({
            ...prev,
            [`${category}-hover`]: value,
        }))
    }

    const handleMouseLeave = (category) => {
        setRatings((prev) => ({
            ...prev,
            [`${category}-hover`]: undefined,
        }))
    }

    const handleClick = (category, value) => {
        setRatings((prev) => ({
            ...prev,
            [category]: value,
        }))
    }

    const handleSubmit = async () => {
        const companyId = props.company
        const position = props.position
        let newRatings = {}
        for(let rating in ratings){
            if(ratings[rating] !== undefined){
                newRatings[rating] = ratings[rating]

            }
        }
 
        const reviewData = {
            companyId,
            position,
            newRatings,
            comment,
        };
        
        if (!companyId || !position) {
            alert('Please select or add a company name and role.')
            return
        }

        if (Object.keys(categories).some((category) => !ratings[category])) {
            alert('Please rate all categories before submitting.')
            return
        }

        console.log({reviewData})
        alert('Review submitted successfully!')



        try {
            const response = await fetch(`/api/review/${companyId}`, {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json',
                 },
                 body: JSON.stringify(reviewData),
            });
            if (!response.ok) {
                console.log({reviewData})
                throw new Error (`Response status: ${response.status}`)
            } else {
                const responseData = await response.json()
                console.log(`Response: ${responseData}`)
                window.location.href = '/'
            }
        } catch (error) {
             console.log(error)
        }

    }
    return (
        <div>
            <div className="review_list_rating-section">
                {Object.entries(categories).map(([category, caption]) => (
                    <div key={category} className="review_list_rating-category">
                        <div className="star_wrapper">
                            <label>{category.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, str => str.toUpperCase())}:</label>
                            <p className="review_list_sub-caption">{caption}</p>
                            <div className="review_list_star-rating">
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <img
                                        key={value}
                                        src={
                                            value <=
                                            (ratings[`${category}-hover`] ||
                                                ratings[category])
                                                ? './img/star-yellow.png'
                                                : './img/star-white-transp.png'
                                        }
                                        alt="star"
                                        className="review_list_star"
                                        onMouseOver={() =>
                                            handleMouseOver(category, value)
                                        }
                                        onMouseLeave={() =>
                                            handleMouseLeave(category)
                                        }
                                        onClick={() => handleClick(category, value)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="review_list_review-form-container"> 
            <textarea
                id="comment"
                rows="5"
                placeholder="Add a comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />

            <button id="submit-review" onClick={handleSubmit}>
                Submit
            </button>
            </div>

        </div>
    )
};

export default ReviewList;

