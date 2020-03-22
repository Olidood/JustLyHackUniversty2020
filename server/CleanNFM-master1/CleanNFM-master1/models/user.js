const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;


const UserSchema = new Schema(
    {
        id: String,
        name: String,
        surname: String,
        login: String,
        password: String,
        sex: String,
        dateborn: String,
        email: String,
        phone: String,
        key: String,
        idcontract: String
    }
);

const ContractSchema = new Schema({
        idcontract: String,
        city: String,
        date: [Date],
        employer:[
          {
            employername: String,
            series: String,
            namber: String,
            issued: String,
            residentat: String
          }
        ],

        owner: [
          {
            ownerrname: String,
            series: String,
            namber: String,
            issued: String,
            residentat: String
          }
        ],

        adress: String,
        floor: String,
        registration: [
          {
            xz: String,
            issue: String,
            number: String,
            date: [Date]
          }
        ],
        apartmentskeys:[
          {
          numkeys: String,
          nummailkeys: String
          }
        ],
        livewith: String,
        check:[
          {
            numdays: String,
            months: String,
          }
        ],
        damageday: String,
        payday:[
          {
            pay: String,
            firstpay: String,
            days: String
          }
        ],

        contractperiod: [Date],
        employerrequisite: [
          {
            residentat: String,
            email: String,
            pasportseria: String,
            pasportnumber: String,
            issueddate: [Date],
            issuedwho: String,
            phonenumber: String
          }
        ],

        ownerrequisite: [
          {
            residentat: String,
            email: String,
            pasportseria: String,
            pasportnumber: String,
            issueddate: [Date],
            issuedwho: String,
            phonenumber: String
          }
        ]
});



const SearchSchema = new Schema(
    {
        appartmentsid: String,
        floorap: String,
        allfloors: String,
        sqware: String,
        cost: String,
        roomsnum: String,
        town: String,
        street: String,
        house: String,
        metro: String,
        renttype: String,
        contacts: [
          {
            phnnumb: String,
            emailadr: String
          }
        ],
        description: String

    }
);
/*
const XuySchema = new Schema(
  {
    email: String,
    phone: String,
    password: String,
    passSalt: String,
    authCode: Number,
    auth: [
      {
        token: String,
        time: { type: Date, default: Date.now }
      }
    ],
    name: {
      first: String,
      second: String,
    },
  },
  {
    toObject: {
      transform: function (doc, ret, options) {
        if (!options["with_auth"]) delete ret.auth;
        if (!options["with_pass"]) {
          delete ret.password;
          delete ret.passSalt;
        }
        delete ret.__v;
        return ret;
      }
    }
  }
);
*/
UserSchema.methods = {};
/*UserSchema.statics = {
  getByToken: function (token) {
    return this.findOne({ "auth.token": token }).exec();
  },

  getById: function (id) {
    if (id instanceof String) id = Mongoose.Types.ObjectId(id.toString());
    return this.findOne({ _id: id }).exec();
  },

  getByEmail: function (email) {
    return this.findOne({ email: email }).exec();
  }
};
*/
Mongoose.model("user", UserSchema);
Mongoose.model("contract", ContractSchema);
Mongoose.model("search", SearchSchema);
