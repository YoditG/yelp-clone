const pool = require('./../client')

module.exports = 

{
    cityList: (req,res)=>{
        pool
        .query("SELECT * FROM city")
        .then((data) => res.send(JSON.stringify(data.rows)))
        .catch((err) => res.send(err));
        //res.send('list all cities.')
    }
}