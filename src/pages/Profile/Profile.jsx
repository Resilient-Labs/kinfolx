import './profile.css'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo.jsx'
import CompanyReviews from '../../components/CompanyReviews/CompanyReviews.jsx'
import { useUser } from '@clerk/clerk-react'

function Profile() {
    const { isLoaded, user } = useUser()
    if (!isLoaded || !user) {
        return
    }
    //load a user's reviews (done)
    //delete button for a review 
    //load the profile pic
    //load the userName
    //add an edit button for a review
    //add a list of favorite companies
    return (
        <main className="profile-container">
            <ProfileInfo />
            <section className="reviews">
                <CompanyReviews />
            </section>
        </main>
    )
}

export default Profile
