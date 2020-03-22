module.exports = async function(f, opts){
    const Mongoose = require("mongoose");
    const Schema = Mongoose.Schema;
    const User = Mongoose.model("user");


   f.post('/saveuserinfo/', async(req, res)=> {
     let rnd = Math.random();
     let key = rnd*1000000;
     const user1 = new User({name: req.body.name,  surname:  req.body.ndname, sex:  req.body.sex, dateborn:  req.body.date, email:  req.body.email, phone:  req.body.phone, login: req.body.login, key: key});
     const user =  await User.findOneAndUpdate({login: req.params.login},{
           name: req.body.name,  surname:  req.body.ndname, sex:  req.body.sex, dateborn:  req.body.date, email:  req.body.email, phone:  req.body.phone, login: req.body.login


     },{new:true, upsert:true}).exec(function(err, pass){
       if(!err){
         res.send({code:200, user});
       }else {
         res.send({code:400, user});
       }
     });

 })
};
