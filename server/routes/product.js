const express = require('express');

const router = express.Router();

//middlewares
const {adminCheckCreateP ,adminCheckDeleteP } = require('../middlewares/auth');


//controllers
const { create ,listAll ,remove, read} = require('../controllers/product');


router.post('/product', adminCheckCreateP , create);
router.get('/products/:count', listAll);
router.get('/product/:slug' , read);
// router.put('/product/:slug',  adminCheckUpdateP , update);
router.delete('/product/:slug', adminCheckDeleteP , remove);

module.exports = router;
