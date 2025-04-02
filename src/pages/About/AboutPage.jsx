import './aboutPage.css'
import teamData from '/Users/waskarpaulino/Desktop/Personal/Resilient Coders/finalWeek/kinfolx/db.json'

const AboutPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Introducing our team of versatile full-stack developers, each bringing
                    unique expertise from front-end, back-end, and dev ops. Learn more
                    about us below and don&apos;t hesitate to reach out - let&apos;s connect and
                    make positive impacts together!
                </p>
            </div>
            <div className='mb-12'>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                    {teamData.getTeam
                        .slice()
                        .sort((a, b) => a.firstName.localeCompare(b.firstName))
                        .map((member) => (
                            <div key={member._id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="p-6">
                                    <div className="flex flex-col items-center">
                                        <div className="relative mb-4">
                                            <img
                                                src={member.profilePhoto}
                                                alt={`${member.firstName}'s profile`}
                                                className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-xl font-bold text-gray-800 mb-1">
                                                {member.firstName} {member.lastName}
                                            </h3>
                                            <p className="text-gray-600 italic mb-4">{member.role}</p>
                                            <p className="text-gray-700 mb-6">{member.bio}</p>
                                            <div className="flex justify-center space-x-4">
                                                <a href={`mailto:${member.email}`} className="hover:opacity-75 transition-opacity">
                                                    <img src="/img/icons/icons8-email-50.png" alt="Email" className="w-8 h-8" />
                                                </a>
                                                <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                                                    <img src="/img/icons/icons8-github-50.png" alt="GitHub" className="w-8 h-8" />
                                                </a>
                                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                                                    <img src="/img/icons/icons8-linkedin-50.png" alt="LinkedIn" className="w-8 h-8" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default AboutPage

{/* <div class="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
    <div class="px-6">
        <div class="flex flex-wrap justify-center">
            <div class="w-full flex justify-center">
                <div class="relative">
                    <img src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true" class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                </div>
            </div>
            <div class="w-full text-center mt-20">
                <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                    <div class="p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">3,360</span>
                        <span class="text-sm text-slate-400">Photos</span>
                    </div>
                    <div class="p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">2,454</span>
                        <span class="text-sm text-slate-400">Followers</span>
                    </div>

                    <div class="p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">564</span>
                        <span class="text-sm text-slate-400">Following</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-2">
            <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">Mike Thompson</h3>
            <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Paris, France
            </div>
        </div>
        <div class="mt-6 py-6 border-t border-slate-200 text-center">
            <div class="flex flex-wrap justify-center">
                <div class="w-full px-4">
                    <p class="font-light leading-relaxed text-slate-600 mb-4">An artist of considerable range, Mike is the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm.</p>
                    <a href="javascript:;" class="font-normal text-slate-700 hover:text-slate-400">Follow Account</a>
                </div>
            </div>
        </div>
    </div>
</div>


<footer class="relative pt-6 pb-2 mt-6">
    <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-6/12 px-4 mx-auto text-center">
            <div class="text-sm text-slate-500 font-semibold py-1">
                Tailwind CSS Component from <a href="https://www.creative-tim.com/product/notus-design-system-pro?ref=tailwindcomponents" class="text-slate-700 hover:text-slate-500" target="_blank">Notus PRO Html</a> by <a href="https://www.creative-tim.com" class="text-slate-700 hover:text-slate-500" target="_blank"> Creative Tim</a>.
            </div>
            </div>
        </div>
    </div>
</footer> */}