import ReviewList from "../../components/ReviewList/ReviewList.jsx"
import './review.css'

const Review = () => {
  return (
    <main className="review-form-container">
        <h1>Review Form</h1>

        <label htmlFor = "company-select">Select a company:</label>
        <select id="company-select">
          <option value="" disabled selected>Choose an existing company</option>
          <option value="company1">Facebook</option>
          <option value="company2">Google</option>
          <option value="company3">Apple</option>
        </select>
        <input type="text" id="new-company" placeholder="Or add a new company name" />
        <ReviewList/>
        
      </main>
  )
}

export default Review






    
      
    

   
