import { useState } from "react";
import './reviewList.css';

const categories = [
  "accountability",
  "representation",
  "work-life-balance",
  "career-growth",
  "diversity-scale",
  "company-culture",
  "salaries",
];

const ReviewList = (props) => {
  const [ratings, setRatings] = useState({});
  const [comment, setComment] = useState("");
  const [newCompany, setNewCompany] = useState("");

  const handleMouseOver = (category, value) => {
    setRatings((prev) => ({
      ...prev,
      [`${category}-hover`]: value,
    }));
  };

  const handleMouseLeave = (category) => {
    setRatings((prev) => ({
      ...prev,
      [`${category}-hover`]: undefined,
    }));
  };

  const handleClick = (category, value) => {
    setRatings((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const handleSubmit = () => {
    const companyName = props.company;

    if (!companyName) {
      alert("Please select or add a company name.");
      return;
    }

    if (categories.some((category) => !ratings[category])) {
      alert("Please rate all categories before submitting.");
      return;
    }

    console.log({ companyName, ratings, comment });
    alert("Review submitted successfully!");
  };

  
  return (
    <div>
      <div className="rating-section">
        {categories.map((category) => (
          <div key={category} className="rating-category">
            <label>{category.split('-').join(' ')}:</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((value) => (
                <img
                  key={value}
                  src={
                    value <= (ratings[`${category}-hover`] || ratings[category])
                      ? "../../public/img/star-yellow.png"
                      : "../../public/img/star-white-transp.png"
                  }
                  alt="star"
                  className="star"
                  onMouseOver={() => handleMouseOver(category, value)}
                  onMouseLeave={() => handleMouseLeave(category)}
                  onClick={() => handleClick(category, value)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

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
  );
};

export default ReviewList;
