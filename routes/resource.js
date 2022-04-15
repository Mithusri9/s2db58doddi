var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var birds_controller = require('../controllers/birds'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// bird ROUTES /// 
 
// POST request for creating a bird.  
router.post('/birds', birds_controller.birds_create_post); 
 
// DELETE request to delete bird. 
router.delete('/birds/:id', birds_controller.birds_delete); 
 
// PUT request to update bird. 
router.put('/birds/:id', birds_controller.birds_update_put); 
 
// GET request for one bird. 
router.get('/birds/:id', birds_controller.birds_detail); 
 
// GET request for list of all bird items. 
router.get('/birds', birds_controller.bird_list); 
 
module.exports = router;