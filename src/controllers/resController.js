const pool = require('./../client')
module.exports = {
    resList: (req,res)=>{
        pool
            .query("SELECT * FROM restaurant")
            .then((data) => res.send(data.rows))
            .catch((err) => res.sendStatus(500));
        
    }
}