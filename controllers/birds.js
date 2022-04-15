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
exports.birds_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await birds.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Costume create on POST. 
exports.birds_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new birds(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.bird_name = req.body.bird_name; 
    document.type = req.body.type; 
    document.national_bird = req.body.national_bird; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// Handle Costume delete form on DELETE. 
exports.birds_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.birds_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await birds.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.bird_name)  
               toUpdate.bird_name = req.body.bird_name; 
        if(req.body.type) toUpdate.type = req.body.type; 
        if(req.body.national_bird) toUpdate.national_bird = req.body.national_bird; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

exports.bird_view_all_Page = async function(req, res) { 
    try{ 
        thebirds = await birds.find(); 
        res.render('birds', { title: 'birds Search Results', results: thebirds }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 