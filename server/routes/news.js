import express from 'express'
import { config } from 'dotenv'
config({ path: './config/.env' })

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const response = await fetch(`https://api.thenewsapi.com/v1/news/top?api_token=${process.env.NEWS_API_KEY}&categories=business,tech&locale=us&limit=5`)
        const json = await response.json()
        console.log(json)
        res.json(json.data) // return only the array of news articles
    } catch (err) {
        console.error('Failed to fetch news:', err)
        res.status(500).json({ error: 'Failed to fetch news' })
    }
})

export default router
