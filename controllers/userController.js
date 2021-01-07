const {User} = require('../models')

class UserController{
    static register(req,res){
        res.send('masuk controller User register')
    }
    static login(req,res){
        res.send('masuk di login')
    }
}

module.exports = {UserController}