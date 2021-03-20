const moment = require('moment')

const zeroPlus = n => n < 10 ? '0'+n : n
const nowDate = () => moment().format('YYYY-MM-DD hh:mm:ss')

module.exports = { zeroPlus, nowDate } 