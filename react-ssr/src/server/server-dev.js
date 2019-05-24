import express from 'express'
// const fs = require('fs')
// const path = require('path')
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../client/App'

const port = process.env.PORT || 5000
const app = express()

const arr = [1,2,3,4]
const AppString = ReactDOMServer.renderToString(<App list={arr} />)

// const htmlTemplate = fs.readFileSync(path.join(__dirname, '../../dist/index.html'), 'utf8')
// const newHtml = htmlTemplate.replace('<!-- app -->', AppString)

// 获取静态资源
// app.use('/public/', express.static(path.join(__dirname, '../../dist')))

app.get('/', (req, res) => {
  res.send(AppString)
})

app.listen(port, () => {
  console.log(`Server on port ${port}`)
})