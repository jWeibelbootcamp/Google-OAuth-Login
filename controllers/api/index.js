const router = require('express').Router();

const dogRoutes = require('./dog-routes');
const userRoutes = require('./user-routes');
const dashRoutes = require('./dashboard-routes');

router.use('/dashboard', dashRoutes);
// router.use('/user', userRoutes);
router.use('/dog', dogRoutes);

module.exports = router;