import '/Users/franceskarouzard/kinfolx/src/index.css'
import SearchBar from '../SearchBar/SearchBar'
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from '@clerk/clerk-react'
import { Link } from 'react-router'

export default function Header() {
    return (
        <header className="header bg-light-gray pt-5">
            <nav className="navbar flex justify-between">
                <div className="logo">
                    <Link
                        to="/"
                        className="font-ahsing bg-gradient-to-r from-teal-300 to-black bg-clip-text text-transparent text-6xl pl-15"
                    >
                        Kinfolx
                    </Link>
                </div>
                <SearchBar />
                <ul className="nav-links flex justify-evenly w-100 text-3xl">
                    <li>
                        <Link
                            to="/companies"
                            className="text-chocolate font-poppins font-300"
                        >
                            Companies
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/profile "
                            className="text-chocolate font-poppins font-300"
                        >
                            Profile
                        </Link>
                    </li>
                </ul>
                <div className="auth-links flex w-80 justify-evenly mt-0">
                    <SignedOut>
                        <SignInButton className="text-chocolate font-poppins font-bold text-3xl h-5" />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <Link
                        to="/profile "
                        className="text-teal-600  font-poppins font-bold text-3xl border-2 h-18 w-40 text-center pt-2 pb-0 -mt-3 bg-transparent hover:bg-teal-600 hover:text-white rounded "
                    >
                        Sign Up
                    </Link>
                </div>
            </nav>
        </header>
    )
}
