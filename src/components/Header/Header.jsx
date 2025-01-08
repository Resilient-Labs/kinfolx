import './header.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import SearchBar from '../searchBar/searchBar'

export default function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    <a href="/">INSERT LOGO</a>
                </div>
                <SearchBar />
                <ul className="nav-links">
                    <li>
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
                    {/* <a href="/signup">Sign Up</a>
                    <a href="/login">Login</a> */}
                    {/* <div className="user"> */}
                  
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                {/* </div> */}
                </div>
            </nav>
        </header>
    )
}
