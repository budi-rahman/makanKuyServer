const {Place} = require('../models')

class PlaceController{
    static getAll(req,res){
        res.send('masuk controller place get')
    }
    
}

module.exports = {PlaceController}