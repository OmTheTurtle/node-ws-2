import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, '..', 'views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, '..', 'static')))

app.listen(3000, () => console.log('Listening on port 3000'))
