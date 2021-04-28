const router = require('express').Router()
const FoodController = require('../controllers/FoodController')

router.post('/foods', FoodController.addFood)

module.exports = router