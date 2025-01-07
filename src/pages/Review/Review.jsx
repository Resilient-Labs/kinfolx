import { useState } from "react";
import ReviewList from "../../components/ReviewList/ReviewList.jsx"
import './review.css'

const Review = () => {
  const [selectedCompany, setSelectedCompany] = useState("");

  return (
    <main className="review-form-container">
        <h1>Review Form</h1>

        <label htmlFor = "company-select">Select a company:</label>
        <select onChange={(e) => setSelectedCompany(e.target.value)} id="company-select">
          <option value="" disabled selected>Choose an existing company</option>
          <option value="Facebook">Facebook</option>
          <option value="Google">Google</option>
          <option value="Apple">Apple</option>
        </select>
        <input type="text" id="new-company" placeholder="Or add a new company name" />
        <ReviewList company = {selectedCompany}/>
        
      </main>
  )
}

export default Review






    
      
    

   
