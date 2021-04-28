const {User} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController{
    static regis(req,res,next){
        const {email,password} = req.body
        User.create({email,password})
        .then((data) => {
            res.status(201).json({data:data})
        }).catch((err) => {
            console.log(err)
        });
    }

    static login(req,res,next){
        const {email,password} = req.body
         
        User.findOne({where:{email}})
        .then((data) => {
            console.log(data)
            if(data && bcrypt.compareSync(password, data.password)){
                console.log('ada')
                const access_token = jwt.sign({id:data.id, email:data.email}, process.env.JWT_SECREAT)
                res.status(200).json({success:true, access_token})
            }else{
                console.log('gak')
            }
        }).catch((err) => {
            
        });
    }
}

module.exports = UserController