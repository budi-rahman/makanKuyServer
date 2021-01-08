const Axios = require('axios')

class WeatherController {
    static async getWeather(req, res) {
        try {
            let KEY = `95faf7a8d8997e6d00078ec77d50192c`
            let URL = `http://api.weatherstack.com/current?access_key=${KEY}&query=Jakarta`
            let response = await Axios.get(URL)
            console.log(response.data)

            return res.json({ data: response.data.current })
        } catch (err) {
            // console.log(err)
            return res.status(500).json(err)
        }
    }
}

module.exports = WeatherController