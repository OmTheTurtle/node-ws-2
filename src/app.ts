import express from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.join(__dirname, '..', 'static')))
// app.set('views', path.join(__dirname, '..', 'views'))
// app.set('view engine', 'pug')

app.listen(3000, () => console.log('Listening on port 3000'))
