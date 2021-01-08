const { User } = require('../models')
const { comparePass, hashPassword } = require('../helpers/hash')
const { generateToken } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library');

class UserController {
    static login(req, res) {
        const { email, password } = req.body
        User.findOne({
            where: {
                email: email
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
                        access_token: access_token
                    })
                } else {
                    throw {
                        msg: 'Invalid Email/Password'
                    }
                }
            })
            .catch(err => {
                res.status(401).json(err)
            })
    }

    static async loginGoogle(req, res, next) {
        try {
            // console.log('>>> body.id_token : ', req.body.id_token)
            const { id_token } = req.body
            const client = new OAuth2Client('847872434739-ieov91f4btpg8551tira12pvdtatudrg.apps.googleusercontent.com')
            const ticket = await client.verifyIdToken({
                idToken: id_token,
                audience: '847872434739-ieov91f4btpg8551tira12pvdtatudrg.apps.googleusercontent.com'
            });

            const payload = ticket.getPayload()
            // console.log('>>> payload : ', payload)

            const email = payload.email
            let password = email.toString().split('@')
            password = password[0]
            console.log('>>>user : ', email, password)

            let user = await User.findOne({ where: { email } })
            // console.log('>>> user : ', user)

            if (!user) {
                let newUser = { email, password }

                let createUser = await User.create(newUser)
                const payload = {
                    id: createUser.id,
                    email: createUser.email
                }

                const access_token = generateToken(payload)
                console.log('>>> access_token', access_token)

                return res.status(201).json({ access_token })

            } else {
                const payload = {
                    id: user.id,
                    email: user.email
                }

                const access_token = generateToken(payload)
                console.log('>>> access_token', access_token)

                return res.status(200).json({ access_token })
            }

        } catch (err) {
            next(err)
        }
    }
    static register (req,res,next) {
        console.log('masuk register')
        const {name, email, password} = req.body  
        User.create({name, email, password:hashPassword(password)})
        .then(data => {
            res.status(201).json({
                name:data.name,
                email:data.email
            })
        })
        .catch(err => {
            next(err)
        })
}

}

module.exports = {UserController}
