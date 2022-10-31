const router = require('express').Router();
const { Dog, User, Reservations } = require("../../models");

router.put('/register', (req, res) => {
	user.create({
		userName: req.body.userName,
        email: req.body.email,
    	password: req.body.password,
	}) 
		.then((dbUserData) => res.json(dbUserData))
		.catch ((err) => {
		res.status(500).json(err);
	});
});

module.exports = router;
