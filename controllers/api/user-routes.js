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

router.post('/login', async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          username: req.body.username,
        },
      });
  
      if (!user) {
        res.status(400).json({ message: 'No user account found!' });
        return;
      }
  
      const validPassword = user.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'No user account found!' });
        return;
      }
  
      req.session.save(() => {
        req.session.userId = user.id;
        req.session.username = user.username;
        req.session.loggedIn = true;
  
        res.json({ user, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(400).json({ message: 'No user account found!' });
    }
  });

module.exports = router;
