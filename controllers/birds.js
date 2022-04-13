var birds = require('../models/birds'); 
 
// List of all Costumes 
exports.birds_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: birds list'); 
}; 
 
// for a specific Costume. 
exports.birds_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: birds detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.birds_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: birds create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.birds_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: birds delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.birds_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: birds update PUT' + req.params.id); 
}; 

// List of all Costumes 
exports.birds_list = async function(req, res) { 
    try{ 
        thebirds = await birds.find(); 
        res.send(thebirds); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.birds_view_all_Page = async function(req, res) { 
    try{ 
        thebirds = await birds.find(); 
        res.render('birds', { title: 'birds Search Results', results: thebirds }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 