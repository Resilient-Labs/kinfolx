import express from 'express';
import logger from 'morgan';
import { config } from 'dotenv';
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
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

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});

// Get user's chats (Example usage)
// app.get("/api/userchats", ClerkExpressRequireAuth(), async (req, res) => {
//     const { userId } = req.auth; // Get userId from Clerk authentication

//     try {
//         const userChats = await UserChats.findOne({ userId });
//         res.status(200).send(userChats ? userChats.chats : []);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Error fetching user chats!");
//     }
// });

app.use('/api/company', companyRouter) 
app.use('/api/review', reviewRouter)
app.use('api/user', userRouter) 