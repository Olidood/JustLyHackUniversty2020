module.exports = async function(f, opts){
    const Mongoose = require("mongoose");
    const Schema = Mongoose.Schema;
    const Search = Mongoose.model("search");


   f.post('/Searching/', (req, res)=> {
    /*  let search = new Search({roomsnum: req.params.numberRooms});
          Search.findOne({roomsnum: req.params.numberRooms},  function (err, pass) {
            if(!roomsnum) {
              search.isComplexExist = false;
              res.send({code:200, roomsnum: pass.roomsnum});
          }
  else res.send({code:228});
          */
      let search = new Search({roomsnum: req.params.numberRooms,  roomsnum:  req.params.numberRooms, renttype:  req.params.apsType});
          Search.find({//roomsnum: req.params.numberRooms},  function (err, pass) {
            mincoast: {$gte: req.params.priceFrom},
            maxcoast: {$lte: req.params.priceTo},
            roomsnum:  req.params.numberRooms,
            renttype:  req.params.apsType


      }).exec(function (err, tmp) {
          if(err) res.send({code:400});
          if(!tmp) res.send({code:1488});
          else res.send({code:200, roomsnum: tmp.roomsnum, renttype: tmp.renttype, cost: tmp.cost})
      })
  })
};
        /*
        search.save();

      res.send({code:200, id: search._id});}

      Search.findOne({
      name: req.body.name,
      sex: req.body.sex,
      description: req.body.description,
      difficult: req.body.difficult,
      category: req.body.category,
      minWeight: req.body.minWeight,
      maxWeight: req.body.maxWeight
  }).exec(function (err, tmp) {
      if(err) {
          res.send({code:400});
      }
      else{
          res.send({code:200, id: tmp._id})
      }
  });
})
};

        priceFrom: pf, priceTo: pT, numberRooms: nr, apsType:aRH
      / search.exec(function (err, tmp) {
            let docNum = Math.floor(Math.random() * tmp.length);
            Exercises.find({_id: {$in: tmp.exercises}}).exec(function (err, exercises) {
                if(err) res.send({code:400});
                else res.send({code:200, complex: tmp.length, num: docNum});
            })
            //res.send({code:200, complexName: tmp[0].name});
        });
    })
};*/
