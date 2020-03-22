module.exports = async function(f, opts){
    const Mongoose = require("mongoose");
    const Schema = Mongoose.Schema;
    const MyAps = Mongoose.model("myaps");


   f.get('/givemyaps/:login', async (req, res)=> {
      const search = await MyAps.find({ownerlogin: req.params.login}).exec();
          if(search) res.send({code:200, search});
          else res.send({code:400});
  })
};
