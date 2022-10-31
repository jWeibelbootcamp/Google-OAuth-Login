const router = require('express').Router();
const homeRoutes = require('./home-routes');
// const apiRoutes = require('./api/index');

router.use("/", homeRoutes);

module.exports = router; 
