// const { Place } = require('../models')
const Axios = require('axios')

class PlaceController {
    static async getAll(req, res) {
        try {
            let province = await Axios.get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
            let provinceAll = province.data.provinsi
            console.log(provinceAll.length)

            let array = []
            let city, cityAll

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[0].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[1].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[2].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[3].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[4].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[5].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[6].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[7].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[8].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[9].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[10].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[11].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[12].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[13].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[14].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[15].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[16].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[17].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[18].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[19].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[20].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[21].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[22].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[23].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[24].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[25].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[26].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[27].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[28].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[29].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[30].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[31].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[32].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            city = await Axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceAll[33].id}`)
            cityAll = city.data.kota_kabupaten
            array.push(...cityAll)

            array = array.map(kota => {
                let namaKota = kota.nama.split(' ')
                namaKota.splice(0, 1)

                return { kota: namaKota.join(' ') }
            })
            console.log(array)

            res.status(200).json({ data: array })
        } catch (err) {
            res.status(500).send(err)
        }
    }

    static async allProvince(req, res) {
        try {
            let province = await Axios.get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
            let provinceAll = province.data.provinsi
            console.log(provinceAll.length)

            res.status(200).json({ data: provinceAll })
        } catch (err) {
            res.status(500).send(err)
        }
    }
}

module.exports = { PlaceController }