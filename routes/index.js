const router = require('express').Router();
const apiRoutes = require('./api');
//const categoryRoutes = require('./api/category-routes')

// here we are REDIRECTING the incoming ClIENT request
router.use('/api', apiRoutes);

//router.use('/api/categories', categoryRoutes)

router.use((req, res) => {
  res.send("<h1>route incorrect!</h1>")
});



module.exports = router;