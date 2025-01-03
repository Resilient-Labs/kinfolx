import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const ProtectedRoute = ({ children }) => {
    const { userId, isLoaded } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoaded && !userId) {
            navigate('/sign-in')
        }
    }, [isLoaded, userId, navigate])

    if (!isLoaded) return <div>Loading...</div>

    return { children }
}
export default ProtectedRoute
