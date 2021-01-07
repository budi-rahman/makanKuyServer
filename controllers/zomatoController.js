const Axios = require('axios')

class ZomatoController {
    static async cuisines(req, res) {
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