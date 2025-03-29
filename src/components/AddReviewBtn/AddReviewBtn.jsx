import { Link } from 'react-router'
import './addReviewBtn.css'

const AddReviewBtn = () => {
    return (
        <Link className="review-btn bg-blue-500" to="/review">
            Add a Review
        </Link>
    )
}

export default AddReviewBtn
