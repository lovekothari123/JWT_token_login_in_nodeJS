const pmsRegistration = require('../model/pmsmodelRegistration')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.registration = (req, res) => {
    var { firstName, lastName, email, gender, dateOfBirth, dateOfJoning, password, isadmin } = req.body
    console.log("Sucessfully  Done 1\n", req.body)

    bcrypt.hash(password, 10, function (err, hash) {
        console.log("HASH GENRATE ", hash)
        if (err) {
            console.log('Error hashing password for user', user.name);
            next(err);
        } else {

            const pmsRegistrationFileds = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                gender: gender,
                dateOfBirth: dateOfBirth,
                dateOfJoning: dateOfJoning,
                password: hash,
                isadmin: isadmin
            }

            var data = new pmsRegistration(pmsRegistrationFileds)
            setHashAndSave(data, res)
        }
    });

}


function setHashAndSave(playload, res) {
    playload.save().then(data => {
        console.log("Sucessfully  Done 2\n", data)
        res.send(data)
    }).catch(err => {
        console.log("Sucessfully  Done 3 \n", err)
        res.send("Error 404")
    })
}

exports.login = (req, res) => {
    const { email, password } = req.body;
    console.log("Login APi", email, "===", password)
    let result = {};
    let status = 200;
    pmsRegistration.findOne({ email }, (err, user) => {
        if (!err && user) {

            console.log("User Login Auth ===>\n ", password, "========", user.password)
            bcrypt.compare(password, user.password).then(match => {
                console.log("User Login Auth", match, "\n")
                if (match) {
                    status = 200;
                    // Create a token
                    const payload = { user: user.name };
                    const options = { expiresIn: '2d', issuer: 'https://scotch.io' };
                    const secret = "addjsonwebtokensecretherelikeQuiscustodietipsoscustodes";
                    const token = jwt.sign(payload, secret, options);
                    // console.log('TOKEN', token);
                    result.token = token;
                    result.status = status;
                    result.result = user;
                } else {
                    status = 401;
                    result.status = status;
                    result.error = 'Authentication error';
                }
                res.status(status).send(result);
            }).catch(err => {
                status = 500;
                result.status = status;
                result.error = err;
                res.status(status).send(result);
            });
        } else {
            status = 401;
            result.status = status;
            result.error = 'Authentication error Unable to login';
            res.status(status).send(result);
        }
    }).catch(err => {
        status = 500;
        result.status = status;
        result.error = err;
        res.status(status).send(result);
    })

}


exports.addEmployeeQuestion = (req,res) =>{
console.log("add emples name and questions ")
 


}