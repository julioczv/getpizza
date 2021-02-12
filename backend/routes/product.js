const express = require('express');
const router = express.Router();
const { Product } = require('../models')

router.get('/', async (req, res) => {
    const product = await Product.findAll({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
    const product = await Product.findAll({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(product);
});




router.post('/', async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json(product)
});


router.delete('/:id', async (req, res) => {
    const product = await Product.destroy({
        where:{
        id: req.params.id
        }
    });
    res.status(200).json(product)
});

router.put('/:id', async (req, res) =>{
    const product = await Product.update({
        where: {
            id:req.params.id
        }
    });
    res.status(200).json(product)
});

module.exports = router;