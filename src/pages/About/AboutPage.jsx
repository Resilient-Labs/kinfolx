import './aboutPage.css'
import getTeam from '/Users/waskarpaulino/Desktop/Personal/Resilient Coders/finalWeek/kinfolx/db.json'

const AboutPage = () => {
    return (
        <div>
            <div className="teamBlurb">
                <h1>Our Team</h1>
                <p>
                    Introducing our team of versatile full-stack developers, each bringing
                    unique expertise from front-end, back-end, and dev ops. Learn more
                    about us below and don&apos;t hesitate to reach out - let&apos;s connect and
                    make positive impacts together!
                </p>
            </div>

            <div className="memberCardContainer">
                {getTeam
                    .slice()
                    .sort((a, b) => a.firstName.localeCompare(b.firstName))
                    .map((member) => (
                        <div className="memberCard" key={member._id}>
                            <div className="memberCard--header">
                                <h2>
                                    {member.firstName} {member.lastName}
                                </h2>
                                <h3>{member.role}</h3>
                            </div>
                            <img
                                src={member.profilePhoto}
                                alt={`${member.firstName}'s profile`}
                            />
                            <div className="memberSocials">
                                <a href={`mailto:${member.email}`}>
                                    <img src="../Icons/icons8-mail-48.png" alt="Email" />
                                </a>
                                <a href={member.github} target="_blank">
                                    <img src="../Icons/icons8-github-50.png" alt="GitHub" />
                                </a>
                                <a href={member.linkedin} target="_blank">
                                    <img src="../Icons/icons8-linkedin-50.png" alt="LinkedIn" />
                                </a>
                            </div>
                            <div className="memberText">
                                <p>{member.bio}</p>
                            </div>
                        </div>
                    ))}
            </div>

        </div>
    )
}

export default AboutPage