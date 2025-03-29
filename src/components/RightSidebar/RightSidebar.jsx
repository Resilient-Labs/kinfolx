import { useState, useEffect } from 'react'
import './rightSidebar.css'
import AddReviewBtn from '../AddReviewBtn/AddReviewBtn'

export default function RightSidebar() {
    const [bestCompanies, setBestCompanies] = useState([])
    const [worstCompanies, setWorstCompanies] = useState([])
    const [newsArticles, setNewsArticles] = useState([])

    useEffect(() => {
        const fetchBestCompanies = async () => {
            try {
                const response = await fetch('/api/company/best')
                if (!response.ok) throw new Error('Failed to fetch best companies.')
                const data = await response.json()
                setBestCompanies(data)
            } catch (error) {
                console.error('Error fetching best companies:', error)
            }
        }

        const fetchWorstCompanies = async () => {
            try {
                const response = await fetch('/api/company/worst')
                if (!response.ok) throw new Error('Failed to fetch worst companies.')
                const data = await response.json()
                setWorstCompanies(data)
            } catch (error) {
                console.error('Error fetching worst companies:', error)
            }
        }

        const fetchNews = async () => {
            try {
                const response = await fetch('/api/news')
                if (!response.ok) throw new Error('Failed to fetch news.')
                const data = await response.json()
                setNewsArticles(data)
            } catch (error) {
                console.error('Error fetching news:', error)
            }
        }

        fetchBestCompanies()
        fetchWorstCompanies()
        fetchNews()
    }, [])

    return (
        <aside className="rightSidebar_right-sidebar">
            <AddReviewBtn />

            <section className="rightSidebar_top-companies">
                <h3>Best Rated Companies</h3>
                <ul className="rightSidebar_top-list">
                    {bestCompanies.slice(0, 4).map((company) => (
                        <li key={company.name}>{company.name}</li>
                    ))}
                </ul>
            </section>

            <section className="rightSidebar_worst-companies">
                <h3>Worst Rated Companies</h3>
                <ul className="rightSidebar_worst-list">
                    {worstCompanies.slice(0, 4).map((company) => (
                        <li key={company.name}>{company.name}</li>
                    ))}
                </ul>
            </section>

            <section className="rightSidebar_news">
                <h3>In the news</h3>
                <ul className="rightSidebar_news-list">
                    {newsArticles.map((article, index) => (
                        <li key={index}>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                {article.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </aside>
    )
}
