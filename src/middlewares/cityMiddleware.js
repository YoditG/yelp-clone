const pool = require('./../client')
module.exports = {
    checkCity: (req,res,next)=>{
        const {id} = req.params;
        pool
        .query("SELECT * FROM city WHERE id=$1",[id])
        .then((data) =>{if (data) req.city = data.rows;
                next();
            })
        .catch((err) => res.send(err));
        //check whether a restaurant with id exists
        //if (exists) then 
        // save res details in req object: req.restaurant = restaurant and return next()
        // else res.sendStatus(404)
    }
}