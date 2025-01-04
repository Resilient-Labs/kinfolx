import React from 'react'
import './rightSidebar.css'

export default function RightSidebar() {
    return (
        <aside className="right-sidebar">
            <section className="top-companies">
                <h3>Best Rated Companies</h3>
                <ul className="top-list">
                    {/* update to dynamically populate */}
                    <li>Top company 1</li>
                    <li>Top company 2</li>
                    <li>Top company 3</li>
                </ul>
            </section>
            <section className="worst-companies">
                <h3>Worst Rated Companies</h3>
                <ul className="worst-list">
                    {/* update to dynamically populate */}
                    <li>Worst company 1</li>
                    <li>Worst company 2</li>
                    <li>Worst company 3</li>
                </ul>
            </section>
        </aside>
    )
}
