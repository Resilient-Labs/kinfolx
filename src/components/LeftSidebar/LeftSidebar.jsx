import { useState, useEffect } from 'react'
import './leftSidebar.css'
import AddReviewBtn from '../AddReviewBtn/AddReviewBtn'

export default function LeftSidebar() {
    const [favoriteCompanies, setFavoriteCompanies] = useState([])
    useEffect(() => {
        const fetchFavoriteCompanies = async () => {
            try {
                const response = await fetch('/api/user/favorites')
                if (!response.ok)
                    throw new Error('Failed to fetch favorite companies.')
                const data = await response.json()
                console.log(data.favorites)
                setFavoriteCompanies(data.favorites)
            } catch (error) {
                console.error('Error fetching favorite companies:', error)
            }
        }
        fetchFavoriteCompanies()
    }, [])

    return (
        <aside className="left-sidebar">
          <AddReviewBtn/>
            <section className="favorite-companies">
                <h3>Favorite Companies</h3>
                <ul className="favorite-list">
                    {favoriteCompanies.slice(0, 5).map((favoriteCompanies, index) => (
                        <li key={`favoriteCompany${index}`}>
                            {favoriteCompanies.name}
                        </li>
                    ))}
                </ul>
            </section>
        </aside>
    )
}
