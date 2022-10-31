const { User, Dog } = require('../../models');

const router = require('express').Router();

// change back to just '/user' after session.
router.get('/user/:username', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.params.username
                // user_id: req.session.user_id
            }
        })
        res.status(200).json(userData);
        res.render('userInfo');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// change back to just '/' after session.
router.get('/:user_id', async (req, res) => {
    try {
        const dogData = await Dog.findAll({
            where: {
                user_id: req.params.user_id
                // user_id: req.session.user_id
            }
        })
        res.status(200).json(dogData);
        res.render('dogInfo');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const dogData = await Dog.create({
            dogName: req.body.dogName,
            dogBreed: req.body.dogBreed,
            dogSex: req.body.dogSex,
            dogAge: req.body.dogAge,
            dogWeight: req.body.dogWeight,
            dogVet: req.body.dogVet,
            dogConditions: req.body.dogConditions,
            user_id: req.body.user_id, //req.session.user_id
        })
        res.status(200).json(dogData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router; 