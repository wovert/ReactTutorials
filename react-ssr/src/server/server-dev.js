import express from 'express'
const fs = require('fs')
const path = require('path')
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../client/App'

const port = process.env.PORT || 5000
const app = express()

const AppString = renderToString(<App />)

// 同步读取编译之后的页面
const htmlTemplate = fs.readFileSync(path.join(__dirname, '../../dist/index.html'), 'utf8')

// 渲染内容替换到预设区域
const newHtml = htmlTemplate.replace('<!-- app -->', AppString)

// 获取静态资源
app.use('/public/', express.static(path.join(__dirname, '../../dist')))

// create-react-app
// app.use('/', express.static('build'))

app.get('/', (req, res) => {
  res.send(newHtml)
})

app.listen(port, () => {
  console.log(`Server on port ${port}`)
})