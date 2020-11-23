const express = require('express')
const cityMiddleware = require('../middlewares/cityMiddleware')
const router = express.Router()
const cityController = require('../controllers/cityController')


router.get('/',cityController.cityList)

router.get('/:id',cityMiddleware.checkCity,(req,res)=>{
    res.send(req.city)
})

module.exports = router;