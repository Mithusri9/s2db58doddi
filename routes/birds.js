var express = require('express');
const birds_controlers= require('../controllers/birds'); 
var router = express.Router();

// A little function to check if we have an authorized user and continue on or
 // redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET home page. */
router.get('/', birds_controlers.bird_view_all_Page ); 
//* GET detail costume page */ 
router.get('/detail', birds_controlers.bird_view_one_Page); 
/* GET create costume page */ 
router.get('/create',secured, birds_controlers.bird_create_Page); 
/* GET create update page */ 
router.get('/update',secured, birds_controlers.bird_update_Page); 

/* GET delete costume page */ 
router.get('/delete',secured, birds_controlers.bird_delete_Page); 


module.exports = router;
