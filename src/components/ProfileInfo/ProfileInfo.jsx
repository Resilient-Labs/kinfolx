import '../ProfileInfo/profileInfo.css'
const ProfileInfo = ({ userImage, userName }) => {
    console.log(userImage, 'image in Profile info')
    return (
        <section className="profileInfo_profile-info">
            <img className="profileInfo_profile-pic" src={userImage} alt="user image" />
            <div className="profileInfo_profile-username">{userName}</div>
        </section>
    )
}

export default ProfileInfo
