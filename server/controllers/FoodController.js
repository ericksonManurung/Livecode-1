const {Food} = require('../models')

class FoodController{
    static addFood(req,res,next){
        let food = {
            title: req.body.title,
            price: req.body.price,
            ingredients: req.body.price,
            tag: req.body.tag,
            UserId: req.UserId
        }
        console.log(food)
        // const {title,price,ingredients,tag,UserId} = req.body
        Food.create(food)
        .then((data) => {
            res.status(201).json({success:true, data:data})
        }).catch((err) => {
            console.log(err)
        });
    }   


}

module.exports = FoodController