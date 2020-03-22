module.exports = async function(f, opts) {
const Mongoose = require("mongoose");
const User = Mongoose.model("user");

f.get('/signup/:login/:password', async (req, res)=>{
    let user = new User({login: req.params.login, password: req.params.password, name: "",  surname: "", sex:  "", dateborn:  "", email:  "", phone:  "", key:"", idcontract: ""});

    User.findOne({login: req.params.login},  function (err, login) {
        if(!login) {
            user.save();
            user.isComplexExist = false;
            res.send({code:200});
        }
        else res.send({code:228});
    });
});
};
