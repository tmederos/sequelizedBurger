const express = require("express");

const router = express.Router();

var db = require("../models");

//create routers and export them

// Select all burgers from the database and render them
router.get("/", function(req, res) {
  db.Burgers.findAll({}).then(function(dbBurger) {
    var burgerObj = {
      burgers: dbBurger
    };
    console.log( "In Get/ findAll.");
    console.log( "burgerObj - "+ JSON.stringify( burgerObj, null, 2 ));
    res.render("index", burgerObj);
  });
});

// Note: the redirect is commented out and a 200 status is passed back to
// the ajax call because the page was not refreshing properly. The front-end
// uses a location.reload() when the status is passed back.
//
// Insert a new burger to the database
router.post("/", function(req, res) {
    db.Burgers.create(req.body).then(function(dbBurger) {
      res.json(dbBurger);
      console.log(dbBurger);
      // res.sendStatus(200);
        // res.redirect("/");
  });
});

// Update a burger's devoured status
router.put("/:id", function(req,res) {
    db.Burgers.update({
      devoured: true
    }, {
      where: {
          id: req.params.id
      }
    }).then(function(dbBurger) {
        console.log(result);
        res.sendStatus(200);
        // res.redirect("/");
  });
});

// Delete a burger from the database
router.delete("/:id", function(req,res) {
    db.Burgers.destroy ({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
        console.log(result);
        res.sendStatus(200);
      // res.redirect("/");

    });
});

// Export routes for server.js to use.
module.exports = router;
