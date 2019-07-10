const koa = require('koa')
const Router = require('koa-router')
const mysql = require('mysql')
const wrapper = require('co-mysql')

let server = new koa()
server.listen(8080)

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test'
})
let db = wrapper(conn)
server.context.db = db

let router = new Router()

// 接口跨域请求
router.get('*', async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  try {
    await next()
  } catch(e) {
    ctx.status = 500
    ctx.body = { error: 1, msg: 'server internal error' }
  }
})

// 列表接口
router.get('/list', async ctx => {
  console.log('list接口')
  let rows = await ctx.db.query('SELECT * FROM item_table')

  ctx.body = {
    error: 0,
    data: rows
  }
})

router.get('/add/:name/:price/:count', async ctx => {
  let { name, price, count } = ctx.params

  let { insertId } = await ctx.db.query('INSERT INTO item_table (name, price, count) VALUES(?, ?, ?)', [name, price, count])

  ctx.body = {
    error: 0,
    data: {
      ID: insertId,
      name, price, count
    }
  }
})

router.get('/del/:id', async ctx => {
  let { id } = ctx.params

  let data = await ctx.db.query('DELETE FROM item_table WHERE ID=?', [id])

  if(data.affectedRows){
    ctx.body = { error: 0, msg: 'success' }
  } else {
    ctx.body = { error: 1, msg: 'no this data' }
  }
})

server.use(router.routes())
