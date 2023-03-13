// Load packages
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

// Create express server
const app = express()

app.use(
  cors({
    origin: '*',
  })
)

// req = request, res = response
app.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
  res.send('hi wyd')
})

app.get('/api/smart-floor-price', (req, res) => {
  async function getSmartFloorPrice(contractAddress) {
    try {
      const config = {
        method: 'GET',
        headers: { Authorization: `Bearer ${process.env.YOUR_API_KEY}` },
        url: `https://api.adviceslip.com/advice`,
      }
      const data = await axios(config).then((res) => res.data)

      res.json(data)
    } catch (err) {
      console.log(err)
    }
  }

  const contractAddress = req.query.contractAddress // this is how to get the request parameters from the frontend
  getSmartFloorPrice(contractAddress)
})

module.exports = app
