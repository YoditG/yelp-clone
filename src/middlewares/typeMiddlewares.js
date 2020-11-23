const pool = require('./../client')
module.exports = {
    checkTypes: (req,res,next)=>{
        const {id} = req.params;
        pool
        .query("SELECT * FROM type WHERE id=$1",[id])
        .then((data) =>{if (data) req.type = data.rows;
                next();
            })
        .catch((err) => res.send(err));
    }
}