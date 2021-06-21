const express = require(`express`);
const router = express.Router();
const {signup, signin } = require('../controller/auth')
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');

router.post(`/signup`, validateSignupRequest, isRequestValidated, signup);
router.post(`/signin`, validateSigninRequest, isRequestValidated, signin);

module.exports = router; 