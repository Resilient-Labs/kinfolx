import { useEffect } from 'react'
import './MainPage.css'

function MainPage() {
    //sample code to make sure backend is connected.
    const fetchTest = async () => {
        const res = await fetch('/api/test')
        if (!res.ok) {
            throw new Error('Something went wrong')
        }
        const result = await res.json()
        console.log(result)
    }

    useEffect(() => {
        fetchTest()
    }, [])

    return (
        <>
            <div>Hello Kinfolx!!!</div>
        </>
    )
}

export default MainPage
