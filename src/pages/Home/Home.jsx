import './home.css'
import Feed from '../../components/Feed/Feed'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'

function Home() {
    const { isLoaded, user } = useUser()

    useEffect(() => {
        if (!isLoaded || !user) {
            return
        }
        
        //add the user to the database
        const addUserToDataBase = async () => {
            try {
                const response = await fetch('/api/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ clerkId: user.id }),
                })

                if (!response.ok) {
                    console.error('Failed to add user to database')
                }
            } catch (error) {
                console.error('Error adding user to database', error)
            }
        }
        addUserToDataBase()
    }, [isLoaded, user])

    return (
        <main className="home_home-container">
            <Feed />
            <RightSidebar />
        </main>
    )
}

export default Home
