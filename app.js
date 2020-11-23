require('dotenv').config()
const express = require('express');
const app = express();
const resRouter = require('./src/routes/restaurants')
const indexRouter = require('./src/routes/index')
const typeRouter = require('./src/routes/types')
const cityRouter = require('./src/routes/city')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/', indexRouter)
app.use('/restaurants',resRouter)
app.use('/types',typeRouter)
app.use('/cities',cityRouter)


const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})