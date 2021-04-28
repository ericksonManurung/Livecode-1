const router = require('express').Router()
const routesUser = require('./user')

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.use('/', routesUser)

module.exports = router