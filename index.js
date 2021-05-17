const express = require('express')
const router = require('./src/routes')


const app = express()

app.use(express.json({limit: 100}))
app.use(router)

const port = process.env.PORT || '3030'

app.listen(port, () => {
    console.log('Server running...')
})