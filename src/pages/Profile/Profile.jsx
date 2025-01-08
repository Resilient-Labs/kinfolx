import './profile.css'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo.jsx'
import CompanyReviews from '../../components/CompanyReviews/CompanyReviews.jsx'
import { useUser } from '@clerk/clerk-react'

function Profile() {
    const { isLoaded, user } = useUser()
    if (!isLoaded || !user) {
        return
    }
    //load a user's reviews
    //delete button for a review
    //load the profile pic
    //load the userName
    //add an edit button for a review

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
