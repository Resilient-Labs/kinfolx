import './header.css'
import SearchBar from '../SearchBar/SearchBar'
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from '@clerk/clerk-react'

export default function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    <a href="/" className="font-ahsing">Kinfolx</a>
                </div>
                <SearchBar className="header_search" />
                <ul className="nav-links">
                    <li className="header_home">
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/companies">Companies</a>
                    </li>
                    <li>
                        <a href="/profile">Profile</a>
                    </li>
                </ul>
                <div className="auth-links">
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </nav>
        </header>
    )
}
