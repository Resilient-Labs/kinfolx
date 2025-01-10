import './profile.css'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo.jsx'
import CompanyReviews from '../../components/CompanyReviews/CompanyReviews.jsx'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import { useUser } from '@clerk/clerk-react'
import { useEffect, useState } from 'react'
import Spinner from '../../components/LoadingSpinner/Spinner.jsx'

function Profile() {
    const { isLoaded, user } = useUser()
    const [userName, setUserName] = useState()
    const [userImage, setUserImage] = useState()
    const [userReviews, setUserReviews] = useState([])

    useEffect(() => {
        if (!isLoaded || !user) {
            return
        } else {
            setUserImage(user.imageUrl)
            setUserName(user.username)
        }
    }, [isLoaded, user])

    //do a fetch request and populate the company reviews!
    useEffect(() => {
        const getUserReviews = async () => {
            try {
                const response = await fetch('/api/review')
                if (!response.ok) console.log(response.statusText)
                const reviews = await response.json()

                setUserReviews(reviews.userReviews)
            } catch (error) {
                console.error(`Error getting a user's reviews, ${error}`)
            }
        }
        getUserReviews()
    }, [])

    if (!isLoaded || !user) {
       return <Spinner />
    }

    return (
        <main className="profile_profile-container">
            <ProfileInfo userImage={userImage} userName={userName} />

            <h3 className="profile_center">
                Reviews You have Left (Only Visible to You)
            </h3>
            <section className="profile_reviews">
                <LeftSidebar />
                {userReviews.map((review, index) => (
                    <CompanyReviews
                        key={`userCompanyReview${index}`}
                        review={review}
                        setReviews={setUserReviews}
                    />
                ))}
            </section>
        </main>
    )

}

export default Profile
