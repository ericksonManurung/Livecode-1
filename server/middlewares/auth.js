const jwt = require('jsonwebtoken')
const {User} = require('../models')

const authentication = (req,res,next)=>{
    if(!req.headers.access_token){
        console.log('header gak ada')
    }else{
        try{
            const decode = jwt.verify(req.headers.access_token,process.env.JWT_SECREAT)
            console.log(decode)
            req.UserId = decode.id
        }catch(err){
            console.log('token salah')
        }
    }

    // User.findByPk(req.UserId)
    // .then((data) => {
    //     if(!data){
    //         console.log('gagal')
    //     }
    //     next()
    // }).catch((err) => {
    //     console.log(err)
    // });
}

const FoodAuthorization = (req,res,next)=>{
    const id = req.params
    
}

module.exports = {authentication}