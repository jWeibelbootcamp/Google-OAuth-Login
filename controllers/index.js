const router = require('express').Router();
// const homeRoutes = require('./home-routes');
// const apiRoutes = require('./api/index');

// router.use("/", homeRoutes);

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/register', (req, res) => {
    res.render('register')
});

module.exports = router; 
