import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        console.log(e.target)
        e.preventDefault(); // Prevent form default behavior
        try {
        const response = await fetch(`/api/company/search`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ search: searchTerm })
        });
        const data = await response.json();

        if (data.redirect) {
            navigate.push(`/company/${data.company._id}`); 
        
        } else {
            setResults(data.companies);
        }
    
            } catch (error) {
            console.error('Error during search:', error);
}
    };
    return(
        <div>
                   <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for a company"
                />
                <button type="submit">Search</button>
            </form>
                   
                   {/* <div>
                       {results.length > 0 ? (
                           results.map((company) => (
                               <div key={company._id}>
                                   <h3>{company.name}</h3>
                                   <p>{company.description}</p>
                               </div>
                           ))
                       ) : (
                           null
                       )}
                   </div> */}
               </div>
       );
}

export default SearchBar;







//     return (
        
//              setSearchTerm(e.target.value)}
//                 placeholder="Search for a company"
//             />
//             Search
            
//                 {results.map((company, index) => (
                    
//                         {company.name}
//                         {company.description}
                                        
//                 ))}      
//     );
// };

