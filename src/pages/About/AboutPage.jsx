import './aboutPage.css'
import teamData from '/Users/waskarpaulino/Desktop/Personal/Resilient Coders/finalWeek/kinfolx/db.json'

const AboutPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="flex-grow flex flex-col items-center justify-center">
                <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:py-12">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <div className="max-w-2xl text-center">
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Team</h1>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-4">
                                Introducing our team of versatile full-stack developers, each bringing
                                unique expertise from front-end, back-end, and dev ops. Learn more
                                about us below and don&apos;t hesitate to reach out - let&apos;s connect and
                                make positive impacts together!
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {teamData.getTeam
                            .slice()
                            .sort((a, b) => a.firstName.localeCompare(b.firstName))
                            .map((member) => (
                                <div 
                                    key={member._id}
                                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center"
                                >
                                    <div className="p-5 sm:p-6 w-full flex flex-col items-center">
                                        <div className="text-center mb-4 w-full">
                                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                                {member.firstName} {member.lastName}
                                            </h2>
                                            <h3 className="text-base sm:text-lg text-indigo-600 font-medium mt-1">
                                                {member.role}
                                            </h3>
                                        </div>
                                        
                                        <div className="flex justify-center mb-4 sm:mb-6">
                                            <img
                                                src={member.profilePhoto}
                                                alt={`${member.firstName}'s profile`}
                                                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-indigo-100"
                                            />
                                        </div>

                                        <div className="flex justify-center space-x-4 mb-4 sm:mb-6">
                                            <a 
                                                href={`mailto:${member.email}`}
                                                className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                                                aria-label="Email"
                                            >
                                                <img src="/img/icons/icons8-email-50.png" alt="Email" className="w-6 h-6 sm:w-8 sm:h-8" />
                                            </a>
                                            <a 
                                                href={member.github} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                                                aria-label="GitHub"
                                            >
                                                <img src="/img/icons/icons8-github-50.png" alt="GitHub" className="w-6 h-6 sm:w-8 sm:h-8" />
                                            </a>
                                            <a 
                                                href={member.linkedin} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                                                aria-label="LinkedIn"
                                            >
                                                <img src="/img/icons/icons8-linkedin-50.png" alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8" />
                                            </a>
                                        </div>

                                        <div className="text-center w-full">
                                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                                {member.bio}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage