const jwt = require("jsonwebtoken")
const SECRET_KEY = '12345678'

function generateToken(params) {
    const token = jwt.sign(params, SECRET_KEY)
    return token
}
function cekToken(params) {
    return jwt.verify(params, SECRET_KEY)
}

module.exports = { generateToken, cekToken }