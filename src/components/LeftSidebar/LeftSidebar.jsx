import { useState, useEffect } from 'react'
import './leftSidebar.css'

export default function LeftSidebar() {
    const [favoriteCompanies, setFavoriteCompanies] = useState([])

    useEffect(() => {
        const fetchFavoriteCompanies = async () => {
            try {
                const response = await fetch('/api/user/favorites')
                if (!response.ok)
                    throw new Error('Failed to fetch favorite companies.')
                const data = await response.json()
                console.log(data)
                setFavoriteCompanies(data) 
            } catch (error) {
                console.error('Error fetching favorite companies:', error)
            }
        }
        fetchFavoriteCompanies()
    }, [])

    return (
        <aside className="leftSideBar_left-sidebar">
            <section className="leftSideBar_favorite-companies">
                <h3 className="leftSideBar_h3">Favorite Companies</h3>
                <ul className="leftSideBar_favorite-list">
                    {favoriteCompanies.slice(0,6).map((company, index) => (
                        <li key={`favoriteCompany${index}`}>
                            {company.name}
                        </li>
                    ))}
                </ul>
            </section>
        </aside>
    )
}
