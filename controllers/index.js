const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api/index');
// const boardingRoutes = require('./home-routes');
// const groomingRoutes = require('./home-routes');
// const daycareRoutes = require('./home-routes');


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

router.get('/dashboard/new', (req, res) => {
    res.render('newdog')
});

router.get('/boardingBooking', (req, res) => {
    res.render('boardingBooking')
});

router.get('/groomingBooking', (req, res) => {
    res.render('groomingBooking')
});

router.get('/daycareBooking', (req, res) => {
    res.render('daycareBooking')
});



module.exports = router; 
