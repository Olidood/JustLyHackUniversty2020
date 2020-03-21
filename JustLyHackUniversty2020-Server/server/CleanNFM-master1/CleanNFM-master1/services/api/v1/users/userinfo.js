module.exports = async function(f, opts){
    const Mongoose = require("mongoose");
    const User = Mongoose.model("user");

    f.get('userinfo/:login', async (req, res)=>{
        let user = new User({login: req.params.login});

        User.findOne({login: req.params.login}).select('name surname sex dateborn email phone key idcontract').exec(function (err, pass) {
            if(err) res.send({code:400});
            else {

		        res.send({code:200, name: pass.name, surname: pass.surname, sex: pass.sex,  dateborn: pass.dateborn, email: pass.email, phone: pass.phone, key: pass.key, idcontract: pass.idcontract});
		    }
        })
    })
};
