import '../ProfileInfo/profileInfo.css'
const ProfileInfo = ({ userImage, userName }) => {
    console.log(userImage, 'image in Profile info')
    return (
        <section className="profile-info">
            <img className="profile-pic" src={userImage} alt="user image" />
            <div className="profile-username">{userName}</div>
        </section>
    )
}

export default ProfileInfo
