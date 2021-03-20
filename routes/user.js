const express = require('express')
const router = express.Router()

const pug = { title: '회원관리', css: 'hello' }

router.get('/', (req, res, next) => {
	const users = [
		{id: 1, name: '홍길동', kor: 75},
		{id: 2, name: '홍길만', kor: 80},
		{id: 3, name: '홍길순', kor: 85},
	]
	res.render('hello', { users, ...pug });
})

router.get('/join', (req, res, next) => {
	res.send('<h1>User Join</h1>')
})

router.get('/login', (req, res, next) => {
	res.send('<h1>User Login</h1>')
})

router.get('/logout', (req, res, next) => {
	res.send('<h1>User Logout</h1>')
})

module.exports = router