import { useState } from "react";
import ReviewList from "../../components/ReviewList/ReviewList.jsx"
import './review.css'

const Review = () => {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [position, setPosition] = useState('')

  return (
      <main className="review-form-container">
          <h1>Review Form</h1>

          <label htmlFor="company-select">Select a company:</label>
          <select
              onChange={(e) => setSelectedCompany(e.target.value)}
              id="company-select"
          >
              <option defaultValue={""} disabled>
                  Choose an existing company
              </option>
              <option value="Facebook">Facebook</option>
              <option value="Google">Google</option>
              <option value="Apple">Apple</option>
          </select>
          {/* Roles Dropdown */}
          <select onChange={(e) => setPosition(e.target.value)} id="position-select">
              <option value="" disabled selected>
                  Choose your position at your company
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
          {/* <input type="text" id="new-company" placeholder="Or add a new company name" /> */}
          <ReviewList company={selectedCompany} position={position} />
      </main>
  )
}

export default Review






    
      
    

   
