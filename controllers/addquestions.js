const addquestions = require('../model/questionsSchema')




exports.addEmployeeQuestion = (req,res) =>{
    console.log("add emples name and questions 123",req.body.questionsAndRanking.question)
    var {employeeName,employeeID,questionsAndRanking,remark} = req.body
    const questionsResponse = new addquestions({
        employeeName:employeeName,
        employeeID:employeeID,
        questionsAndRanking:{question:questionsAndRanking.question,rating:questionsAndRanking.rating,obtainRating:questionsAndRanking.obtainRating},
        remark:remark
    })
    questionsResponse.save().then(data => {
     res.send({message:"Sucessfully save",data:data})
    }).catch(err => {
        res.send({message:"Sucessfully get error",err:err})
    })
    }