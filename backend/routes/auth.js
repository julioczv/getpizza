const express = require('express');
const router = express.Router();
const { User } = require('../models');
const sha256 = require('js-sha256');
const jwt = require ('jsonwebtoken')

router.post('/', async (req, res) => {
    const result = await User.findAll({
        where: {
            userName: req.body.userName,
            password: sha256(req.body.password+767)
        }
    });
    if(!result.length){
        res.status(403).json({ auth:false });
    }
    const token = jwt.sign({id: result.id}, '@ti35', {expiresIn: 999999999});

    res.status(200).json({ auth: true, token:token });

});


module.exports = router;