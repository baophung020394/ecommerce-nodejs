"use strict";

const express = require("express");
const accessController = require("../../controllers/access.controller");
const { asyncHandler } = require("../../helpers/asyncHandler");

const router = express.Router();

//sign up
router.post("/shop/signup", asyncHandler(accessController.signUp)); // asyncHandler is middleware to handle exceptions in async functions

router.post("/shop/login", asyncHandler(accessController.login));

// Authenticate utils

module.exports = router;
