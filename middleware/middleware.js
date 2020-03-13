
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

 function sendResponse(status,message,data,res){
res.send({
    status:status,
    message:message,
    data:data
})
}

 function errorResponse(err,res,message,status){
    res.send({
        status:status,
        message:message,
        error:err
    })
}


 export default function setValuesWithEnciptionToken(req){
    var { firstName, lastName, email, gender, dateOfBirth, dateOfJoning, password, isadmin } = req.body
    console.log("Sucessfully  Done 1\n", req.body)
    bcrypt.hash(password, 10, function (err, hash) {
        console.log("HASH GENRATE ", hash)
        if (err) {
            console.log('Error hashing password for user', user.name);
            return next(err);
        } else {
            const pmsRegistrationFileds ={
                firstName: firstName,
                lastName: lastName,
                email: email,
                gender: gender,
                dateOfBirth: dateOfBirth,
                dateOfJoning: dateOfJoning,
                password: hash,
                isadmin: isadmin
            }     
            return  pmsRegistrationFileds
            
        }
    });
}


