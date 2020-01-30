const router = require('express').Router()

const UsersM = require('./users-model')
const restricted  = require('../middlewear/restricted')

router.get('/users', restricted, (req, res) =>{
    UsersM.find()
        .then(users => {
            res.json(users)
        })
        .catch(err => res.send(err))
}, [])

module.exports = router