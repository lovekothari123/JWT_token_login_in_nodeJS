var mongoose = require("mongoose")


var PmsRegistration = mongoose.Schema(
    {
        // firstName: { Type: String, require: true },
        // lastName: { Type: String, require: true },
        // email: { Type: String, require: true },
        // gender: { Type: String, require: true },
        // dateOfBirth: { Type: String, require: true },
        // dateOfJoning: { Type: String, require: true }
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