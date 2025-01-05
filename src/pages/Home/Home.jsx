import './Home.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Feed from '../../components/Feed/Feed'
import RightSidebar from '../../components/RightSidebar/RightSidebar'

function Home() {
    //sample code to make sure backend is connected.
    // const fetchTest = async () => {
    //     const res = await fetch('/api/protected')
    //     if (!res.ok) {
    //         throw new Error('Something went wrong')
    //     }
    //     const result = await res.json()
    //     console.log(result)
    // }

    // useEffect(() => {
    //     fetchTest()
    // }, [])

    return (
        <main className="home-container">
            <LeftSidebar />
            <Feed />
            <RightSidebar />
        </main>
    )
}

export default Home
