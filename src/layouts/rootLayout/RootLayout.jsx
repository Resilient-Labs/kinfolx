import { Link, Outlet } from 'react-router-dom'
import './rootLayout.css'
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from '@clerk/clerk-react'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
}

const RootLayout = () => {
    return (
        <div className="rootLayout">
            <header>
                <Link to="/" className="logo">
                    {/* //add logo here */}
                    <img src="" alt="" />
                    <span>Kinfolx</span>
                </Link>
                <div className="user">
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
