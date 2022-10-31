// Once logged in, redirect to Account page.

const router = require('express').Router();

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        // res.redirect('/dashboard');
        console.log("thank sally");
        return;
    }
    res.render('login');
});


router.get('/register', (req, res) => {
    if (req.session.loggedIn) {
        // res.redirect('/dashboard');
        console.log("thank sally");
        return;
    }
    res.render('register');
});

module.exports = router;