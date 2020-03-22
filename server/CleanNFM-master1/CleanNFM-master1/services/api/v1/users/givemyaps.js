module.exports = async function(f, opts){
    const Mongoose = require("mongoose");
    const Schema = Mongoose.Schema;
    const Search = Mongoose.model("search");


   f.get('/givemyaps/:login', async (req, res)=> {
      const search = await Search.find({contacts:{emailadr: req.params.login}}).exec();
          if(search) res.send({code:200, search});
          else res.send({code:400});
  })
};
