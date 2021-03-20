const express = require('express')
const app = express()
const path = require('path')
const createError = require('http-errors')
const { zeroPlus, nowDate } = require('./modules/util') // { zeroPlus, nowDate }

app.listen(3000, () => {
	console.log('=====================');
	console.log('Server Start!');
	console.log('http://127.0.0.1:3000');
	console.log('=====================');
})

app.use('/', express.static(path.join(__dirname, './public')))
app.use('/uploads', express.static(path.join(__dirname, './storages')))

/* Middleware */
app.use((req, res, next) => {
	req.nowTime = nowDate()
	next()
})

/* Router */
const userRouter = require('./routes/user')
const boardRouter = require('./routes/board')
app.use('/user', userRouter)
app.use('/board', boardRouter)

/* app.get('/hello', (req, res, next) => {
	next(createError(500, {msg: 'DB에러가 발생하였습니다.'}))
	//res.send('hello'+req.nowTime)
}) */

/* Error */
app.use((req, res, next) => {
	const msg = '<h1 style="margin: 100px;">Error 404</h1><div>'+nowDate()+'</div>';
	next(createError(404, {code: 404, msg}));
})

app.use((err, req, res, next) => {
	console.log(err)
	res.send(err.msg)
})