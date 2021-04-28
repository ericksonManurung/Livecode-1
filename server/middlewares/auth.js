const jwt = require('jsonwebtoken')
const {User, Food} = require('../models')

const authentication = (req,res,next)=>{
    if(!req.headers.access_token){
        console.log('header gak ada')
    }else{
        try{
            const decode = jwt.verify(req.headers.access_token, process.env.JWT_SECREAT)
            console.log(decode)
            req.UserId = decode.id
        }catch(err){
            console.log('token salah')
        }
    }

}

const FoodAuthorization = (req,res,next)=>{
    const {id} = req.params
    Food.findOne({where:{id,}})
}

module.exports = {authentication}