const {User} = require('../models')
const { comparePass, hashPassword } = require('../helpers/hash')
const { generateToken } = require('../helpers/jwt')

class UserController{
    static register(req,res){
        const {name, email, password} = req.body  
        User.create({name, email, password:hashPassword(password)})
        .then(data => {
            res.status(201).json({
                name:data.name,
                email:data.email
            })
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
    static login(req,res){
        const {email,password} = req.body
        User.findOne({
            where:{
                email:email
            }
        })
        .then(data => {
            if (!data) {
                res.status(401).json({
                    msg: 'Invalid Email/Password'
                })
            } 
            if (comparePass(password, data.password)) {
                const payload = {
                    id: data.id,
                    name: data.name,
                    email: data.email
                }
                const access_token = generateToken(payload)
                return res.status(200).json({
                    access_token : access_token
                })
            } else {
                throw{
                    msg: 'Invalid Email/Password'
                }
            }
        })
        .catch(err => {
            res.status(401).json(err)
        })
    }
}

module.exports = {UserController}