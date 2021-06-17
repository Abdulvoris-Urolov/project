const express = require(`express`);
const router = express.Router();
const {signup, signin, requireSignin } = require('../controller/auth')
const { validateRequest, isRequestValidated } = require('../validators/auth');

router.post(`/signup`, validateRequest, isRequestValidated, signup);
router.post(`/signin`, signin);

router.post(`/profile`, requireSignin, (req, res) => {
    res.status(200).json({ user: `profile`})
});


module.exports = router; 