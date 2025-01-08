// import { useEffect } from 'react'
import './profile.css'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo.jsx'
import CompanyReviews from '../../components/CompanyReviews/CompanyReviews.jsx'

function Profile() {
    return (
        <main className="profile-container">
            <ProfileInfo />
            <section className="reviews">
                <CompanyReviews />
                <CompanyReviews />
            </section>
        </main>
    )
}

export default Profile
