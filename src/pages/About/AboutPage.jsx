import './aboutPage.css'
import teamData from '/Users/waskarpaulino/Desktop/Personal/Resilient Coders/finalWeek/kinfolx/db.json'

const AboutPage = () => {
    return (
        <div className="min-h-screen w-full">
            <div className="w-full px-4 py-8">
                <div className="text-center mb-12 flex flex-col items-center justify-start w-full">
                    <h1 className="text-lg font-extrabold text-gray-900 mb-6 tracking-wider">About Us</h1>
                    <p className="text-sm/9 text-gray-800 w-full px-4 py-6 font-light">
                        We started Kinfolx because we know what it feels like to be the <span className='font-extrabold'>&quot;only one&quot;</span> in the room.

                        We&apos;ve worked in environments where diversity was a checkbox and inclusion felt conditional. Despite the promises, not much changed for Black and POC employees. So when companies started pulling back their DEI efforts, it didn&apos;t shock us-it fueled us.

                        Kinfolx is a space created by people who&apos;ve lived it. A space to share stories, hold companies accountable, and connect with a broader community that understands the weight of navigating these challenges. Our goal is simple: to affirm, support, and amplify voices that deserve to be heard.
                    </p>
                </div>
                <div className='mb-20'>
                    <div className='text-center mb-12 flex flex-col items-center justify-start'>
                        <h1 className='text-center font-extrabold text-gray-900 tracking-wider pb-12 mb-12'>Maintenance Team</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {teamData.getTeam
                            .slice()
                            .sort((a, b) => a.firstName.localeCompare(b.firstName))
                            .map((member) => (
                                <div key={member._id} className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
                                <img className="w-32 h-32 rounded-full mx-auto" src={member.profilePhoto} alt={member.firstName} />
                                <h2 className="text-center text-2xl font-semibold mt-3">{member.firstName}</h2>
                                <p className="text-center text-gray-600 mt-1">Software Engineer</p>
                                <div className="flex justify-center mt-5">
                                  <a href={member.twitter} className="text-blue-500 hover:text-blue-700 mx-3">X</a>
                                  <a href={member.linkedin} className="text-blue-500 hover:text-blue-700 mx-3">LinkedIn</a>
                                  <a href={member.github} className="text-blue-500 hover:text-blue-700 mx-3">GitHub</a>
                                  <a href={member.github} className="text-blue-500 hover:text-blue-700 mx-3">Portfolio</a>
                                </div>
                                <div className="mt-5">
                                  <h3 className="text-xl font-semibold">Bio</h3>
                                  <p className="text-gray-600 mt-2">{member.bio}</p>
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