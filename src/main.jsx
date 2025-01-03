import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//react router
import { createBrowserRouter, RouterProvider } from 'react-router'
//clerk
import { ClerkProvider } from '@clerk/react-router'
//components
import MainPage from './MainPage.jsx'
import SignInPage from './components/signInPage/signInPage.jsx'
import SignUpPage from './components/signUpPage/signUpPage.jsx'
import RootLayout from './layouts/rootLayout/RootLayout.jsx'

import './index.css'

//this is related to clerk
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
}

//this is related to frontend routing
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
            { path: '/sign-in/*', element: <SignInPage /> },
            { path: '/sign-up/*', element: <SignUpPage /> },
        ],
    },
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
            <RouterProvider router={router} />
        </ClerkProvider>
    </StrictMode>,
)
