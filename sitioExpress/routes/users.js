var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
  console.log(res);
});

router.post('/', function (req, res, next) {
  console.log(req.body.user);
  console.log(req.body.pass);
 
  res.render('users', {
    user: req.body.user,
    pass: req.body.pass
  });
});

module.exports = router;
