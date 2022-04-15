var express = require('express');
const birds_controlers= require('../controllers/birds'); 
var router = express.Router();

/* GET home page. */
router.get('/', birds_controlers.bird_view_all_Page ); 
module.exports = router;
