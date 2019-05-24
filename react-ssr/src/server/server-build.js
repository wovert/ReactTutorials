const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const ReactDOMServer = require('react-dom/server')
const ServerApp = require('../../dist/ServerApp').default
const port = process.env.PORT || 5000

const AppString = ReactDOMServer.renderToString(ServerApp)
const htmlTemplate = fs.readFileSync(path.join(__dirname, '../../dist/index.html'), 'utf8')
const newHtml = htmlTemplate.replace('<!-- app -->', AppString)

// 获取静态资源
app.use('/public/', express.static(path.join(__dirname, '../../dist')))

app.get('/index', (req, res) => {
  res.send(newHtml)
})

app.listen(port, () => {
  console.log(`Server on port ${port}`)
})