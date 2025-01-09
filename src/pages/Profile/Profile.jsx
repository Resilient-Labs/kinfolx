import './profile.css'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo.jsx'
import CompanyReviews from '../../components/CompanyReviews/CompanyReviews.jsx'
import { useUser } from '@clerk/clerk-react'
import { useEffect, useState } from 'react'

function Profile() {
    const { isLoaded, user } = useUser()
    const [userName, setUserName] = useState()
    const [userImage, setUserImage] = useState()
    console.log(userName, userImage); 

    useEffect(() => {
        if (!isLoaded || !user) {
            return 
        } else {
            setUserImage(user.imageUrl)
            setUserName(user.username)
        }
    }, [isLoaded, user])

    if (!isLoaded || !user) {
        return <div>....Loading</div> //make this look pretty like a loading bar or something 
    }
    //load a user's reviews (done)
    //delete button for a review (done)
    //load the profile pic (done)
    //load the userName (done)
    //add an edit button for a review (TO DO!)
    //add a list of favorite companies
    return (
        <main className="profile-container">
            <ProfileInfo userImage={userImage} userName={userName} />
            <section className="reviews">
                <CompanyReviews />
            </section>
        </main>
    )
}

export default Profile
