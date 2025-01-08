import './companyReviewSummary.css'

const CompanyReviewSummary = (props) => {
  const reviews = props.reviews
  const companyName = props.name
  console.log(props)

  return (
    <div id="reviews" className="content-box">
      <div>
        <h3>Summary of Reviews</h3>
        {reviews && reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="feed-item">
            <h3 className="company-name">{companyName}</h3>
            <p className="position">
              <strong>Position:</strong> {review.position}
            </p>
            <div className="ratings-grid">
              {Object.entries(review.questions).map(([category, value]) => (
                <div key={category} className="rating-cell">
                  <span className="category-name">
                    {category.replace(/([A-Z])/g, " $1").toLowerCase()}
                  </span>
                  <div className="stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <img
                        key={star}
                        src={
                          star <= value
                            ? '/img/star-yellow.png'
                            : '/img/star-white-transp.png'
                        }
                        alt={`${star <= value ? "Filled" : "Empty"} Star`}
                        className="star-img"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {review.comment && (
              <p className="comment">
                <strong>Comment:</strong> {review.comment}
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
  );
}

export default CompanyReviewSummary



