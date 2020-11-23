const pool = require('./../client')
module.exports = 

{
    typeList: (req,res)=>{
        pool
            .query("SELECT * FROM type")
            .then((data) => res.send(data.rows))
            .catch((err) => res.sendStatus(500));
        
    }
}