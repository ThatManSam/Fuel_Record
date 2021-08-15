const express = require ('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/express_backend', (req, res) => {
    res.send({express: 'EXPRESS BACKEND IS CONNECTED TO REACT'})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

