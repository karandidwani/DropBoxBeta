var express = require('express');
var router = express.Router();

router.post('/doSignUp', function (req, res, next) {

    var firstname = req.body.username;
    var lastname = req.body.password;
    var email = req.body.email;
    var password = req.body.password;



    // Check the password
    if(theUser.length === 1){
        theUser[0].password === reqPassword &&
        res.status(201).json({message: "Login successful"}) ||
        res.status(401).json({message: "Login failed"});
    } else {
        res.status(401).json({message: "Login failed"});
    }
});


module.exports = router;
