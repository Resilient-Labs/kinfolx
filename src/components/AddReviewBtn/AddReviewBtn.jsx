import { Link } from 'react-router'
import './addReviewBtn.css'

const AddReviewBtn = () => {
    return (
        <Link className="review-btn" to="/review">
            Add a Review
        </Link>
    )
}

export default AddReviewBtn
