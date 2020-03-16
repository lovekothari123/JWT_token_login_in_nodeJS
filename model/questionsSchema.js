var mongoose = require("mongoose")

var questiosList = mongoose.Schema({
        employeeName:String,
        employeeID:String,
        questionsAndRanking:[{question:String,rating:String,obtainRating:String}],
        remark:String
})
module.exports = mongoose.model('questionsListandRanking',questiosList);