const express = require('express')
const resMiddleware = require('../middlewares/resMiddleware')
const router = express.Router()
const resController = require('../controllers/resController')
const pool = require('./../client')


router.get('/',resController.resList)

router.get('/:id',resMiddleware.checkRestaurant,(req,res)=>{
    res.send(req.restaurant)
})

module.exports = router;