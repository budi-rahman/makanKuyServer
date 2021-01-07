const Axios = require('axios')

class ZomatoController {
    static async cuisines(req, res) {
        try {
            let URL = `https://developers.zomato.com/api/v2.1/cuisines?city_id=74`
            let ZOMATO_KEY = '2cd294cc0248b7d31174330793f26d4a'
            let response = await Axios.get(URL, { headers: { 'user-key': ZOMATO_KEY } })
            // console.log(response.data)

            return res.json(response.data)
        } catch (err) {
            // console.log(err)
            return res.status(500).json(err)
        }
    }

    static async establishments(req, res) {
        try {
            let URL = `https://developers.zomato.com/api/v2.1/establishments?city_id=74`
            let ZOMATO_KEY = '980fda904333cc2eb792a7775c6f12bc'
            let response = await Axios.get(URL, { headers: { 'user-key': ZOMATO_KEY } })
            // console.log(response.data)

            return res.json(response.data)
        } catch (err) {
            // console.log(err)
            return res.status(500).json(err)
        }
    }

    static async search(req, res) {
        try {
            let URL = `https://developers.zomato.com/api/v2.1/search?entity_id=74&count=20`
            let ZOMATO_KEY = '980fda904333cc2eb792a7775c6f12bc'
            let response = await Axios.get(URL, { headers: { 'user-key': ZOMATO_KEY } })
            let temp = response.data.restaurants
            let result = []
            for (let i = 0; i < temp.length; i++) {
               result.push({
                   name : temp[i].restaurant.name,
                   address : temp[i].restaurant.location.address,
                   cuisines : temp[i].restaurant.cuisines,
                   average_cost_for_two : temp[i].restaurant.average_cost_for_two,
                   user_rating : temp[i].restaurant.user_rating.aggregate_rating,
                   featured_image : temp[i].restaurant.featured_image,
                   timings : temp[i].restaurant.timings
               })
            }

            return res.json(result)
        } catch (err) {
            // console.log(err)
            return res.status(500).json(err)
        }
    }
}

module.exports = ZomatoController

// name 
// location.address 
// cuisines 
// average_cost_for_two 
// user_rating.aggregate_rating 
// featured_image 
// timings
