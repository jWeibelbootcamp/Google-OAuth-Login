const router = require('express').Router();
const { Dog, User, Reservations } = require("../../models");

// router.post('/', (req, res) => {
// 	User.create({
		// userName: req.body.userName,
    //     email: req.body.email,
    // 	password: req.body.password,
// 	}) 
// 		.then((dbUserData) => res.json(dbUserData))
// 		.catch ((err) => {
// 		res.status(500).json(err);
// 	});
// });

router.post('/', async (req, res) => {
  try {
      const userData = await User.create({
        userName: req.body.userName,
        email: req.body.email,
    	  password: req.body.password,
      })
      res.status(200).json(userData);
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
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
  
      req.params.save(() => {
        req.params.userId = user.id;
        req.params.username = user.username;
        req.params.loggedIn = true;
  
        res.json({ user, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(400).json({ message: 'No user account found!' });
    }
  });

module.exports = router;
