import { useState, useEffect } from "react";
import ReviewList from "../../components/ReviewList/ReviewList.jsx"
import './review.css'

const Review = () => {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [position, setPosition] = useState('')
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
        try {
            const response = await fetch("/api/company");
            console.log({response});
            if (!response.ok) throw new Error("Failed to fetch companies.");

            const data = await response.json();
            console.log(data.companies)
            setCompanies(data.companies); 

            
        } catch (error) {
            console.error("Error fetching companies:", error);
        }
    };

    fetchCompanies();
}, []);
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

              {companies.map((company)=>(<option key={company.name} value={company.name}>{company.name}</option>))}
              
          </select>
          
          {/* Roles Dropdown */}
          <select onChange={(e) => setPosition(e.target.value)} id="position-select">
              <option value="" disabled defaultValue>
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






    
      
    

   
