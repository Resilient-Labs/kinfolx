import express from 'express';
import logger from 'morgan';
import { config } from 'dotenv';
import { requireAuth } from '@clerk/express'

const companyRouter = require("./routes/company");
const reviewRouter = require("./routes/reviews");
const userRouter = require("./routes/user");
config({ path: './config/.env' });

//to check if our env connection is correct
console.log(process.env.DB_STRING);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

app.get('/api/test', ClerkExpressRequireAuth(), async (req, res) => {
  return res.json({ 'itWorks': 'true' });
});
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

app.use('/api/company', companyRouter) 
app.use('/api/review', reviewRouter)
app.use('api/user', userRouter) 

//Testing