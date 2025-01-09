import { useState, useEffect } from 'react'
import './rightSidebar.css'
import AddReviewBtn from '../AddReviewBtn/AddReviewBtn'

export default function RightSidebar() {
    const [bestCompanies, setBestCompanies] = useState([])
    const [worstCompanies, setWorstCompanies] = useState([])

    useEffect(() => {
        const fetchBestCompanies = async () => {
            try {
                const response = await fetch('/api/company/best')
                if (!response.ok)
                    throw new Error('Failed to fetch best companies.')
                const data = await response.json()
                console.log(data)
                setBestCompanies(data)
            } catch (error) {
                console.error('Error fetching best companies:', error)
            }
        }

        const fetchWorstCompanies = async () => {
            try {
                const response = await fetch('/api/company/worst')
                if (!response.ok)
                    throw new Error('Failed to fetch worst companies.')
                const data = await response.json()
                console.log(data)
                setWorstCompanies(data)
            } catch (error) {
                console.error('Error fetching worst companies:', error)
            }
        }

        fetchBestCompanies()
        fetchWorstCompanies()
    }, [])

    return (
        <aside className="rightSidebar_right-sidebar">
            <AddReviewBtn />
            <section className="rightSidebar_top-companies">
                <h3>Best Rated Companies</h3>
                <ul className="rightSidebar_top-list">
                    {bestCompanies.slice(0, 4).map((bestCompany) => (
                        <li key={bestCompany.name}>{bestCompany.name}</li>
                    ))}
                </ul>
            </section>
            <section className="rightSidebar_worst-companies">
                <h3>Worst Rated Companies</h3>
                <ul className="rightSidebar_worst-list">
                    {worstCompanies.slice(0, 4).map((worstCompany) => (
                        <li key={worstCompany.name}>{worstCompany.name}</li>
                    ))}
                </ul>
            </section>
        </aside>
    )
}
