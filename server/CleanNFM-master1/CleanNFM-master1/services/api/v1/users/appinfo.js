module.exports = async function(f, opts){
    const Mongoose = require("mongoose");
    const Search = Mongoose.model("search");

    f.get('appinfo/:appartmentsid', async (req, res)=>{
        let user = new User({appartmentsid: req.params.appartmentsid});

        User.findOne({appartmentsid: req.params.appartmentsid}).select('floorap allfloors sqware cost roomsnum town street house metro renttype contacts description').exec(function (err, pass) {
            if(err) res.send({code:400});
            else {

		        res.send({code:200, floorap: pass.floorap, allfloors: pass.allfloors, sqware: pass.sqware,  cost: pass.cost, roomsnum: pass.roomsnum, town: pass.town, street: pass.street, house: pass.house, metro: pass.metro, renttype: pass.renttype, contacts: pass.contacts, description: pass.description});
		    }
        })
    })
};
