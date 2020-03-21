module.exports = async function(f, opts){
    const Mongoose = require("mongoose");
    const Schema = Mongoose.Schema;
    const Complexes = Mongoose.model("search");


    f.get('/search/:coast/:floorap/:roomsnum/:renttype', (req, res)=> {
        let search = Search.find({
            mincoast: {$lte: req.params.coast},
            maxcoast: {$gte: req.params.coast},
            floorap:   req.params.floorap,
            roomsnum:  req.params.roomsnum,
            renttype:  req.params.renttype,
        });

        search.exec(function (err, tmp) {
            let docNum = Math.floor(Math.random() * tmp.length);
            Exercises.find({_id: {$in: tmp.exercises}}).exec(function (err, exercises) {
                if(err) res.send({code:400});
                else res.send({code:200, complex: tmp.length, num: docNum});
            })
            //res.send({code:200, complexName: tmp[0].name});
        });
    })
};
