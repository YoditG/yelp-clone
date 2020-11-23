const express = require('express');
const typeMiddleware = require('../middlewares/typeMiddlewares')
const router = express.Router()
const typeController = require('./../controllers/typeController')

router.get('/',typeController.typeList)

router.get('/:id',typeMiddleware.checkTypes,(req,res)=>{
    
    res.send(req.type)
})

module.exports = router;