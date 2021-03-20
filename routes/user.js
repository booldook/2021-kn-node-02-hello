const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
	res.send('<h1>User</h1>')
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