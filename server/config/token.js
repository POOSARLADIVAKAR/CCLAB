const jwt = require('jsonwebtoken')

const JWT_SECRET = "cclab"

function generate_token(user){
    let u = {
        username : user.username,
        email: user.email
    }
    const token = jwt.sign(u,JWT_SECRET,{
        expiresIn : 10 //24 hours expiry
    });
    return token
}

module.exports = {generate_token}