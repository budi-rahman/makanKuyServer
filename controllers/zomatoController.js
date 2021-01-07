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
            let URL = `https://covid19.mathdro.id/api`
            let response = await Axios.get(URL)
            console.log(response.data)

            let sendBack = {
                confirmed: response.data.confirmed.value,
                recovered: response.data.recovered.value,
                deaths: response.data.deaths.value,
                image: response.data.image,
                lastUpdate: response.data.lastUpdate
            }

            return res.json({ data: sendBack })
        } catch (err) {
            // console.log(err)
            return res.status(500).json(err)
        }
    }

    static async search(req, res) {
        try {
            let URL = `https://covid19.mathdro.id/api`
            let response = await Axios.get(URL)
            console.log(response.data)

            let sendBack = {
                confirmed: response.data.confirmed.value,
                recovered: response.data.recovered.value,
                deaths: response.data.deaths.value,
                image: response.data.image,
                lastUpdate: response.data.lastUpdate
            }

            return res.json({ data: sendBack })
        } catch (err) {
            // console.log(err)
            return res.status(500).json(err)
        }
    }
}

module.exports = ZomatoController