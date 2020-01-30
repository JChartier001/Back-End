const jwt = require("jsonwebtoken")

const secret = require('../config/secret')

module.exports = (req, res, next) => {
  const {authorization}  = req.headers
    if ( authorization ) {
    jwt.verify( authorization, secret.jwt, function (err, decodeToken) {
      if (err) {
        res.status(401).json({ message: "Invalid Token, you shall not pass!"})
      } else {
        req.token = decodeToken
        next()
      }
    })
  } else {
    res.status(400).json({ message: "Try again!"})
  }

}

// function authenticate (req, res, next) {
//     const token = req.headers.authorization;

//     if (token) {
//         jwt.verify(token, secret, (err, decoded) => {
//             if (err) {
//                 return res.status(401).json(err)
//             } else {
//                 req.decoded = decoded;
//                 next();
//             }
//         });
//     } else {
//         return res.status(401).json({
//             error: "No token provided, must be set on the Authorization Header"
//         })
//     }
// }

// module.exports = authenticate;
