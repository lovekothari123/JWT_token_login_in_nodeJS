var mongoose = require("mongoose")


var PmsRegistration = mongoose.Schema(
    {
       
        firstName: String,
        lastName: String,
        email:{
            type:String,
            required: true,
            trim: true,
            unique: true
          },
        gender: String,
        dateOfBirth:String,
        dateOfJoning: String,
        isadmin:Boolean,
        password:{
            type:String,
            required: true,
            trim: true
          }
    }, {
    timestamps: true
}
)

module.exports = mongoose.model("UserList", PmsRegistration)