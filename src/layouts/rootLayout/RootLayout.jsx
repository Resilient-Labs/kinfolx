import { Outlet } from 'react-router-dom'
import './rootLayout.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
}

const RootLayout = () => {
    return (
        <div className="rootLayout">
            <Header/>
            <Outlet /> 
            <Footer/>
        </div>
    )
}

export default RootLayout
