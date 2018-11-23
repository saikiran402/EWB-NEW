const express    = require("express"),
      router     = express.Router(),
      idea = require("../models/idea"),
      middleware = require("../middleware");// automatically looks for index.js

router.get("/idea", middleware.isLoggedIn, (req, res) => res.render("campgrounds/idea"));

  // CREATE - add new idea to DB


router.post("/ideas",function(req,res){
     var   name= req.body.name;
     var   phone= req.body.Phone;
     var   year=req.body.year;
     var   PIN=req.body.PIN;
     var   idea = req.body.idea;
  
   var newIdea = {name:name,PIN:PIN,year:year,mobile:mobile,idea:idea}
  Idea.create(newIdea, function(err, user){
        if(err){
            res.render("ideas", {error: err.message});
        }
        else{
 res.redirect("/campgrounds");
        }
    });
});


        

    
      
 
module.exports = router;
