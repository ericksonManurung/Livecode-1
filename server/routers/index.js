const router = require('express').Router()
const routesUser = require('./user')
const routesFood = require('./food')
const {authentication} = require('../middlewares/auth')

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.use('/', routesUser)

router.use(authentication)
router.use('/', routesFood)

module.exports = router