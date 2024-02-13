const express = require('express');
const router=express.Router();
const {welcome}=require("../controller/welcome_controller");
router.route('/').get(welcome);
module.exports = router;