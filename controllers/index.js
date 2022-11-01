const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api/index');


router.use("/", homeRoutes);
router.use('/api', apiRoutes);

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/register', (req, res) => {
    res.render('register')
});

router.get('/home', (req, res) => {
    res.render('home')
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard')
});


router.get('/services', (req, res) => {
    res.render('services')
});

router.get('/dashboard/new', (req, res) => {
    res.render('newdog')
});



module.exports = router; 
