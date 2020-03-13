var express = require('express');
var router = express.Router();
var pmsEvalutation = require('../controllers/registration')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/v1/testing', function (req, res, next) {
  res.send('Api working sucessfully');
});

router.post('/api/v1/registration',pmsEvalutation.registration);
router.post('/api/v1/login',pmsEvalutation.login);
router.post('/api/v1/addemployeeandquestions',pmsEvalutation.addEmployeeQuestion)


module.exports = router;
