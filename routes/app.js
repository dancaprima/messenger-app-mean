var express = require('express');
var router = express.Router();
// var User = require('../models/user');

router.get('/', function (req, res, next) {
   res.render('index');
});



// router.get('/message/:msg', function (req, res, next) {
//     res.render('node', { message : req.params.msg});
// });// ini fungsi yang di dapat dari message 

// router.post('/', function (req, res, next){
//     var email = req.body.email;// parameter name yang harus sama di html adalah req.body.blablabla
//     var user = new User({
//         firstname: 'Danca',
//         lastname: 'Prima',
//         password: 'klaten',
//         email: email
//     });
//     user.save();
//     res.redirect('/');
// });// fungsi ini mengirim ke fungsi router.get

module.exports = router;
