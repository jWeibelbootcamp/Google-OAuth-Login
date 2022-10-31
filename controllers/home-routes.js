const router = require('express').Router();

const { User, Dog } = require('../models');

router.get('/', (req, res) => {
    Dog.findAll({
        attributes: [
            "id",
            "dogName",
            "dogBreed",
            "dogSex",
            "dogAge",
            "dogWeight",
            "dogVet",
            "dogConditions",
        ],
        include: [
            {
                model: User,
                attributes: ["username"],
            },
            // {
            //     model: Reservations,
            //     attributes: ["dropOffDate"],
            // },
        ],
    })
    // .then(dbDogData => {
    //     const dogs = dbDogData.map((dog) => dog.get({ plain: true }))
    //     res.render("main", {
    //         dogs,
    //         loggedIn: req.session.loggedIn
    //     });
    // })    
    // .catch ((err) => {
    // res.status(500).json(err);
});
// });

module.exports = router;