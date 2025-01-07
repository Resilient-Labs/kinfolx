import express from 'express'
import logger from 'morgan'
import { config } from 'dotenv'
import { requireAuth } from '@clerk/express'
import connectDB from './config/database.js'

//Routers
import companyRouter from './routes/company.js'
import userRouter from './routes/user.js'
import reviewRouter from './routes/reviews.js'

//config file and connect database
config({ path: './config/.env' })
await connectDB()

//setting up the server
const app = express()
const PORT = process.env.PORT || 3000

//global middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(requireAuth())

// EXAMPLES FOR HOW TO USE CLERK MIDDLEWARE
// Use a custom sign-in URL instead of the environment variable
app.get(
    '/api/protected',
    requireAuth({ signInUrl: '/sign-in' }),
    (req, res) => {
        res.json({ response: 'This is a protected route' })
    },
)

//route middleware
app.use('/api/company', companyRouter)
app.use('/api/review', reviewRouter)
app.use('/api/user', requireAuth({ signInUrl: '/sign-in' }), userRouter)

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`)
})
