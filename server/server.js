import express from 'express'
import logger from 'morgan'
import { config } from 'dotenv'
import { requireAuth } from '@clerk/express'

config({ path: './config/.env' })

const app = express()
const PORT = process.env.PORT || 3000

app.use(requireAuth())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

// EXAMPLES FOR HOW TO USE CLERK MIDDLEWARE
// Use a custom sign-in URL instead of the environment variable
app.get(
    '/api/protected',
    requireAuth({ signInUrl: '/sign-in' }),
    (req, res) => {
        res.json({ response: 'This is a protected route' })
    },
)

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`)
})
