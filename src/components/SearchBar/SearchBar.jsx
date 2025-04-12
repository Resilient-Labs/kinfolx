import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState([])
    const navigate = useNavigate()

    const handleSearch = async (e) => {
        e.preventDefault() // Prevent form default behavior
        try {
            const response = await fetch(`/api/company/search`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ search: searchTerm }),
            })
            const data = await response.json()

            if (data.redirect) {
                navigate(`/company/${data.company._id}`)
            } else {
                setResults(data.companies)
            }
        } catch (error) {
            console.error('Error during search:', error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSearch} className="header_search-form">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder=" Search"
                    className="h-15 w-110 mb-5 font-poppins text-2xl border-2 border-solid border-teal-600 rounded-md focus:outline-none focus:border-teal-600 text-black"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch(e) // Trigger search when Enter is pressed
                        }
                    }}
                />
                {/* <button type="submit" className="header_search-btn">
                    Search
                </button> */}
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
                    <p>No results found</p>
                )}
            </div> */}
        </div>
    )
}

export default SearchBar
