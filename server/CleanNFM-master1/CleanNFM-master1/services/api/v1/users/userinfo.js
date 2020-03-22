module.exports = async function(f, opts){
    const Mongoose = require("mongoose");
    const User = Mongoose.model("user");

    f.get('userinfo/:login', async (req, res)=>{
        let user = new User({login: req.params.login});

        const us = await User.find({login: req.params.login}).exec();
        if(us!=null)
          res.send({code:200, us});
        else {
          res.send({cod:400});
        }
    })
};
