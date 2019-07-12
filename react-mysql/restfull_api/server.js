const koa = require("koa");
const Router = require("koa-router");
const mysql = require("mysql");

// 将 mysql.query 封装成 Promise 形式
const wrapper = require("co-mysql");

// 启动8080端口的webserver服务
let server = new koa();
server.listen(8080);

// 连接数据库
let pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test"
});
let db = wrapper(pool);

// 绑定上下恩context
server.context.db = db;

// 创建路由
let router = new Router();

// 接口跨域请求
router.get("*", async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  try {
    // 继续请求
    await next();
  } catch (e) {
    ctx.status = 500;
    ctx.body = { error: 1, msg: "server internal error" };
  }
});

// 列表接口
router.get("/list", async ctx => {
  console.log("list接口");
  let rows = await ctx.db.query("SELECT * FROM item_table");
  ctx.body = {
    error: 0,
    data: rows
  };
});

// 添加接口
router.get("/add/:name/:price/:count", async ctx => {
  let { name, price, count } = ctx.params;

  let { insertId } = await ctx.db.query(
    "INSERT INTO item_table (name, price, count) VALUES(?, ?, ?)",
    [name, price, count]
  );

  ctx.body = {
    error: 0,
    data: {
      ID: insertId,
      name,
      price,
      count
    }
  };
});

// 删除接口
router.get("/del/:id", async ctx => {
  let { id } = ctx.params;
  let data = await ctx.db.query("DELETE FROM item_table WHERE ID=?", [id]);
  if (data.affectedRows) {
    ctx.body = { error: 0, msg: "success" };
  } else {
    ctx.body = { error: 1, msg: "no this data" };
  }
});

server.use(router.routes());
