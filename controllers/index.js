const router = require('express').Router();
const apiRoutes = require('./api/index');
// const homeRoutes = require('./home-routes');

router.use('/api', apiRoutes);

// router.use("/", homeRoutes);

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/register', (req, res) => {
    res.render('register')
});

module.exports = router; 
