const express = require('express')
const routes = require('./router')

const app = express()
const port = 8080

app.use(express.json())
app.use(routes)


app.listen(port, () => console.log('\nSever: http://localhost:8080\n'))
