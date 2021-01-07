const Axios = require('axios')

class CoronaController {
    static async coronaGlobal(req, res) {
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

    static async coronaIndonesia(req, res) {
        try {
            let URL = `https://covid19.mathdro.id/api/countries/ID`
            let response = await Axios.get(URL)
            console.log(response)

            let sendBack = {
                confirmed: response.data.confirmed.value,
                recovered: response.data.recovered.value,
                deaths: response.data.deaths.value,
                lastUpdate: response.data.lastUpdate
            }

            return res.json({ data: sendBack })
        } catch (err) {
            // console.log(err)
            return res.status(500).send(err)
        }
    }

    static async coronaIndonesiaProvinsi(req, res) {
        try {
            let URL = `https://api.kawalcorona.com/indonesia/provinsi/`
            let response = await Axios.get(URL)
            console.log(response.data)
            let sendData = response.data.map(covid => {
                return {
                    province: covid.attributes.Provinsi,
                    confirmed: covid.attributes.Kasus_Posi,
                    recovered: covid.attributes.Kasus_Semb,
                    deaths: covid.attributes.Kasus_Meni,
                }
            })

            return res.json({ data: sendData })
        } catch (err) {
            // console.log(err)
            return res.status(500).send(err)
        }
    }
}

module.exports = CoronaController