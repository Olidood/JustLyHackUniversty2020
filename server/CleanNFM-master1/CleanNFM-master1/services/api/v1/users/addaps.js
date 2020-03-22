module.exports = async function(f, opts){
    const Mongoose = require("mongoose");
    const Schema = Mongoose.Schema;
    const SearchSchema = Mongoose.model("search");


   f.post('/addaps/', async(req, res)=> {
     let apps = new SearchSchema({town: req.body.city,  street:  req.body.street, house:  req.body.houseNum, metro:  req.body.metro, renttype:  req.body.houseType, roomsnum:  req.body.numRooms, cost:  req.body.price, sqware:  req.body.square, allfloors:  req.body.numFloor, floorap:  req.body.floor, /*contacts: [ {phnnumb: "", emailadr:""}],*/ description:req.body.description});
   await apps.save();
   if(apps)
    res.send({code:200, apps});
  else res.send({code:400});
 })
};
