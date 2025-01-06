import './leftSidebar.css'

export default function LeftSidebar() {
    return (
        <aside className="left-sidebar">
            <a href='/review' className="action-btn add-review">Add Review</a>
            <button className="action-btn create-post">Create Post</button>
            <section className="favorite-companies">
                <h3>Favorite Companies</h3>
                <ul className="favorite-list">
                    {/* update to dynamically populate */}
                    <li>Favorite company 1</li>
                    <li>Favorite company 2</li>
                    <li>Favorite company 3</li>
                    <li>Favorite company 4</li>
                </ul>
            </section>
        </aside>
    )
}
