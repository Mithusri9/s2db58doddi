var birds = require('../models/birds'); 
 
exports.bird_list = async function(req, res) { 
    try{ 
        thebirds = await birds.find(); 
        res.send(thebirds); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
 
// for a specific Costume. 
exports.birds_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.birds_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.birds_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.birds_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id); 
}; 