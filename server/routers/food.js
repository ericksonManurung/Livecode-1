const router = require('express').Router()
const FoodController = require('../controllers/FoodController')

router.post('/foods', FoodController.addFood)
router.get('/foods', FoodController.listFood)
router.delete('/foods/:id', FoodController.deleteFood)

module.exports = router