const pool = require('./../client')
module.exports = {
    checkRestaurant: (req,res,next)=>{
        const {id} = req.params;
        pool
        .query("SELECT * FROM restaurant WHERE id=$1",[id])
        .then((data) =>{if (data) req.restaurant = data.rows;
                next();
            })
        .catch((err) => res.send(err));
    }
}