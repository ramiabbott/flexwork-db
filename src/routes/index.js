const { Router } = require('express');

const router = Router();
const Users = require('../routes/userRoutes');
const Professionals = require('../routes/professionalRoutes');
const Companies = require('../routes/companyRoutes');


router.use('/users', Users);
router.use('/professionals', Professionals);
router.use('/companies', Companies);

module.exports = router;
