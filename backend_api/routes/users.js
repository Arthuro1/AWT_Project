const express = require("express");
const router = require('express-promise-router')();
const passport = require('passport');
const passportConfig = require('../config/passport');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const User = require("../models/user");
const UserController = require('../controller/users');
const {validateBody, schemas} = require('../helpers/routeHelpers');


const passportAutthentification = (strategyName, isWithSession) => {
    return passport.authenticate(strategyName, {session: isWithSession})
};

router.route('/register')
    .post(validateBody(schemas.registerSchema), UserController.register);

router.route('/login')
    .post(validateBody(schemas.loginSchema), passportAutthentification ('local', false), UserController.logIn);

router.route('/secret')
    .get(passportAutthentification ('jwt', false), UserController.secret);

router.route('/oauth/google')
    .post(passportAutthentification ('googleToken', false), UserController.googleOAuth);

router.route('/oauth/facebook')
    .post(passportAutthentification ('facebookToken', false), UserController.facebookOAuth);



module.exports = router;
