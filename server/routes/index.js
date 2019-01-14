const router = require('koa-router')()
const promisePool = require('../db');

router.get('/', async (ctx, next) => {
  // await ctx.render('index', {
    // title: 'Hello Koa 2!'
  // })
  let [rows, fields] = await promisePool.query('select * from user where username=?', ['chenmanjie']);
  ctx.body = rows;
  // ctx.body = {
    // title: 'Hello World!'
  // }
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
