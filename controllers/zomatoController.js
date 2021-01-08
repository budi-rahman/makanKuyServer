const Axios = require('axios')

class ZomatoController {
    static async cuisines(req, res) {
        try {
            let URL = `https://developers.zomato.com/api/v2.1/cuisines?city_id=74`
            let ZOMATO_KEY = '2cd294cc0248b7d31174330793f26d4a'
            let response = await Axios.get(URL, { headers: { 'user-key': ZOMATO_KEY } })
            // console.log(response.data)
            let data = response.data.cuisines
            data = data.map(detail => { return detail.cuisine })
            return res.json({ data: data })
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

            let data = response.data.establishments
            data = data.map(detail => {
                return {
                    establishment_id: detail.establishment.id,
                    establishment_name: detail.establishment.name,
                }
            })

            return res.json({ data: data })
        } catch (err) {
            // console.log(err)
            return res.status(500).json(err)
        }
    }

    static async all(req, res) {
        try {
            console.log('>>> body : ', req.body.sort)
            let sort = ''
            if (req.body.sort == 'asc') {
                let sort = '&sort=rating&order=asc'
            } else if (req.body.sort == 'desc') {
                let sort = '&sort=rating&order=desc'
            }
            let URL = `https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city${sort}`
            let ZOMATO_KEY = '980fda904333cc2eb792a7775c6f12bc'
            let response = await Axios.get(URL, { headers: { 'user-key': ZOMATO_KEY } })
            let temp = response.data.restaurants
            let result = []
            for (let i = 0; i < temp.length; i++) {
                // console.log(temp[i])

                result.push({
                    name: temp[i].restaurant.name,
                    address: temp[i].restaurant.location.address,
                    cuisines: temp[i].restaurant.cuisines,
                    average_cost_for_two: temp[i].restaurant.average_cost_for_two,
                    user_rating: temp[i].restaurant.user_rating.aggregate_rating,
                    featured_image: temp[i].restaurant.featured_image,
                    timings: temp[i].restaurant.timings
                })
            }

            return res.json({ data: result })
        } catch (err) {
            // console.log(err)
            return res.status(500).json(err)
        }
    }

    static async search(req, res) {
        try {
            let sort = ''
            if (req.body.sort == 'asc') {
                let sort = '&sort=rating&order=asc'
            } else if (req.body.sort == 'desc') {
                let sort = '&sort=rating&order=desc'
            }
            console.log('>>> body : ', req.body)
            let { cuisine_id, establishment_id } = req.params
            cuisine_id ? cuisine_id : 1040
            establishment_id ? establishment_id : 1

            let URL = `https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&cuisines=${cuisine_id}&establishment_type=${establishment_id}${sort}`
            let ZOMATO_KEY = '980fda904333cc2eb792a7775c6f12bc'
            let response = await Axios.get(URL, { headers: { 'user-key': ZOMATO_KEY } })
            let temp = response.data.restaurants
            let result = []
            for (let i = 0; i < temp.length; i++) {
                // console.log(temp[i])

                result.push({
                    name: temp[i].restaurant.name,
                    address: temp[i].restaurant.location.address,
                    cuisines: temp[i].restaurant.cuisines,
                    average_cost_for_two: temp[i].restaurant.average_cost_for_two,
                    user_rating: temp[i].restaurant.user_rating.aggregate_rating,
                    featured_image: temp[i].restaurant.featured_image,
                    timings: temp[i].restaurant.timings
                })
            }

            return res.json({ data: result })
        } catch (err) {
            // console.log(err)
            return res.status(500).json(err)
        }
    }

    static async searchCuisine(req, res) {
        try {
            console.log('>>> params : ', req.params)
            let { cuisine_id } = req.params
            cuisine_id ? cuisine_id : 1040

            let URL = `https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&cuisines=${cuisine_id}`
            let ZOMATO_KEY = '980fda904333cc2eb792a7775c6f12bc'
            let response = await Axios.get(URL, { headers: { 'user-key': ZOMATO_KEY } })
            let temp = response.data.restaurants
            let result = []
            for (let i = 0; i < temp.length; i++) {
                // console.log(temp[i])

                result.push({
                    name: temp[i].restaurant.name,
                    address: temp[i].restaurant.location.address,
                    cuisines: temp[i].restaurant.cuisines,
                    average_cost_for_two: temp[i].restaurant.average_cost_for_two,
                    user_rating: temp[i].restaurant.user_rating.aggregate_rating,
                    featured_image: temp[i].restaurant.featured_image,
                    timings: temp[i].restaurant.timings
                })
            }

            return res.json({ data: result })
        } catch (err) {
            // console.log(err)
            return res.status(500).json(err)
        }
    }

    static async searchEstablishment(req, res) {
        try {
            console.log('>>> params : ', req.params)
            let { establishment_id } = req.params
            establishment_id ? establishment_id : 1

            let URL = `https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&establishment_type=${establishment_id}`
            let ZOMATO_KEY = '980fda904333cc2eb792a7775c6f12bc'
            let response = await Axios.get(URL, { headers: { 'user-key': ZOMATO_KEY } })
            let temp = response.data.restaurants
            let result = []
            for (let i = 0; i < temp.length; i++) {
                // console.log(temp[i])

                result.push({
                    name: temp[i].restaurant.name,
                    address: temp[i].restaurant.location.address,
                    cuisines: temp[i].restaurant.cuisines,
                    average_cost_for_two: temp[i].restaurant.average_cost_for_two,
                    user_rating: temp[i].restaurant.user_rating.aggregate_rating,
                    featured_image: temp[i].restaurant.featured_image,
                    timings: temp[i].restaurant.timings
                })
            }

            return res.json({ data: result })
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
